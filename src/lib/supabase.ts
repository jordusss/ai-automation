import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const supabaseUrl = 'https://kgvimgidwarishuujibi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndmltZ2lkd2FyaXNodXVqaWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMDc3OTcsImV4cCI6MjAyMDU4Mzc5N30.vxjjqQBgZGF4GcKp6HJ4x7QZMhqDw9blelzTwkqsXtY';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);