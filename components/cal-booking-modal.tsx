"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalBookingModalProps {
  isOpen: boolean
  onClose: () => void
  calLink?: string
}

export function CalBookingModal({
  isOpen,
  onClose,
  calLink = "https://cal.com/sathyarajan-b-vc7dee/meet",
}: CalBookingModalProps) {
  const [mounted, setMounted] = useState(false)

  // Only mount the iframe after the component is mounted on the client
  useEffect(() => {
    setMounted(true)

    // Prevent scrolling on the body when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative h-[90vh] w-[90vw] max-w-4xl rounded-lg bg-white shadow-2xl dark:bg-gray-900 overflow-hidden">
        {/* Header with title and close button */}
        <div className="absolute right-4 top-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 shadow-md"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-full w-full overflow-hidden rounded-lg">
          {mounted && (
            <iframe
              src={calLink}
              frameBorder="0"
              className="h-full w-full"
              allow="camera; microphone; autoplay; fullscreen; display-capture"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  )
}
