
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

// Lazy Initialization Helper
// This ensures process.env is fully populated before we try to read keys
export const getSupabase = () => {
  if (supabase) return supabase;

  // Initialize automatically using Environment Variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      supabase = createClient(supabaseUrl, supabaseKey);
      if (typeof window !== 'undefined') {
          console.log("🔥 [MKS DATABASE] Supabase Client Initialized (Client).");
      } else {
          console.log("🔥 [MKS DATABASE] Supabase Client Initialized (Server).");
      }
    } catch (e) {
      console.error("❌ [MKS DATABASE] Failed to initialize Supabase:", e);
    }
  } else {
      // Only warn if we are trying to use it and it fails
      if (typeof window !== 'undefined') {
          console.warn("⚠️ [MKS DATABASE] Supabase Keys missing. Running in Offline/Mock Mode.");
      }
  }
  return supabase;
};

// Helper to check connection status
// FIX: Robust check for both Server and Client environments
export const isOnline = () => {
  const client = getSupabase(); // Trigger lazy init
  
  // If we are on the server (window is undefined), we rely on the client existence
  if (typeof window === 'undefined') {
    return !!client;
  }
  
  // If we are on the client, we check the browser's online status AND client existence
  return typeof navigator !== 'undefined' && navigator.onLine && !!client;
};
