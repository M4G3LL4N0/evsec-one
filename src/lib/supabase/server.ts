import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type SupabaseClient = ReturnType<typeof createServerComponentClient> | null;

export async function getSupabaseServer() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase environment variables not configured, auth will not work');
    return null;
  }

  return createServerComponentClient({
    cookies,
  });
}
