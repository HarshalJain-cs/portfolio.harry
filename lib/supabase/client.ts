/**
 * Supabase Client Configuration
 * Handles database connections and queries
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey &&
  supabaseUrl !== '' && supabaseAnonKey !== ''

/**
 * Supabase client instance
 * Falls back to mock mode if not configured
 */
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Check if Supabase is ready to use
 */
export const isSupabaseReady = () => {
  return supabase !== null
}

/**
 * Log Supabase configuration status
 */
if (typeof window !== 'undefined') {
  console.log('Supabase Status:', isSupabaseReady() ? '✅ Connected' : '⚠️ Not configured - using mock data')
}
