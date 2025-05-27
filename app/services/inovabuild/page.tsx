import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Workflow, Bot, LayoutDashboard, Layers, Calendar } from "lucide-react"
import Script from "next/script"
import { FaqAccordion } from "@/components/faq-accordion"

export const metadata = {
  title: "InovaBuild™ - Custom AI Application Development | INovaBeing",
  description:
    "Build custom AI applications tailored to your business needs with InovaBuild™. From concept to launch in record time with voice/chat AI agents, workflow automation, and admin dashboards.",
  keywords: [
    "custom AI applications",
    "AI development",
    "voice AI agents",
    "chat AI agents",
    "workflow automation",
    "admin dashboards",
    "AI integration",
    "custom software development",
    "business applications",
  ],
  alternates: {
    canonical: "https://www.inovabeing.com/services/inovabuild",
  },
}

export default function InovaBuildPage() {
  const faqs = [
    {
      question: "How long does it take to build a custom AI application?",
      answer:
        "With InovaBuild™, we can deliver a fully functional AI application in as little as 7 days. Our rapid development approach focuses on delivering immediate value while maintaining high quality.",
    },
    {
      question: "What types of AI applications can you build?",
      answer:
        "We can build a wide range of AI applications, including but not limited to: customer service chatbots, data analysis tools, workflow automation systems, predictive maintenance solutions, recommendation engines, and custom admin dashboards.",
    },
    {
      question: "How do you ensure the quality of AI applications built so quickly?",
      answer:
        "We use a combination of pre-built components, AI-assisted development, and rigorous testing protocols to ensure high quality while maintaining speed. Our experienced team follows best practices and uses the latest technologies to deliver reliable solutions.",
    },
  ]

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
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                Product Building
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                InovaBuild™
              </h1>
              <p className="mt-6 text-xl text-gray-300 hero-description max-w-2xl">
                Custom applications built with the latest AI technology tailored to your specific business needs. From
                concept to launch in record time.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6 rounded-md"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Contact Us About InovaBuild</span>
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
                Comprehensive AI Product Building Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We build custom AI applications and tools that solve your specific business challenges and drive growth.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Code className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Custom Application Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tailored AI applications designed to meet your specific business requirements and workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Workflow className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Workflow Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Streamline your business processes with intelligent AI automation solutions that save time and
                    reduce errors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Bot className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">AI/ML Integration</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enhance your applications with artificial intelligence and machine learning capabilities for smarter
                    operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <LayoutDashboard className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Admin Dashboards</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Intuitive AI-powered dashboards that provide real-time insights and control over your business
                    operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Layers className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold">Integrations & Middleware</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Connect your existing systems and applications to create a seamless AI-enhanced technology
                    ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-md transition-all hover:shadow-lg dark:from-purple-950/40 dark:to-indigo-950/40">
                <CardContent className="p-6">
                  <Cpu className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <h3 className="mb-2 text-xl font-bold" id="ai-agents">
                    Voice/Chat AI Agents
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Intelligent conversational AI agents that can handle customer inquiries, support requests, and
                    automate interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section - Updated with alternating alignment */}
        <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our AI Development Process</h2>
              <p className="mt-4 text-lg text-gray-300">
                We follow a structured approach to deliver high-quality AI products in record time.
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
                      <h3 className="text-xl font-bold text-purple-300">Discovery & Planning</h3>
                      <p className="mt-2 text-gray-300">
                        We work with you to understand your business needs, define requirements, and create a detailed
                        project plan.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Left aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      2
                    </div>
                    <div className="ml-0 mr-auto w-1/2 pr-8 text-right md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Design & Prototyping</h3>
                      <p className="mt-2 text-gray-300">
                        We create wireframes and interactive prototypes to visualize the AI solution before development
                        begins.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Right aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      3
                    </div>
                    <div className="ml-auto mr-0 w-1/2 pl-8 md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">AI Development</h3>
                      <p className="mt-2 text-gray-300">
                        Our experienced developers build your AI solution using the latest technologies and best
                        practices.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Left aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      4
                    </div>
                    <div className="ml-0 mr-auto w-1/2 pr-8 text-right md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Testing & Quality Assurance</h3>
                      <p className="mt-2 text-gray-300">
                        We rigorously test your AI solution to ensure it meets all requirements and quality standards.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 - Right aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      5
                    </div>
                    <div className="ml-auto mr-0 w-1/2 pl-8 md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Deployment</h3>
                      <p className="mt-2 text-gray-300">
                        We deploy your AI solution to production, ensuring a smooth transition and minimal disruption.
                      </p>
                    </div>
                  </div>

                  {/* Step 6 - Left aligned */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                      6
                    </div>
                    <div className="ml-0 mr-auto w-1/2 pr-8 text-right md:w-5/12">
                      <h3 className="text-xl font-bold text-purple-300">Support & Maintenance</h3>
                      <p className="mt-2 text-gray-300">
                        We provide ongoing support and maintenance to ensure your AI solution continues to meet your
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
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
                Get answers to common questions about our InovaBuild™ service
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Build Your AI Solution?</h2>
              <p className="mt-4 text-lg text-gray-300">
                Get in touch with our AI product experts to discuss how we can help you build the perfect solution for
                your business.
              </p>
              <div className="mt-8 flex flex-wrap justify-center">
                <Button
                  asChild
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6 rounded-md"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Contact Us About InovaBuild</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Structured data for InovaBuild service */}
      <Script
        id="inovabuild-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "InovaBuild™ - Custom AI Application Development",
            serviceType: "AI Application Development",
            provider: {
              "@type": "Organization",
              name: "INovaBeing Pvt Ltd",
              url: "https://www.inovabeing.com",
            },
            description:
              "Custom AI applications built with the latest technology tailored to your specific business needs. From concept to launch in record time.",
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
              name: "InovaBuild Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Application Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Workflow Automation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Voice/Chat AI Agents",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Admin Dashboards",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="inovabuild-faq-schema"
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
