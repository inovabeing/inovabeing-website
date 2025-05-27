import Image from "next/image"
import { CheckCircle2, Zap, Target, BarChart3, Lightbulb } from "lucide-react"
import Script from "next/script"

export const metadata = {
  title: "About Us | INovaBeing - AI Solutions",
  description:
    "INovaBeing transforms business friction into operational excellence through AI automation. Learn about our vision, mission, and how we turn complex processes into revenue accelerators.",
  keywords: [
    "INovaBeing",
    "AI solutions",
    "business automation",
    "operational excellence",
    "AI innovation",
    "business transformation",
    "AI company",
  ],
  alternates: {
    canonical: "https://www.inovabeing.com/about-us",
  },
}

export default function AboutUsPage() {
  return (
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
              About INovaBeing
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Transforming Business Through AI Innovation
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              We're on a mission to eliminate operational friction and accelerate business growth through cutting-edge
              AI solutions delivered in record time.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-900/30 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Find Friction. Eliminate Waste. Accelerate Revenue.
            </h2>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-1 shadow-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/about/vision.jpg"
                    alt="INovaBeing Vision - AI transforming business operations"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-1 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-center dark:bg-gray-950">
                  <Target className="h-10 w-10 text-purple-600" />
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                Our Vision
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Elevating Business Through AI Innovation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To build a world where businesses spend less time fighting friction and more time creating value. Where
                AI doesn't just automate - it elevates, turning every operational challenge into a revenue opportunity.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We envision a future where artificial intelligence seamlessly integrates with human expertise, creating
                unprecedented efficiency and unlocking new possibilities for growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                Our Mission
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Transforming Friction Into Excellence
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We transform business friction into operational excellence through AI automation, turning complex
                processes into revenue accelerators.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our mission is to identify and eliminate the operational bottlenecks that drain resources and stifle
                growth, replacing them with intelligent, automated systems that drive efficiency and create new
                opportunities for success.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-1 shadow-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/about/mission.jpg"
                    alt="INovaBeing Mission - Transforming business friction into excellence"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-1 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-center dark:bg-gray-950">
                  <Zap className="h-10 w-10 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-pink-500 opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-500"></span>
              Our Brand Promise
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Alpha Friction by Innovating
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              We don't just see problems - we solve the pain points that keep businesses from reaching their potential.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Turn Manual Chaos into Automated Clarity</h3>
              <p className="text-gray-300">
                We transform disorganized, manual processes into streamlined, automated workflows that provide clear
                insights and consistent results.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Convert Lost Time into Earned Revenue</h3>
              <p className="text-gray-300">
                We reclaim the hours spent on inefficient tasks and redirect them toward strategic initiatives that
                drive growth and profitability.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Transform Operational Headaches into Strategic Advantages
              </h3>
              <p className="text-gray-300">
                We turn your biggest challenges into your greatest strengths, creating competitive advantages through
                intelligent automation and data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
              Our Core Values
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">What Drives Us Forward</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our values shape everything we do, from how we develop solutions to how we interact with our clients.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries, exploring new technologies and approaches to solve complex business
                challenges.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Efficiency</h3>
              <p className="text-muted-foreground">
                We value streamlined processes and elegant solutions that maximize impact while minimizing waste.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards in all our interactions, building trust through transparency
                and honesty.
              </p>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold">Impact</h3>
              <p className="text-muted-foreground">
                We measure our success by the tangible results we deliver for our clients and the positive change we
                create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
              Our Approach
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">How We Deliver Excellence</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our unique methodology ensures rapid delivery without compromising on quality or results.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Rapid Discovery</h3>
                    <p className="mt-2 text-muted-foreground">
                      We quickly identify the core friction points in your business through our specialized assessment
                      process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Targeted Solutions</h3>
                    <p className="mt-2 text-muted-foreground">
                      We design focused AI solutions that address specific pain points rather than overwhelming you with
                      unnecessary complexity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Accelerated Delivery</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our 7-day development cycle ensures you see results quickly, allowing for rapid iteration and
                      improvement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Measurable Impact</h3>
                    <p className="mt-2 text-muted-foreground">
                      We establish clear metrics from the start, ensuring every solution delivers quantifiable value to
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data for About page */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "INovaBeing Pvt Ltd",
              description:
                "INovaBeing transforms business friction into operational excellence through AI automation, turning complex processes into revenue accelerators.",
              url: "https://www.inovabeing.com",
              logo: "https://www.inovabeing.com/images/logo.png",
              slogan: "Find Friction. Eliminate Waste. Accelerate Revenue.",
              knowsAbout: [
                "Artificial Intelligence",
                "Business Automation",
                "Data Enrichment",
                "Workflow Optimization",
              ],
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".hero-description"],
            },
          }),
        }}
      />
    </main>
  )
}
