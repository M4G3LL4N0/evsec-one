import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { EvSecOneDatabase } from "@/lib/database.types";

let cachedClient: SupabaseClient<EvSecOneDatabase> | null = null;

export function getSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = createClient<EvSecOneDatabase>(supabaseUrl, supabaseAnonKey, {
    db: { schema: "evsec_one" },
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });

  return cachedClient;
}
