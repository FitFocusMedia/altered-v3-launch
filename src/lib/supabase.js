import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdrszmtugndlwoxyvrsq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcnN6bXR1Z25kbHdveHl2cnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NzE0OTMsImV4cCI6MjA4NTU0NzQ5M30.r6_ZjXwM8RLbcBMCrZ09R6m0tcpzif6a2vuis8x8Zkk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Subscribe an email for V3 launch notifications
 * Uses the 'v3_subscribers' table
 */
export async function subscribeEmail(email) {
  const { data, error } = await supabase
    .from('v3_subscribers')
    .insert([{ email, source: 'launch-page' }])
  
  if (error) {
    // If table doesn't exist yet, fall back to leads table
    if (error.code === '42P01') {
      const { data: leadData, error: leadError } = await supabase
        .from('leads')
        .insert([{ 
          email, 
          name: 'V3 Subscriber',
          source: 'v3-launch-page',
          form_data: { type: 'v3_notification_signup' }
        }])
      if (leadError) throw leadError
      return leadData
    }
    throw error
  }
  return data
}
