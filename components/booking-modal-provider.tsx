"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { CalBookingModal } from "@/components/cal-booking-modal"

interface BookingModalContextType {
  isBookingModalOpen: boolean
  openBookingModal: () => void
  closeBookingModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined)

export function useBookingModal() {
  const context = useContext(BookingModalContext)
  if (context === undefined) {
    throw new Error("useBookingModal must be used within a BookingModalProvider")
  }
  return context
}

interface BookingModalProviderProps {
  children: ReactNode
  calLink?: string
}

export function BookingModalProvider({
  children,
  calLink = "https://cal.com/inovabeing/meet",
}: BookingModalProviderProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  return (
    <BookingModalContext.Provider
      value={{
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
      <CalBookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} calLink={calLink} />
    </BookingModalContext.Provider>
  )
}
