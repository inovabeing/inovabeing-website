"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const benefits = [
    "Rapid AI solution development in just 7 days",
    "Custom-built AI applications tailored to your business needs",
    "AI-powered data enrichment and intelligence services",
    "Seamless integration with your existing systems",
    "Ongoing AI support and optimization",
  ]

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(50px)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="flex items-center justify-center"
          >
            <div className="h-36 w-36 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-1 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-center font-bold text-xl leading-tight dark:bg-gray-950">
                <span>
                  7-Day
                  <br />
                  AI Delivery
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
              About Us
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Transforming Businesses Through AI Innovation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At INovaBeing, we specialize in delivering cutting-edge AI solutions that solve real business problems.
              Our team of AI experts combines deep technical knowledge with business acumen to create custom
              applications that drive growth and efficiency through artificial intelligence.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild variant="cta" size="lg" className="zoom-on-hover">
                <Link href="/about-us">Learn More About Our AI Expertise</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
