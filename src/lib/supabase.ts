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
  console.log('Supabase URL:', window.SUPABASE_URL);
  console.log('Supabase Anon Key exists:', !!window.SUPABASE_ANON_KEY);

  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
    console.error('Missing Supabase credentials:', {
      url: !!window.SUPABASE_URL,
      key: !!window.SUPABASE_ANON_KEY
    });
    throw new Error(
      'Supabase connection failed. Please ensure you have connected your Supabase project and reloaded the page.'
    );
  }

  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(
        window.SUPABASE_URL,
        window.SUPABASE_ANON_KEY
      );
      console.log('Supabase client initialized successfully');
    } catch (error) {
      console.error('Error initializing Supabase client:', error);
      throw error;
    }
  }

  return supabaseInstance;
};

export const supabase = {
  from: (...args: Parameters<ReturnType<typeof createClient>['from']>) => 
    getSupabaseClient().from(...args),
  // Add other methods as needed
};