"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

// Tool stack data with placeholder logos
const toolStack = [
  { name: "React", logo: "/react-logo.png" },
  { name: "Next.js", logo: "/nextjs-logo.png" },
  { name: "TypeScript", logo: "/typescript-logo.png" },
  { name: "Tailwind CSS", logo: "/tailwind-css-logo.png" },
  { name: "Vercel", logo: "/vercel-logo.png" },
  { name: "Supabase", logo: "/supabase-logo.png" },
  { name: "Shadcn UI", logo: "/shadcn-ui-logo.png" },
  { name: "OpenAI", logo: "/openai-logo-inspired-abstract.png" },
  { name: "Framer Motion", logo: "/framer-motion-logo-inspired.png" },
  { name: "Lucide Icons", logo: "/placeholder-5n54d.png" },
]

export function ToolStackRibbon() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Duplicate the tools array to create a seamless loop
  const duplicatedTools = [...toolStack, ...toolStack]

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Our Tool Stack</h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className={`flex items-center space-x-12 whitespace-nowrap ${prefersReducedMotion ? "" : "animate-scroll"}`}
          style={{
            animationDuration: isMobile ? "30s" : "40s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div key={`${tool.name}-${index}`} className="flex flex-col items-center justify-center">
              <div className="h-16 w-16 relative bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm flex items-center justify-center">
                <Image
                  src={tool.logo || "/placeholder.svg"}
                  alt={`${tool.name} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
