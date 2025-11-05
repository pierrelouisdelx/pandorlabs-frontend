'use server'

import { createClient } from '@/lib/supabase/server'
import { Database } from '@/types/database.types'

type WaitlistInsert = Database['public']['Tables']['waitlist']['Insert']

export type WaitlistFormData = {
  name: string
  email: string
  company: string
  message?: string
}

export type WaitlistResponse = {
  success: boolean
  message: string
  isDuplicate?: boolean
}

export async function joinWaitlist(
  formData: WaitlistFormData
): Promise<WaitlistResponse> {
  try {
    // Validate input
    if (!formData.name || !formData.email || !formData.company) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
      }
    }

    const supabase = await createClient()

    // Prepare data for insertion
    const insertData: WaitlistInsert = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      company: formData.company.trim(),
      message: formData.message?.trim() || null,
    }

    // Insert into database
    const { error } = await supabase.from('waitlist').insert(insertData)

    if (error) {
      // Check if it's a unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return {
          success: false,
          message: "You're already on our waitlist!",
          isDuplicate: true,
        }
      }

      console.error('Supabase error:', error)
      return {
        success: false,
        message: 'Something went wrong. Please try again later.',
      }
    }

    return {
      success: true,
      message: "Thanks for joining! We'll reach out to you soon.",
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}
