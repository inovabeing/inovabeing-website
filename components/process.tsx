"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      number: "01",
      title: "AI Consultation",
      description: "We discuss your business needs and identify the perfect AI solution for your organization.",
    },
    {
      number: "02",
      title: "AI Research & Design",
      description:
        "We research the best AI tools and design a custom solution architecture for your specific requirements.",
    },
    {
      number: "03",
      title: "Rapid AI Development",
      description: "Using our cutting-edge AI toolkit, we build your solution in record time with advanced algorithms.",
    },
    {
      number: "04",
      title: "AI Testing & Deployment",
      description: "We thoroughly test and deploy your AI solution, ready for immediate business impact.",
    },
  ]

  return (
    <section id="process" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our 7-Day AI Process</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            From concept to Scalable Product in less than a week. Here's how we transform your business with artificial
            intelligence.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-16"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-[15px] top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400 via-cyan-500 to-purple-500 md:left-1/2 md:-ml-[1px]" />

            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 p-[2px] md:left-1/2 md:-ml-4">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative ml-12 md:ml-0 md:text-right ${index % 2 === 0 ? "" : "md:col-start-2"}`}>
                    <div
                      className={`rounded-lg border-2 bg-background p-6 shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-400/5 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                      style={{
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? "translateY(0)" : "translateY(20px)",
                        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + index * 0.1}s`,
                      }}
                    >
                      <span className="mb-2 block text-sm font-medium text-muted-foreground">Step {step.number}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  {index % 2 === 0 && <div className="hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
