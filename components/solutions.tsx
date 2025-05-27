"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"

export function Solutions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const solutions = [
    {
      id: "inovabuild",
      icon: <Brain className="h-12 w-12 text-yellow-500" />,
      title: "InovaBuild™",
      subtitle: "Custom AI Solutions",
      description: "Custom AI applications built with the latest technology tailored to your specific business needs.",
      features: [
        "Custom Application Development",
        "Workflow Automation",
        "AI/ML Integration",
        "Admin Dashboards",
        "Integrations & Middleware",
        "Voice/Chat AI Agents",
        "Internal Tools & Platforms",
      ],
      popular: false, // Changed from true to false
    },
    {
      id: "inovadata",
      icon: <Database className="h-12 w-12 text-yellow-500" />,
      title: "InovaData™",
      subtitle: "Data Clarity & Advantage",
      description:
        "Seamlessly connect your existing systems, enrich your data, and generate targeted emails for enhanced business intelligence and outreach.",
      features: [
        "Data Cleanup & Structuring",
        "Data Enrichment",
        "Web Scraping",
        "Automated Pipelines",
        "AI Data Intelligence",
        "Email Generation",
        "Dashboard Feeds",
        "Alert Systems",
      ],
      popular: false,
    },
  ]

  return (
    <>
      <section
        id="solutions"
        className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-24"
      >
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-theme-pink opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-theme-light-purple opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
              Our AI Solutions
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-yellow-500 !important sm:text-4xl md:text-5xl">
              Cutting-Edge AI Solutions
            </h2>

            {/* TL;DR summary for AI search optimization */}
            <p className="mt-4 text-xl text-yellow-100">
              We deliver powerful AI solutions that reduce operational friction and drive business growth through
              automation, data enrichment, and intelligent workflows powered by artificial intelligence.
            </p>
          </div>

          <div
            ref={ref}
            className="mt-16 grid gap-8 sm:grid-cols-2"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(50px)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                <CardContent className="p-6 solutions-card">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    {solution.icon}
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-yellow-500">{solution.title}</h3>
                  {solution.subtitle && <p className="mb-2 text-sm font-medium text-yellow-300">{solution.subtitle}</p>}
                  <p className="mb-4 text-yellow-100">{solution.description}</p>

                  {/* Features list */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-yellow-400">Features:</h4>
                    <ul className="grid grid-cols-1 gap-1 text-sm text-yellow-100 md:grid-cols-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-yellow-500">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    variant="glowOutline"
                    size="lg"
                    className="mt-4 w-full group relative overflow-hidden transition-all duration-300 ease-in-out border-yellow-500 hover:border-yellow-400"
                  >
                    <Link
                      href={`/services/${solution.id}`}
                      className="flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 text-yellow-500 hover:text-yellow-400"
                    >
                      Learn more about {solution.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add custom CSS to ensure the golden yellow color is applied */}
      <style jsx global>{`
        #solutions h2 {
          color: #eab308 !important; /* Golden yellow (yellow-500) */
        }
        
        .solutions-card h3 {
          color: #eab308 !important; /* Golden yellow (yellow-500) */
        }
        
        .solutions-card h4 {
          color: #facc15 !important; /* Yellow-400 */
        }
        
        .solutions-card p {
          color: #fef9c3 !important; /* Yellow-100 */
        }
        
        .solutions-card ul li {
          color: #fef9c3 !important; /* Yellow-100 */
        }
        
        .solutions-card ul li span:first-child {
          color: #eab308 !important; /* Golden yellow (yellow-500) */
        }
      `}</style>

      {/* Service Schema for SEO */}
      <Script id="services-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            ${solutions
              .map(
                (solution, index) => `
              {
                "@type": "ListItem",
                "position": ${index + 1},
                "item": {
                  "@type": "Service",
                  "name": "${solution.title}${solution.subtitle ? " - " + solution.subtitle : ""}",
                  "description": "${solution.description}",
                  "url": "https://inovabeing.com/services/${solution.id}",
                  "provider": {
                    "@type": "Organization",
                    "name": "Inovabeing Pvt Ltd"
                  }
                }
              }
            `,
              )
              .join(",")}
          ]
        }
      `}
      </Script>
    </>
  )
}
