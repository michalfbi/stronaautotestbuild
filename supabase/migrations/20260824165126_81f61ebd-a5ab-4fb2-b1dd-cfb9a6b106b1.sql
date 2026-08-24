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

GRANT EXECUTE ON FUNCTION public.count_leads(text) TO anon, authenticated, service_role;