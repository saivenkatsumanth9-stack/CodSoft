
-- Restrict contact_messages: revoke SELECT exposure from anon/authenticated (removes GraphQL exposure and prevents reads)
REVOKE SELECT ON public.contact_messages FROM anon, authenticated;

-- Explicit deny SELECT policy for anon/authenticated (defense in depth)
CREATE POLICY "No public read of contact messages"
ON public.contact_messages
FOR SELECT
TO anon, authenticated
USING (false);

-- Remove broad listing policy on certificates bucket; public bucket still serves files via direct URL
DROP POLICY IF EXISTS "Public read certificates" ON storage.objects;
