"use client"

import { useEffect } from "react"

export function ScrollFadeEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-fade")

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0

        if (isVisible) {
          element.classList.add("fade-in")
        }
      })
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
