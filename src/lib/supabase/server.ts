import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { EvSecOneDatabase } from "@/lib/database.types";

export function getSupabaseServerClient(): SupabaseClient<EvSecOneDatabase> | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient<EvSecOneDatabase>(supabaseUrl, supabaseAnonKey, {
    db: { schema: "evsec_one" },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
