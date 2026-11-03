import { defineTask } from "nitro/task";

/**
 * Wysyła jedno lekkie zapytanie do bazy Supabase, żeby darmowy projekt nie został uśpiony.
 *
 * Używa sekretów, które worker już ma (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY) i wywołuje
 * funkcję count_leads — to prawdziwe zapytanie do Postgresa, a nie tylko do API.
 * Bez klucza serwisowego próbuje kluczem publicznym (odpowiedź z błędem uprawnień też jest ruchem).
 */
export default defineTask({
  meta: {
    name: "supabase:ping",
    description: "Utrzymuje projekt Supabase aktywnym",
  },
  async run() {
    // Sekrety Cloudflare są w process.env (nodejs_compat), a dodatkowo w globalThis.__env__.
    const cfEnv =
      (globalThis as { __env__?: Record<string, string | undefined> })
        .__env__ ?? {};
    const env = (name: string) => cfEnv[name] ?? process.env[name];
    const url = env("SUPABASE_URL");
    const serviceKey = env("SUPABASE_SERVICE_ROLE_KEY");
    const publicKey = env("SUPABASE_PUBLISHABLE_KEY");
    const key = serviceKey || publicKey;

    if (!url || !key) {
      console.error(
        "[supabase:ping] brak SUPABASE_URL albo klucza Supabase w sekretach workera",
      );
      return { result: "missing-config" };
    }

    const headers: Record<string, string> = {
      apikey: key,
      "Content-Type": "application/json",
    };
    // Nowe klucze `sb_...` nie są JWT — nie wysyłamy ich jako Bearer.
    if (!key.startsWith("sb_")) headers.Authorization = `Bearer ${key}`;

    const res = await fetch(`${url}/rest/v1/rpc/count_leads`, {
      method: "POST",
      headers,
      body: JSON.stringify({ _kind: null }),
      signal: AbortSignal.timeout(10_000),
    });

    const ok = res.ok || (!serviceKey && res.status === 401);
    const msg = `[supabase:ping] HTTP ${res.status}`;
    if (ok) console.log(msg);
    else console.error(msg, await res.text().catch(() => ""));
    return { result: ok ? "ok" : `http-${res.status}` };
  },
});
