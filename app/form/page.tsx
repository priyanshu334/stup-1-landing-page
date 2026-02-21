"use client"

import { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { joinWaitlist } from "../actions/waitlist/waitlist"
import { createClient } from "@/lib/supabase/client"

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type FormData = z.infer<typeof FormSchema>

export default function WaitlistForm() {
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(values: FormData) {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email: values.email }])

    if (error) {
      alert("Error joining waitlist: " + error.message)
      return
    }

    setSuccess(true)
    reset()
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl">
            Join Early Access
          </CardTitle>
          <CardDescription>
            Be the first to try our productivity platform for CBSE educators.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {success ? (
            <div className="text-center text-green-700 font-medium">
              🎉 Thank you for joining early access!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="teacher@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  )
}