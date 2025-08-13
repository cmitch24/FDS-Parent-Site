import { createClient } from '@supabase/supabase-js'

// Server-only Supabase client using service role key
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)
