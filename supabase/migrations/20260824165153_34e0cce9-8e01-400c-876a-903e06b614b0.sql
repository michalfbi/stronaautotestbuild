REVOKE ALL ON FUNCTION public.count_leads(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.count_leads(text) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.count_leads(text) TO service_role;