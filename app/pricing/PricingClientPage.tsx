"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, Zap, Target, BarChart3, CheckCircle2, Lightbulb, Cpu } from "lucide-react"
import Script from "next/script"
import { FaqAccordion } from "@/components/faq-accordion"
import { cn } from "@/lib/utils"

export default function PricingClientPage() {
  // Pricing FAQs
  const pricingFaqs = [
    {
      question: "How do you determine the price for my specific project?",
      answer:
        "We start with a discovery session to understand your business challenges, then use AI to identify the optimal solution approach. We establish clear metrics for success and base our pricing on the expected value delivered to your business.",
    },
    {
      question: "What's the typical investment range for your solutions?",
      answer:
        "Our solutions are priced based on complexity and scope. However, because we focus on high-impact, targeted solutions, our clients often see ROI within weeks rather than months or years.",
    },
    {
      question: "Do you offer payment plans or milestone-based payments?",
      answer:
        "Yes, we offer flexible payment options including milestone-based payments tied to deliverables and outcomes. For some projects, we also offer success-based pricing where a portion of our compensation is directly tied to achieving agreed-upon results.",
    },
    {
      question: "What if my needs change during the project?",
      answer:
        "Our modular approach allows for flexibility. If your needs change, we can adjust the scope and pricing accordingly. Our 7-day development cycles also mean we can quickly pivot if necessary, without wasting significant resources.",
    },
    {
      question: "How long does it typically take to implement an AI solution?",
      answer:
        "With our accelerated development approach, we can typically deliver a working solution within 1-4 weeks, depending on complexity. Our 7-day development cycles allow us to show progress quickly and iterate based on your feedback.",
    },
    {
      question: "Do you provide training for our team to use the AI solutions?",
      answer:
        "Yes, we provide comprehensive training and documentation for all our solutions. For One-Time Build options, we include knowledge transfer sessions to ensure your team can effectively manage and maintain the solution.",
    },
  ]

  // Highlighted CTA button class
  const highlightedButtonClass =
    "relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-white/20 animate-pulse"

  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
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
                Value-Based Approach
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Pricing at INovaBeing
              </h1>
              <p className="mt-6 text-2xl font-bold text-gray-200 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Custom Problems Need Custom Pricing.
              </p>
              <p className="mt-6 text-xl text-gray-300">
                We don't believe in one-size-fits-all packages. Our pricing reflects the unique value we deliver to your
                specific business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Models Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                Flexible Options
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">AI Solution Pricing Models</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the model that best fits your business needs and technical capabilities.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* One-Time Build */}
              <Card className="border-2 border-purple-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:border-purple-900/30 dark:bg-gray-800">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">One-Time Build</CardTitle>
                  <p className="text-muted-foreground">Perfect for teams with technical expertise</p>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-6">
                    <p className="text-lg font-medium text-muted-foreground">Custom quote based on project scope</p>
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    Client is responsible for managing tools, API costs, and automation after the initial build. This
                    option is ideal for businesses with technical teams who can maintain the solution independently.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Custom AI solution development</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Initial setup and configuration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Knowledge transfer and documentation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>30 days of post-launch support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" className={cn("w-full", highlightedButtonClass)}>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Ongoing Support */}
              <Card className="border-2 border-purple-500 bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:border-purple-500 dark:bg-gray-800">
                <CardHeader className="pb-4">
                  <div className="absolute right-4 top-4 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                    Recommended
                  </div>
                  <CardTitle className="text-2xl font-bold">Ongoing Support</CardTitle>
                  <p className="text-muted-foreground">Fully managed solution</p>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-6">
                    <p className="text-lg font-medium text-muted-foreground">Monthly subscription based on usage</p>
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    We handle all aspects including tool and API costs, as well as ongoing updates to the latest Large
                    Language Models (LLMs). Our team prioritizes cost-effectiveness while ensuring superior output
                    quality.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Everything in One-Time Build</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Ongoing maintenance and updates</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Regular LLM updates and optimization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>All API and tool costs included</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span>Priority support and monitoring</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ctaGradient" className={cn("w-full", highlightedButtonClass)}>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-lg">
                Need a more comprehensive solution? We offer medium and large-scale models as well.
              </p>
              <Button
                asChild
                variant="ctaGradient"
                className={cn("px-8 py-6 text-lg font-bold", highlightedButtonClass)}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                Our Value Proposition
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Our Approach Is Different</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We build faster using AI, automation, and deep system thinking, avoiding guesswork and waste.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all duration-300 hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Zap className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Accelerated Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We leverage AI and automation to build solutions in days, not months, significantly reducing costs
                    while maintaining quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all duration-300 hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Target className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Precision Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We identify and solve the exact friction points in your business, eliminating waste and focusing
                    only on what delivers value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all duration-300 hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <BarChart3 className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Value-Based Pricing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You pay for the value delivered, not the time spent. Our pricing directly reflects the business
                    impact of our solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Traditional vs INovaBeing Approach */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                The INovaBeing Difference
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Traditional Approach vs. Our Method
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-red-200 bg-white p-8 shadow-sm dark:border-red-900/30 dark:bg-gray-800">
                <div className="mb-4 flex items-center">
                  <Clock className="mr-3 h-8 w-8 text-red-500" />
                  <h3 className="text-xl font-bold">Traditional Approach</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-red-500">✖</span>
                    <span>Long project timelines spanning months or years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-red-500">✖</span>
                    <span>Fixed packages that may include unnecessary features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-red-500">✖</span>
                    <span>Billing based on time and materials regardless of outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-red-500">✖</span>
                    <span>Extensive planning phases that delay implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-red-500">✖</span>
                    <span>One-size-fits-all solutions that don't address specific needs</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-white p-8 shadow-sm dark:border-green-900/30 dark:bg-gray-800">
                <div className="mb-4 flex items-center">
                  <Zap className="mr-3 h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-bold">INovaBeing Method</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500">✓</span>
                    <span>Rapid 7-day development cycles for immediate impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500">✓</span>
                    <span>Custom solutions tailored to your specific business challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500">✓</span>
                    <span>Value-based pricing tied directly to business outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500">✓</span>
                    <span>AI-powered discovery that quickly identifies core issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500">✓</span>
                    <span>Modular approach that scales with your needs and budget</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Methodology Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-pink-500 opacity-20 blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                Our Methodology
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                How We Determine Pricing
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Our AI-powered approach ensures you get maximum value at the right price point.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">AI-Powered Discovery</h3>
                <p className="text-gray-300">
                  We use AI to streamline solution architecture, quickly identifying the core issues and optimal
                  approaches, eliminating costly guesswork.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">Modular, Automation-First Logic</h3>
                <p className="text-gray-300">
                  We build with modular, automation-first logic that scales efficiently, ensuring you only pay for what
                  you need now while enabling future expansion.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">Value-Driven Pricing</h3>
                <p className="text-gray-300">
                  We establish clear metrics for success and tie our pricing to the value delivered, ensuring you only
                  pay for real business impact, not time spent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Benefits Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                Client Benefits
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Advantages of Our Pricing Model</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our approach delivers significant advantages over traditional pricing models.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">No Fixed Packages</h3>
                    <p className="mt-2 text-muted-foreground">
                      You never pay for features or services you don't need. Every solution is custom-built for your
                      specific challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Faster Builds, Lower Costs</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our rapid development approach means you see results in days, not months, significantly reducing
                      overall project costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Predictable ROI</h3>
                    <p className="mt-2 text-muted-foreground">
                      With value-based pricing, you can clearly see the return on your investment before committing to a
                      project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Clear Outcomes</h3>
                    <p className="mt-2 text-muted-foreground">
                      We establish measurable success metrics from the start, ensuring transparency and accountability
                      throughout the project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Scalable Investment</h3>
                    <p className="mt-2 text-muted-foreground">
                      Start with a focused solution that addresses your most critical needs, then scale up as you see
                      results and ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Reduced Risk</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our approach minimizes your financial risk by delivering tangible results quickly and tying
                      compensation to actual outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                Common Questions
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            </div>

            <div className="mt-16 mx-auto max-w-4xl">
              <FaqAccordion faqs={pricingFaqs} />
            </div>
          </div>
        </section>
      </main>

      {/* Structured data for Pricing page */}
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pricingFaqs.map((faq) => ({
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
