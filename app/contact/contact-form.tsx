"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCalBooking } from "@/hooks/use-cal-booking"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Calendar, Check, Loader2 } from "lucide-react"

// Phone validation patterns by country
const phonePatterns = {
  "+91": { regex: /^[6-9]\d{9}$/, example: "9876543210", length: 10 },
  "+1": { regex: /^[2-9]\d{9}$/, example: "2345678901", length: 10 },
  "+44": { regex: /^7\d{9}$/, example: "7123456789", length: 10 },
  "+61": { regex: /^4\d{8}$/, example: "412345678", length: 9 },
  "+49": { regex: /^1[567]\d{8}$/, example: "1512345678", length: 10 },
  "+33": { regex: /^[67]\d{8}$/, example: "612345678", length: 9 },
  "+81": { regex: /^[7-9]0\d{8}$/, example: "7012345678", length: 10 },
  "+86": { regex: /^1\d{10}$/, example: "13123456789", length: 11 },
  "+65": { regex: /^[89]\d{7}$/, example: "81234567", length: 8 },
  "+971": { regex: /^5[0-9]\d{7}$/, example: "501234567", length: 9 },
}

// Default pattern for any other country code
const defaultPattern = { regex: /^\d{7,15}$/, example: "1234567890", length: 10 }

// Define the form schema with enhanced validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine(
      (val) => {
        // Basic validation - will be refined with country code
        return val.length >= 7 && val.length <= 15
      },
      {
        message: "Phone number must be between 7 and 15 digits",
      },
    ),
  countryCode: z.string().min(1, { message: "Please select a country code" }),
  message: z.string().min(100, { message: "Please provide a detailed message (minimum 100 characters)" }),
  preferredTime: z.string().min(1, { message: "Please select your preferred contact time" }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91")
  const [phoneError, setPhoneError] = useState("")
  const { openBookingModal } = useCalBooking()

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      message: "",
      preferredTime: "",
    },
  })

  // Get the current phone pattern for the selected country
  const getPhonePattern = (code: string) => {
    return phonePatterns[code as keyof typeof phonePatterns] || defaultPattern
  }

  // Validate phone number against country pattern
  const validatePhone = (phone: string, countryCode: string) => {
    const pattern = getPhonePattern(countryCode)

    if (!phone) return { valid: false, message: "Phone number is required" }

    if (phone.length !== pattern.length) {
      return {
        valid: false,
        message: `${countryCode} numbers should be ${pattern.length} digits (e.g., ${pattern.example})`,
      }
    }

    if (!pattern.regex.test(phone)) {
      return {
        valid: false,
        message: `Invalid format for ${countryCode} number. Example: ${pattern.example}`,
      }
    }

    return { valid: true, message: "" }
  }

  // Update character count when message changes and validate phone on country change
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "message") {
        setCharCount(value.message?.length || 0)
      }

      if (name === "countryCode" && value.countryCode) {
        setSelectedCountryCode(value.countryCode)
        // Validate phone when country changes
        if (value.phone) {
          const validation = validatePhone(value.phone, value.countryCode)
          setPhoneError(validation.valid ? "" : validation.message)
        }
      }

      if (name === "phone" && value.phone && value.countryCode) {
        const validation = validatePhone(value.phone, value.countryCode)
        setPhoneError(validation.valid ? "" : validation.message)
      }
    })

    return () => subscription.unsubscribe()
  }, [form.watch])

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    // Final phone validation
    const phoneValidation = validatePhone(data.phone, data.countryCode)
    if (!phoneValidation.valid) {
      form.setError("phone", { message: phoneValidation.message })
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to our API route which will handle Google Sheets
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          countryCode: data.countryCode,
          message: data.message,
          preferredTime: data.preferredTime,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form.");
      }

      setIsSuccess(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      form.reset()
      setCharCount(0)
      setPhoneError("")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Country codes for the dropdown
  const countryCodes = [
    { value: "+91", label: "India (+91)" },
    { value: "+1", label: "US/Canada (+1)" },
    { value: "+44", label: "UK (+44)" },
    { value: "+61", label: "Australia (+61)" },
    { value: "+49", label: "Germany (+49)" },
    { value: "+33", label: "France (+33)" },
    { value: "+81", label: "Japan (+81)" },
    { value: "+86", label: "China (+86)" },
    { value: "+65", label: "Singapore (+65)" },
    { value: "+971", label: "UAE (+971)" },
  ]

  // Preferred contact times
  const contactTimes = [
    { value: "morning", label: "Morning (9am - 12pm)" },
    { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
    { value: "evening", label: "Evening (5pm - 8pm)" },
    { value: "flexible", label: "Flexible / Any time" },
  ]

  // Get current phone pattern
  const currentPattern = getPhonePattern(selectedCountryCode)

  return (
    <div className="space-y-6">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Your message has been sent successfully. We'll get back to you as soon as possible.
          </p>
          <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
            Send Another Message
          </Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us</h3>
            <Button variant="outline" size="sm" onClick={() => openBookingModal()} className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book My Call
            </Button>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          {...field}
                          className={form.formState.errors.email ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">
                        Country Code
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          setSelectedCountryCode(value)
                          // Validate phone when country changes
                          const phoneValue = form.getValues("phone")
                          if (phoneValue) {
                            const validation = validatePhone(phoneValue, value)
                            setPhoneError(validation.valid ? "" : validation.message)
                          }
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country code" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countryCodes.map((code) => (
                            <SelectItem key={code.value} value={code.value}>
                              {code.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={`Example: ${currentPattern.example}`}
                          type="tel"
                          {...field}
                          className={phoneError ? "border-red-500" : ""}
                          onChange={(e) => {
                            field.onChange(e)
                            const validation = validatePhone(e.target.value, selectedCountryCode)
                            setPhoneError(validation.valid ? "" : validation.message)
                          }}
                        />
                      </FormControl>
                      {phoneError ? (
                        <p className="text-sm font-medium text-red-500">{phoneError}</p>
                      ) : (
                        <p className="text-xs text-gray-500">
                          {selectedCountryCode} format: {currentPattern.example}
                        </p>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">
                      How can we help?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your project or requirements in detail (minimum 100 characters)..."
                        className="min-h-[180px]"
                        {...field}
                      />
                    </FormControl>
                    <div className="mt-1 flex justify-between text-sm">
                      <FormMessage />
                      <span
                        className={`${
                          charCount >= 100 ? "text-green-600" : "text-gray-500"
                        } dark:${charCount >= 100 ? "text-green-400" : "text-gray-400"}`}
                      >
                        {charCount}/100 characters
                      </span>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">
                      Preferred Contact Time
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {contactTimes.map((time) => (
                          <SelectItem key={time.value} value={time.value}>
                            {time.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  )
}
