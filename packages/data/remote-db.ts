
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

// Initialize automatically using Environment Variables
// Note: On client side Next.js inlines NEXT_PUBLIC vars. 
// On server side, we rely on process.env being populated.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    if (typeof window !== 'undefined') {
        console.log("🔥 [MKS DATABASE] Supabase Client Initialized.");
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

// Helper to check connection status
// FIX: Previously failed on Server because `navigator` is undefined in Node.js
export const isOnline = () => {
  // If we are on the server (window is undefined), we assume connectivity if the client is initialized.
  if (typeof window === 'undefined') {
    return !!supabase;
  }
  
  // If we are on the client, we check the browser's online status
  return typeof navigator !== 'undefined' && navigator.onLine && !!supabase;
};
