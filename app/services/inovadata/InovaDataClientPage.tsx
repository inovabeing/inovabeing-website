"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Database, BarChart3, FileSpreadsheet, Workflow, Zap, Bot, MessageSquare } from "lucide-react"
import { UseCasesShowcase } from "@/components/inovadata/use-cases-showcase"
import { CalBookingModal } from "@/components/cal-booking-modal"
import { useCalBooking } from "@/hooks/use-cal-booking"
import Script from "next/script"
import { FaqAccordion } from "@/components/faq-accordion"

type Props = {}

export default function InovaDataClientPage(props: Props) {
  const { isBookingModalOpen, openBookingModal, closeBookingModal } = useCalBooking()

  // Cal.com link
  const calLink = "https://cal.com/sathyarajan-b-vc7dee/meet"

  const faqs = [
    {
      question: "What is data enrichment and how can it benefit my business?",
      answer:
        "Data enrichment is the process of enhancing your existing data with additional information from external sources using AI. This can benefit your business by providing deeper customer insights, improving targeting accuracy, enhancing decision-making, and increasing the overall value of your data assets.",
    },
    {
      question: "How does AI improve data analytics?",
      answer:
        "AI significantly improves data analytics by automating data processing, identifying patterns humans might miss, enabling predictive analytics, providing real-time insights, and scaling to handle massive datasets. This leads to faster, more accurate, and more valuable business intelligence.",
    },
    {
      question: "How quickly can you implement AI data services for my business?",
      answer:
        "With InovaData™, we can implement initial AI data services in as little as 7 days. Our approach focuses on delivering immediate value while building a foundation for ongoing data enhancement and intelligence.",
    },
  ]

  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Cal.com Booking Modal */}
        <CalBookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} calLink={calLink} />
        {/* Hero Section - Modified to remove image */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-24 md:py-32">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-pink-500 opacity-20 blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                AI Data Services
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                InovaData™
              </h1>
              <p className="mt-4 text-xl text-gray-300 hero-description">
                Transform your data into actionable insights with our comprehensive AI data services. From data cleanup
                to AI-powered intelligence for enhanced business decision-making.
              </p>
              <div className="mt-8">
                <Button asChild variant="ctaBright" size="lg" className="group">
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Contact Us About InovaData</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Comprehensive AI Data Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our AI-powered data services help businesses leverage their data assets effectively, from collection to
                actionable insights.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Database className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Web Scraping & Data Collection</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Extract valuable data from websites, APIs, and online platforms to create comprehensive datasets for
                    analysis and decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <FileSpreadsheet className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold" id="data-cleanup">
                    Lead Generation & Enrichment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Identify and enrich high-quality leads with comprehensive data points to improve conversion rates
                    and sales effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Zap className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold" id="data-enrichment">
                    Data Enrichment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enhance your existing data with additional information from external sources using AI to gain deeper
                    business insights and competitive advantage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <BarChart3 className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Advanced Analytics & Visualization</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Transform raw data into actionable insights with AI-powered advanced analytics and intuitive
                    visualizations for better decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Workflow className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Automated Data Pipelines</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build AI-powered automated data pipelines to streamline your data processing and analysis workflows
                    for consistent insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Bot className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">AI Data Intelligence</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leverage AI and machine learning to extract deeper insights and predictive analytics from your data
                    for strategic decision-making and competitive advantage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Use Cases Showcase */}
        <UseCasesShowcase />

        {/* Process Section - Updated with alternating alignment */}
        <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our AI Data Process</h2>
              <p className="mt-4 text-lg text-gray-300">
                We follow a structured approach to transform your raw data into valuable business insights using
                artificial intelligence.
              </p>
            </div>

            <div className="mt-16">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-indigo-500"></div>

                {/* Timeline items with alternating alignment */}
                <div className="space-y-20">
                  {/* Step 1 - Right aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      1
                    </div>
                    <div className="ml-auto mr-0 w-1/2 pl-8 md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Discovery & Assessment</h3>
                      <p className="mt-2 text-gray-300">
                        We analyze your current data infrastructure, identify pain points, and define clear objectives
                        for AI enhancement.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Left aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      2
                    </div>
                    <div className="ml-0 mr-auto w-1/2 pr-8 text-right md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Data Collection & Integration</h3>
                      <p className="mt-2 text-gray-300">
                        We collect data from various sources and integrate it into a unified system for AI-powered
                        processing.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Right aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      3
                    </div>
                    <div className="ml-auto mr-0 w-1/2 pl-8 md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Cleaning & Structuring</h3>
                      <p className="mt-2 text-gray-300">
                        We clean, normalize, and structure your data using AI algorithms to ensure accuracy and
                        consistency.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Left aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      4
                    </div>
                    <div className="ml-0 mr-auto w-1/2 pr-8 text-right md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Analysis & Enrichment</h3>
                      <p className="mt-2 text-gray-300">
                        We analyze your data and enrich it with additional information using AI to provide deeper
                        business insights.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 - Right aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      5
                    </div>
                    <div className="ml-auto mr-0 w-1/2 pl-8 md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Visualization & Reporting</h3>
                      <p className="mt-2 text-gray-300">
                        We create AI-powered intuitive visualizations and reports to help you understand your data and
                        make informed decisions.
                      </p>
                    </div>
                  </div>

                  {/* Step 6 - Left aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      6
                    </div>
                    <div className="ml-0 mr-auto w-1/2 pr-8 text-right md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Implementation & Automation</h3>
                      <p className="mt-2 text-gray-300">
                        We implement AI data solutions and automate processes to ensure ongoing data quality and
                        insights for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why InovaData Section */}
        <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why InovaData™?</h2>
              <p className="mt-4 text-xl text-gray-300">
                Our data solutions are designed to give you a competitive edge with reliable, actionable insights.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="mb-3 text-xl font-bold text-white">Precision</h3>
                <p className="text-gray-300">
                  High-quality, structured, actionable data that provides clear insights and drives informed
                  decision-making.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="mb-3 text-xl font-bold text-white">Compliance</h3>
                <p className="text-gray-300">
                  Adhering strictly to data privacy and regulatory standards to ensure ethical and legal data practices.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="mb-3 text-xl font-bold text-white">Scalability</h3>
                <p className="text-gray-300">
                  Flexible solutions designed for rapid growth, adapting to your evolving business needs and data
                  requirements.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="mb-3 text-xl font-bold text-white">Support</h3>
                <p className="text-gray-300">
                  Expert guidance from data professionals who understand your industry and business challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Get answers to common questions about our InovaData™ service
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-3xl">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Data with AI?</h2>
              <p className="mt-4 text-lg text-gray-300">
                Get in touch with our AI data experts to discuss how we can help you leverage your data assets
                effectively for business growth.
              </p>
              <div className="mt-8 flex flex-wrap justify-center">
                <Button asChild variant="ctaBright" size="lg" className="group">
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Contact Us About InovaData</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Structured data for InovaData service */}
      <Script
        id="inovadata-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "InovaData™ - AI Data Services & Enrichment",
            serviceType: "Data Services",
            provider: {
              "@type": "Organization",
              name: "INovaBeing Pvt Ltd",
              url: "https://www.inovabeing.com",
            },
            description:
              "Transform your data into actionable insights with our comprehensive AI data services. From data cleanup to AI-powered intelligence for enhanced business decision-making.",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "InovaData Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Cleanup & Structuring",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Enrichment",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Advanced Analytics & Visualization",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Data Intelligence",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="inovadata-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
