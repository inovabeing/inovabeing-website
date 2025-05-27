"use client"

import { useState, useCallback } from "react"

export function useCalBooking() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = useCallback(() => {
    setIsBookingModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }, [])

  const closeBookingModal = useCallback(() => {
    setIsBookingModalOpen(false)
    // Restore body scrolling when modal is closed
    document.body.style.overflow = "auto"
  }, [])

  return {
    isBookingModalOpen,
    openBookingModal,
    closeBookingModal,
  }
}
