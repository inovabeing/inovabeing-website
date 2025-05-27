import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | INovaBeing",
  description: "Explore our comprehensive range of services designed to help your business innovate and grow.",
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
