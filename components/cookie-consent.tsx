"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent")
    if (!hasConsented) {
      // Small delay to prevent the popup from appearing immediately on page load
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setShowConsent(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setShowConsent(false)
  }

  const closeConsent = () => {
    // Just close without setting consent
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-white/10 backdrop-blur-lg p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/30">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cookie Settings</h3>
          <Button variant="ghost" size="icon" onClick={closeConsent} className="h-8 w-8 rounded-full">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of
            cookies.{" "}
            <Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
              Learn more
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-end">
          <Button variant="outline" size="sm" onClick={acceptEssential} className="text-sm">
            Essential Only
          </Button>
          <Button variant="cta" size="sm" onClick={acceptAll} className="text-sm">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
