-- Autotest — pełny schemat bazy do własnego projektu Supabase (free plan).
-- Wklej całość w SQL Editor swojego projektu Supabase i uruchom raz.

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('hero','vin','contact','business','preparation','purchase')),
  name text,
  phone text,
  email text,
  url text,
  vin text,
  message text,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone can submit lead" ON public.leads;
CREATE POLICY "anyone can submit lead"
  ON public.leads FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Licznik zgłoszeń używany w mailach powiadomień
CREATE OR REPLACE FUNCTION public.count_leads(_kind text DEFAULT NULL)
RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(COUNT(*), 0)::int FROM public.leads
  WHERE _kind IS NULL OR kind = _kind;
$$;

REVOKE ALL ON FUNCTION public.count_leads(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.count_leads(text) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.count_leads(text) TO service_role;
