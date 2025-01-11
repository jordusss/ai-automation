import { createClient } from '@supabase/supabase-js';

// When using Lovable's Supabase integration, these values are automatically injected
declare global {
  interface Window {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
  }
}

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
    throw new Error(
      'Supabase URL and Anon Key are required. Please make sure you have connected your Supabase project in the Lovable interface.'
    );
  }

  if (!supabaseInstance) {
    supabaseInstance = createClient(
      window.SUPABASE_URL,
      window.SUPABASE_ANON_KEY
    );
  }

  return supabaseInstance;
};

export const supabase = {
  from: (...args: Parameters<ReturnType<typeof createClient>['from']>) => 
    getSupabaseClient().from(...args),
  // Add other methods as needed
};