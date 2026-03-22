import { createClient } from '@supabase/supabase-js';

type SupabaseClient = ReturnType<typeof createClient> | null;

let supabase: SupabaseClient = null;

export function getSupabaseClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase environment variables not configured, auth will not work');
    return null;
  }

  if (!supabase) {
    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  }

  return supabase;
}
