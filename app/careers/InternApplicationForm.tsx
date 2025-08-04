"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react"
import { validateEmail } from "@/utils/phone-validation"

interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
  isActive: boolean
}

interface InternApplicationFormProps {
  job?: JobOpening
  onBack: () => void
}

interface FormData {
  fullName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
}

export function InternApplicationForm({ job, onBack }: InternApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    jobTitle: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "webhook_not_active">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters"
    }

    // Validate email
    const emailValidation = validateEmail(formData.email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.errorMessage
    }

    // Validate phone number
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else {
      // Remove any non-digit characters for validation
      const cleanPhone = formData.phone.replace(/\D/g, "")
      if (cleanPhone.length !== 10) {
        newErrors.phone = "Phone number must be exactly 10 digits"
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = "Phone number must start with 6, 7, 8, or 9 and be 10 digits long"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      console.log("Submitting application:", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || "No message",
        jobTitle: job?.title
      })

      const response = await fetch("/api/careers/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || "",
          jobTitle: job?.title || "",
        }),
      })

      console.log("API response status:", response.status)

      const responseData = await response.json()
      console.log("API response data:", responseData)

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          jobTitle: "",
        })
      } else {
        // Handle specific error types
        if (responseData.error === "webhook_not_active") {
          setSubmitStatus("webhook_not_active")
        } else {
          setSubmitStatus("error")
          setErrorMessage(responseData.message || `Server returned status ${response.status}`)
        }
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Unknown error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const generateEmailBody = () => {
    return `Subject: Job Application - ${job?.title || "AI Project"}

Dear Hiring Team,

I am writing to apply for the ${job?.title || "AI Project Intern"} position at INovaBeing.

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

${formData.message ? `Message: ${formData.message}` : ""}

Thank you for considering my application.

Best regards,
${formData.fullName}`
  }

  if (submitStatus === "success") {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Application Submitted!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your interest in joining our AI team at Inovabeing!
            We've received your application and will be reviewing it shortly. You'll receive the assignment from 
            tech@inovabeing.com in the next few hours. If you don't see it, feel free to reach out to us directly.
          </p>
          <div className="space-y-3">
            <Button onClick={onBack} variant="outline" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (submitStatus === "webhook_not_active") {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <AlertCircle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">System Temporarily Unavailable</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our application system is currently being configured. Please use one of the alternative methods below to
            submit your application.
          </p>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href={`mailto:careers@inovabeing.com?body=${encodeURIComponent(generateEmailBody())}`}
                className="flex items-center justify-center gap-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email Application</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </a>
            </div>
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Careers
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Job Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{job?.title || "Job Application"}</CardTitle>
            <CardDescription>{job?.department}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Position Details:</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Location:</strong> {job?.location}
                </p>
                <p>
                  <strong>Type:</strong> {job?.type}
                </p>
                <p>
                  <strong>Experience:</strong> {job?.experience}
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What You'll Do:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{job?.description}</p>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Apply for this Position</CardTitle>
            <CardDescription>Fill out the form below to submit your application</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    // Allow only digits and common phone formatting characters while typing
                    const value = e.target.value.replace(/[^\d\s\-$$$$]/g, "")
                    handleInputChange("phone", value)
                  }}
                  placeholder="Enter your phone number"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Why are you interested in this position? (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us why you're interested in this role and why you'd be a great fit..."
                  rows={4}
                />
              </div>

              {/* Submit Status */}
              {submitStatus === "error" && (
                <div className="flex items-start gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Failed to submit application</p>
                    {errorMessage && <p className="mt-1 text-xs opacity-80">{errorMessage}</p>}
                    <p className="mt-1 text-xs opacity-80">
                      Please try again or contact us directly at careers@inovabeing.com
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
