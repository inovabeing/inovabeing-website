
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
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
  linkedinUrl: string
  projectUrl: string
  message: string
  assignmentAgreement: boolean
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  linkedinUrl?: string
  message?: string
  projectUrl?: string
  assignmentAgreement?: string
}

export function InternApplicationForm({ job, onBack }: InternApplicationFormProps) {


  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    projectUrl: "",
    message: "",
    assignmentAgreement: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  type SubmitStatus = "idle" | "success" | "error" | "webhook_not_active";
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  // Workaround for TS narrowing bug: store in local variable
  const currentSubmitStatus: SubmitStatus = submitStatus;

  // Ensure all setSubmitStatus calls use the correct type
  // (No code change needed here if all usages are correct, but this comment is to clarify intent for future maintainers)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const validateLinkedInUrl = (url: string): { isValid: boolean; errorMessage?: string } => {
    if (!url.trim()) {
      return { isValid: false, errorMessage: "LinkedIn profile URL is required" }
    }

    const trimmedUrl = url.trim()

    // Check if it starts with http:// or https://
    if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
      return { isValid: false, errorMessage: "URL must start with http:// or https://" }
    }

    // More comprehensive LinkedIn URL validation
    const linkedinRegex =
      /^https?:\/\/(www\.)?linkedin\.com\/(in|pub|profile\/view\?id=)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+\/?$/

    if (!linkedinRegex.test(trimmedUrl)) {
      return {
        isValid: false,
        errorMessage: "Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/yourname)",
      }
    }

    // Check for common LinkedIn URL patterns
    const validPatterns = [
      /linkedin\.com\/in\/[a-zA-Z0-9-]+/,
      /linkedin\.com\/pub\/[a-zA-Z0-9-]+/,
      /linkedin\.com\/profile\/view\?id=/,
    ]

    const hasValidPattern = validPatterns.some((pattern) => pattern.test(trimmedUrl))

    if (!hasValidPattern) {
      return { isValid: false, errorMessage: "Please enter a valid LinkedIn profile URL" }
    }

    return { isValid: true }
  }

  const validateProjectUrl = (url: string): { isValid: boolean; errorMessage?: string } => {
    if (!url.trim()) {
      return { isValid: true } // Optional field
    }

    const trimmedUrl = url.trim()

    // Check if it starts with http:// or https://
    if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
      return { isValid: false, errorMessage: "URL must start with http:// or https://" }
    }

    try {
      const urlObj = new URL(trimmedUrl)

      // Check for valid hostname
      if (!urlObj.hostname || urlObj.hostname.length < 3) {
        return { isValid: false, errorMessage: "Please enter a valid URL with a proper domain" }
      }

      // Check for at least one dot in hostname (basic domain validation)
      if (!urlObj.hostname.includes(".")) {
        return { isValid: false, errorMessage: "Please enter a valid URL with a proper domain" }
      }

      // Optional: Check for common project hosting domains
      const commonDomains = [
        "github.com",
        "gitlab.com",
        "bitbucket.org",
        "vercel.app",
        "netlify.app",
        "herokuapp.com",
        "github.io",
        "gitlab.io",
        "pages.dev",
        "repl.it",
        "codesandbox.io",
        "stackblitz.com",
      ]

      const isCommonDomain = commonDomains.some(
        (domain) => urlObj.hostname === domain || urlObj.hostname.endsWith("." + domain),
      )

      // If it's not a common domain, just ensure it's a valid URL structure
      if (!isCommonDomain) {
        // Additional validation for general URLs
        if (urlObj.hostname.split(".").length < 2) {
          return { isValid: false, errorMessage: "Please enter a valid URL" }
        }
      }

      return { isValid: true }
    } catch (error) {
      return { isValid: false, errorMessage: "Please enter a valid URL (e.g., https://github.com/yourproject)" }
    }
  }

  const validateGithubUrl = (url: string): { isValid: boolean; errorMessage?: string } => {
    if (!url.trim()) {
      return { isValid: false, errorMessage: "GitHub profile URL is required" }
    }
    const trimmedUrl = url.trim()
    if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
      return { isValid: false, errorMessage: "URL must start with http:// or https://" }
    }
    // Basic GitHub profile URL validation
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/
    if (!githubRegex.test(trimmedUrl)) {
      return { isValid: false, errorMessage: "Please enter a valid GitHub profile URL (e.g., https://github.com/yourusername)" }
    }
    return { isValid: true }
  }

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

    // Validate LinkedIn URL (mandatory)
    const linkedinValidation = validateLinkedInUrl(formData.linkedinUrl)
    if (!linkedinValidation.isValid) {
      newErrors.linkedinUrl = linkedinValidation.errorMessage
    }

    // For Software Engineer Full-Stack, GitHub/Project URL is mandatory and must be a valid GitHub profile or project URL
    if (job?.id === "software-engineer-fullstack-2025") {
      if (!formData.projectUrl.trim()) {
        newErrors.projectUrl = "GitHub/Project URL is required for this role"
      } else {
        const trimmedUrl = formData.projectUrl.trim()
        if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
          newErrors.projectUrl = "URL must start with http:// or https://"
        } else {
          // Accept github.com URLs (profile or repo)
          const githubRegex = /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+(\/[A-Za-z0-9_.-]+)?\/?$/
          if (!githubRegex.test(trimmedUrl)) {
            newErrors.projectUrl = "Please enter a valid GitHub profile or project URL (e.g., https://github.com/yourusername or https://github.com/yourusername/repo)"
          }
        }
      }
    } else if (job?.id === "freelance-content-video-creator-2025") {
      // For Content/Video Creator, portfolio/project URL is mandatory
      if (!formData.projectUrl.trim()) {
        newErrors.projectUrl = "Portfolio/Project URL is required for this role"
      } else {
        const trimmedUrl = formData.projectUrl.trim()
        if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
          newErrors.projectUrl = "URL must start with http:// or https://"
        }
      }
    } else {
      // For other roles, projectUrl is optional but must be valid if provided
      const projectUrlValidation = validateProjectUrl(formData.projectUrl)
      if (!projectUrlValidation.isValid) {
        newErrors.projectUrl = projectUrlValidation.errorMessage
      }
    }

    // Validate message (now mandatory)
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us why you're interested in this position"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters explaining your interest"
    }

    // Validate assignment agreement (mandatory)
    if (job?.id !== "freelance-content-video-creator-2025") {
      if (!formData.assignmentAgreement) {
        newErrors.assignmentAgreement = "You must agree to the assignment terms to proceed"
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
        linkedinUrl: formData.linkedinUrl,
        projectUrl: formData.projectUrl || "Not provided",
        message: formData.message,
        jobTitle: job?.title,
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
          linkedinUrl: formData.linkedinUrl,
          projectUrl: formData.projectUrl || "",
          message: formData.message,
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
          linkedinUrl: "",
          projectUrl: "",
          message: "",
          assignmentAgreement: false,
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

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
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
LinkedIn Profile: ${formData.linkedinUrl}
${formData.projectUrl ? `Project URL: ${formData.projectUrl}` : ""}

Why I'm interested:
${formData.message}

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
          {job?.id === "freelance-content-video-creator-2025" ? (
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for your interest in the Freelance Content & Video Creator (LinkedIn + Reels) role! We've received your application and portfolio. Our team will review your work and get back to you soon.
            </p>
          ) : (
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for your interest in joining our AI team at Inovabeing! We've received your application and will
              be reviewing it shortly. You'll receive the assignment from tech@inovabeing.com in the next few hours. If
              you don't see it, feel free to reach out to us directly.
            </p>
          )}
          <div className="space-y-3">
            <Button onClick={onBack} variant="outline" className="mr-4 bg-transparent">
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
                    const value = e.target.value.replace(/[^\d\s\-()]/g, "")
                    handleInputChange("phone", value)
                  }}
                  placeholder="Enter your 10-digit phone number"
                  className={errors.phone ? "border-red-500" : ""}
                />
                <p className="text-xs text-gray-500">Enter 10-digit mobile number (e.g., 9876543210)</p>
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              {/* LinkedIn Profile URL */}
              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">
                  LinkedIn Profile URL <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => {
                    const value = e.target.value
                    handleInputChange("linkedinUrl", value)

                    // Real-time validation feedback
                    if (value.trim() && !value.startsWith("http://") && !value.startsWith("https://")) {
                      setErrors((prev) => ({ ...prev, linkedinUrl: "URL must start with http:// or https://" }))
                    }
                  }}
                  placeholder="https://linkedin.com/in/yourname"
                  className={errors.linkedinUrl ? "border-red-500" : ""}
                />
                <p className="text-xs text-gray-500">Please provide your LinkedIn profile URL</p>
                {errors.linkedinUrl && <p className="text-sm text-red-500">{errors.linkedinUrl}</p>}
              </div>

              {/* Project URL (label changes for software-engineer-fullstack-2025 and freelance-content-video-creator-2025) */}
              <div className="space-y-2">
                <Label htmlFor="projectUrl">
                  {job?.id === "software-engineer-fullstack-2025" ? (
                    <>
                      GitHub/Project URL <span className="text-red-500">*</span>
                    </>
                  ) : job?.id === "freelance-content-video-creator-2025" ? (
                    <>
                      Portfolio/Project URL <span className="text-red-500">*</span>
                    </>
                  ) : (
                    <>Project URL (Optional)</>
                  )}
                </Label>
                <Input
                  id="projectUrl"
                  type="url"
                  value={formData.projectUrl}
                  onChange={(e) => {
                    const value = e.target.value
                    handleInputChange("projectUrl", value)
                    // Real-time validation feedback for project URL
                    if (value.trim() && !value.startsWith("http://") && !value.startsWith("https://")) {
                      setErrors((prev) => ({ ...prev, projectUrl: "URL must start with http:// or https://" }))
                    }
                  }}
                  placeholder={job?.id === "freelance-content-video-creator-2025" ? "https://yourportfolio.com or project link" : "https://github.com/yourusername or project link"}
                  className={errors.projectUrl ? "border-red-500" : ""}
                />
                {job?.id === "software-engineer-fullstack-2025" ? (
                  <p className="text-xs text-gray-500">Please provide your GitHub profile or project link.</p>
                ) : job?.id === "freelance-content-video-creator-2025" ? (
                  <p className="text-xs text-gray-500">Please provide a link to your portfolio, past work, or project.</p>
                ) : (
                  <p className="text-xs text-gray-500">Share a link to your project, portfolio, or GitHub repository (optional)</p>
                )}
                {errors.projectUrl && <p className="text-sm text-red-500">{errors.projectUrl}</p>}
              </div>

              {/* ...existing code... */}

              {/* Message - Now Mandatory */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Why are you interested in this position? <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us why you're interested in this role and why you'd be a great fit. Please provide at least 20 characters."
                  rows={4}
                  className={errors.message ? "border-red-500" : ""}
                />
                <p className="text-xs text-gray-500">{formData.message.length}/20 characters minimum</p>
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Assignment Agreement Checkbox (not shown for Content/Video Creator) */}
              {job?.id !== "freelance-content-video-creator-2025" && (
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="assignmentAgreement"
                      checked={formData.assignmentAgreement}
                      onCheckedChange={(checked) => handleInputChange("assignmentAgreement", checked as boolean)}
                      className={errors.assignmentAgreement ? "border-red-500" : ""}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="assignmentAgreement"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Assignment <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        I understand that by submitting this request, I must complete the assignment (sent from tech@inovabeing.com) within 48 hours or be auto-rejected. Only then will I qualify for the technical and final rounds, and I acknowledge this is a startup role requiring independent ownership and execution.
                      </p>
                    </div>
                  </div>
                  {errors.assignmentAgreement && <p className="text-sm text-red-500">{errors.assignmentAgreement}</p>}
                </div>
              )}
              {/* No special submission note for Content/Video Creator */}

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
              {/* Submit Button and Success Message for Content/Video Creator */}
              {job?.id === "freelance-content-video-creator-2025" ? (
                <>
                  {currentSubmitStatus === "success" && (
                    <div className="mb-4 text-green-700 bg-green-50 dark:bg-green-900/20 p-3 rounded-md text-center">
                      Application submitted successfully! We have received your details and portfolio. Our team will review your work and get back to you soon.
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.fullName.trim() ||
                      !formData.email.trim() ||
                      !formData.phone.trim() ||
                      !formData.linkedinUrl.trim() ||
                      !formData.projectUrl.trim() ||
                      !formData.message.trim() ||
                      !!errors.fullName ||
                      !!errors.email ||
                      !!errors.phone ||
                      !!errors.linkedinUrl ||
                      !!errors.projectUrl ||
                      !!errors.message
                    }
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                </>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.assignmentAgreement}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
