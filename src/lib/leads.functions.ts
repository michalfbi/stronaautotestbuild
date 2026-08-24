import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { LeadSchema } from "./leads.schema";

export type { LeadInput } from "./leads.schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const isOpaque = key.startsWith("sb_");
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (isOpaque && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
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
      vin: data.vin || null,
      message: data.message || null,
      source: data.source || null,
    };

    const { error } = await supabase.from("leads").insert(payload as never);
    if (error) {
      console.error("[submitLead] insert failed", error);
      throw new Error("Nie udało się zapisać zgłoszenia. Spróbuj ponownie.");
    }

    try {
      const { sendTemplateEmail } = await import("./email-templates/send-email");
      const leadId = crypto.randomUUID();

      if (data.kind === "hero") {
        const { resolveGeo, countLeads, formatDuration, formatWarsawTime } = await import(
          "./lead-meta.server"
        );
        let headers = new Headers();
        try {
          headers = getRequest().headers;
        } catch {
          /* brak kontekstu żądania */
        }
        const [geo, total] = await Promise.all([resolveGeo(headers), countLeads("hero")]);

        await sendTemplateEmail("vehicle-link-lead", "", {
          templateData: {
            url: payload.url ?? undefined,
            phone: payload.phone ?? undefined,
            region: geo.label,
            timeOnSite: formatDuration(data.timeOnSiteSeconds ?? undefined),
            totalSubmissions: total ?? "—",
            submittedAt: formatWarsawTime(),
            source: payload.source ?? "strona główna",
          },
          idempotencyKey: `vehicle-link-lead-${leadId}`,
        });
      } else {
        const { resolveGeo, countLeads, formatDuration, formatWarsawTime } = await import(
          "./lead-meta.server"
        );
        let headers = new Headers();
        try {
          headers = getRequest().headers;
        } catch {
          /* brak kontekstu żądania */
        }
        const [geo, total] = await Promise.all([resolveGeo(headers), countLeads(data.kind)]);

        await sendTemplateEmail("contact-notification", "", {
          templateData: {
            name: payload.name ?? undefined,
            phone: payload.phone ?? undefined,
            email: payload.email ?? undefined,
            message: payload.message ?? undefined,
            source: payload.source ?? undefined,
            kind: payload.kind ?? undefined,
            region: geo.label,
            timeOnSite: formatDuration(data.timeOnSiteSeconds ?? undefined),
            totalSubmissions: total ?? "—",
            submittedAt: formatWarsawTime(),
          },
          idempotencyKey: `contact-notification-${leadId}`,
          replyTo: payload.email ?? undefined,
        });
      }
    } catch (mailError) {
      console.error("[submitLead] notification email failed", mailError);
    }

    return { ok: true as const };
  });
