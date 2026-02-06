import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { DataConfig } from './types';

let supabase: SupabaseClient | null = null;

export const initSupabase = (config: DataConfig) => {
  if (config.useSupabase && config.supabaseUrl && config.supabaseKey) {
    supabase = createClient(config.supabaseUrl, config.supabaseKey);
  }
  return supabase;
};

export const getSupabase = () => supabase;

// Helper to check connection (mocked for now)
export const isOnline = () => navigator.onLine;