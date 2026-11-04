/**
 * Adres projektu Supabase w postaci, której oczekuje supabase-js: `https://xxx.supabase.co`.
 *
 * Często w panelu kopiuje się adres REST API (`https://xxx.supabase.co/rest/v1/`). Wtedy
 * supabase-js dokleja drugie `/rest/v1` i każde zapytanie kończy się błędem 404 —
 * dlatego obcinamy końcówkę `/rest/v1`, ukośniki i białe znaki.
 */
export function normalizeSupabaseUrl(
  raw: string | undefined | null,
): string | undefined {
  if (!raw) return undefined;
  const cleaned = raw
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/\/+$/, "")
    .replace(/\/rest\/v1$/i, "")
    .replace(/\/+$/, "");
  return cleaned || undefined;
}
