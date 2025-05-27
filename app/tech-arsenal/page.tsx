import { TechArsenalClient } from "@/components/tech-arsenal/tech-arsenal-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Arsenal | INovaBeing",
  description: "Explore the cutting-edge technology stack powering INovaBeing's AI solutions and services.",
}

export default function TechArsenalPage() {
  return <TechArsenalClient />
}
