"use server"

import { supabaseServer } from "@/lib/supabase/server"



export async function joinWaitlist(email: string) {
  const { error } = await supabaseServer
    .from("waitlist")
    .insert([{ email }])

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true }
}