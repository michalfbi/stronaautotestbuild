import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { LeadSchema } from "./leads.schema";

export type { LeadInput } from "./leads.schema";

/** Zgłoszenie wysłane szybciej niż w tyle sekund od wejścia na stronę traktujemy jak bota. */
const MIN_SECONDS_ON_SITE = 3;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const parsed = LeadSchema.safeParse(data);
    if (!parsed.success) {
      // Czytelny komunikat dla użytkownika zamiast surowego JSON-a z Zod.
      throw new Error(
        parsed.error.issues[0]?.message ??
          "Sprawdź poprawność danych w formularzu.",
      );
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    // Antyspam: wypełnione pole-pułapka albo podejrzanie szybkie wysłanie.
    // Odpowiadamy "ok", żeby bot nie wiedział, że został odrzucony.
    const tooFast =
      typeof data.timeOnSiteSeconds === "number" &&
      data.timeOnSiteSeconds < MIN_SECONDS_ON_SITE;
    if (data.website?.trim() || tooFast) {
      console.warn("[submitLead] odrzucono zgłoszenie wyglądające na spam", {
        kind: data.kind,
        honeypot: Boolean(data.website?.trim()),
        tooFast,
      });
      return { ok: true as const };
    }

    const { createClient } = await import("@supabase/supabase-js");
    const { normalizeSupabaseUrl } = await import("./supabase-url");
    const url = normalizeSupabaseUrl(
      process.env.SUPABASE_URL ||
        (import.meta.env.VITE_SUPABASE_URL as string | undefined),
    );
    // Na serwerze najpierw klucz serwisowy (omija RLS — zapis zadziała nawet przy
    // brakującej polityce INSERT), a dopiero potem klucz publiczny.
    const key = (process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_PUBLISHABLE_KEY ||
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
      import.meta.env.VITE_SUPABASE_ANON_KEY) as string | undefined;
    if (!url || !key) {
      console.error("[submitLead] brak SUPABASE_URL albo klucza Supabase", {
        hasUrl: Boolean(url),
        hasKey: Boolean(key),
      });
      throw new Error(
        "Formularz chwilowo nie działa. Zadzwoń: +48 690 976 790.",
      );
    }
    const isOpaque = key.startsWith("sb_");
    const supabase = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        storage: undefined,
      },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (isOpaque && h.get("Authorization") === `Bearer ${key}`)
            h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const payload: Record<string, string | null> = {
      kind: data.kind,
      name: data.name || null,
      phone: data.phone || null,
      email: data.email ? String(data.email) : null,
      url: data.url || null,
      vin: data.vin ? data.vin.toUpperCase() : null,
      message: data.message || null,
      source: data.source || null,
    };

    const { error } = await supabase.from("leads").insert(payload as never);
    if (error) {
      // Szczegóły trafiają do logów Cloudflare (Workers → Logs), użytkownik widzi prosty komunikat.
      console.error("[submitLead] insert failed", {
        host: new URL(url).host,
        keyType:
          key.startsWith("sb_secret_") ||
          key === process.env.SUPABASE_SERVICE_ROLE_KEY
            ? "service"
            : "public",
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });
      throw new Error(
        "Nie udało się zapisać zgłoszenia. Spróbuj ponownie lub zadzwoń: +48 690 976 790.",
      );
    }

    try {
      const { sendTemplateEmail } =
        await import("./email-templates/send-email");
      const { resolveGeo, countLeads, formatDuration, formatWarsawTime } =
        await import("./lead-meta.server");
      const leadId = crypto.randomUUID();

      let headers = new Headers();
      try {
        headers = getRequest().headers;
      } catch {
        /* brak kontekstu żądania */
      }
      const [geo, total] = await Promise.all([
        resolveGeo(headers),
        countLeads(data.kind),
      ]);

      const common = {
        phone: payload.phone ?? undefined,
        region: geo.label,
        timeOnSite: formatDuration(data.timeOnSiteSeconds ?? undefined),
        totalSubmissions: total ?? "—",
        submittedAt: formatWarsawTime(),
      };

      if (data.kind === "hero") {
        await sendTemplateEmail("vehicle-link-lead", "", {
          templateData: {
            ...common,
            url: payload.url ?? undefined,
            source: payload.source ?? "strona główna",
          },
          idempotencyKey: `vehicle-link-lead-${leadId}`,
        });
      } else {
        // VIN i link z formularza raportu trafiają do treści wiadomości, żeby były w mailu.
        const extra = [
          payload.vin ? `VIN: ${payload.vin}` : null,
          payload.url ? `Ogłoszenie: ${payload.url}` : null,
        ].filter(Boolean);
        const message =
          [payload.message, ...extra].filter(Boolean).join("\n") || undefined;

        await sendTemplateEmail("contact-notification", "", {
          templateData: {
            ...common,
            name: payload.name ?? undefined,
            email: payload.email ?? undefined,
            message,
            source: payload.source ?? undefined,
            kind: payload.kind ?? undefined,
          },
          idempotencyKey: `contact-notification-${leadId}`,
          replyTo: payload.email ?? undefined,
        });
      }
    } catch (mailError) {
      // Zgłoszenie jest już w bazie — brak maila nie może blokować klienta.
      console.error("[submitLead] notification email failed", mailError);
    }

    return { ok: true as const };
  });
