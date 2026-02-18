
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

// Initialize automatically using Environment Variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    // Console log for debugging (Safe to remove in production later)
    if (typeof window !== 'undefined') {
        console.log("🔥 [MKS DATABASE] Supabase Client Initialized via Integration.");
    }
  } catch (e) {
    console.error("❌ [MKS DATABASE] Failed to initialize Supabase:", e);
  }
} else {
    if (typeof window !== 'undefined') {
        console.warn("⚠️ [MKS DATABASE] Supabase Keys missing. Running in Offline/Mock Mode.");
    }
}

export const getSupabase = () => supabase;

// Helper to check connection status (Basic Check)
export const isOnline = () => {
  return typeof navigator !== 'undefined' && navigator.onLine && !!supabase;
};
