"use server"

import { z } from "zod"

// Define the form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  countryCode: z.string().min(1, { message: "Please select a country code" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  preferredTime: z.string().min(1, { message: "Please select your preferred contact time" }),
  messagingPlatforms: z.array(z.string()).optional(),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(data: ContactFormData) {
  // Validate the form data
  const validatedData = formSchema.parse(data)

  try {
    // In a real implementation, you would send an email to info@inovabeing.com
    // For now, we'll just log the data and return a success message
    console.log("Contact form submission:", validatedData)

    // Simulate a delay for the email sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
