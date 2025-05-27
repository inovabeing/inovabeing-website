"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Calendar } from "lucide-react"
import { useBookingModal } from "@/components/booking-modal-provider"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { openBookingModal } = useBookingModal()

  // Show the floating CTA after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if the user has dismissed the CTA in this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem("cta-dismissed")
    if (dismissed === "true") {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    sessionStorage.setItem("cta-dismissed", "true")
  }

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="relative">
        <Button
          onClick={openBookingModal}
          variant="ctaGradient"
          size="lg"
          className="rounded-full shadow-lg zoom-on-hover"
        >
          <Calendar className="mr-2 h-5 w-5" />
          <span>Book My Call</span>
        </Button>
        <button
          onClick={handleDismiss}
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-700"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
