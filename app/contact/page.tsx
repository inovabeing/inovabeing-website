import type { Metadata } from "next"
import ContactForm from "./contact-form"
import { Brain, Mail, MessageCircle, Phone, Database, MapPin, ExternalLink } from "lucide-react"
import { HoverFaq } from "@/components/hover-faq"

export const metadata: Metadata = {
  title: "Contact Us | INovaBeing - AI Solutions",
  description: "Get in touch with our AI experts to discuss your project needs. Schedule a call or send us a message.",
  keywords: [
    "contact INovaBeing",
    "AI consultation",
    "book a call",
    "AI solutions contact",
    "data services contact",
    "AI development inquiry",
  ],
}

export default function ContactPage() {
  const faqs = [
    {
      question: "How quickly can you start on my project?",
      answer:
        "We can typically begin work within 1-2 business days after our initial consultation and project scoping.",
    },
    {
      question: "What information should I prepare for our first call?",
      answer:
        "It's helpful to have a clear idea of your business challenges, goals, timeline, and budget. Any existing documentation or examples are also valuable.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance packages to ensure your AI solution continues to perform optimally and evolve with your business needs.",
    },
    {
      question: "How do you handle data security and privacy?",
      answer:
        "We follow industry best practices for data security and comply with relevant regulations. All client data is handled with strict confidentiality and appropriate security measures.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 md:py-28">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-pink-500 opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-500"></span>
              Get in Touch
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Let's Build Something Amazing Together
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Connect with our AI experts to discuss your project needs and explore how our solutions can transform your
              business.
            </p>
          </div>
        </div>

        {/* Animated circuit board pattern */}
        <div className="absolute inset-0 -z-20 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="circuit-pattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(0.5)"
              >
                <path d="M100 0 L100 100 L0 100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10,10" />
                <circle cx="50" cy="50" r="5" fill="white" />
                <circle cx="0" cy="0" r="3" fill="white" />
                <circle cx="100" cy="0" r="3" fill="white" />
                <circle cx="0" cy="100" r="3" fill="white" />
                <circle cx="100" cy="100" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center shadow-md dark:from-purple-950/40 dark:to-indigo-950/40">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-2 text-xl font-bold">Call Us</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Speak directly with our AI consultants to discuss your project needs.
              </p>
              <a
                href="tel:+910000000000"
                className="mt-auto inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                +91 0000-000-000
              </a>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center shadow-md dark:from-purple-950/40 dark:to-indigo-950/40">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-2 text-xl font-bold">Email Us</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@inovabeing.com"
                className="mt-auto inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                info@inovabeing.com
              </a>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center shadow-md dark:from-purple-950/40 dark:to-indigo-950/40">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-2 text-xl font-bold">Chat With Us</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Connect with our team instantly through WhatsApp for quick responses.
              </p>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
              <div className="grid md:grid-cols-5">
                {/* Left side - AI visual */}
                <div className="relative hidden bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white md:col-span-2 md:flex md:flex-col md:justify-between">
                  <div className="relative z-10">
                    <Brain className="h-12 w-12 text-white" />
                    <h3 className="mt-6 text-2xl font-bold">AI-Powered Solutions</h3>
                    <p className="mt-4 text-white/80">
                      Our team of AI experts is ready to help you transform your business with cutting-edge technology.
                    </p>

                    <div className="mt-8">
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold">Custom AI Development</h4>
                          <p className="text-white/70">Tailored solutions for your unique needs</p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                          <Database className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold">Data Intelligence</h4>
                          <p className="text-white/70">Transform your data into actionable insights</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated background pattern */}
                  <div className="absolute inset-0 z-0 opacity-20">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                </div>

                {/* Right side - Contact form */}
                <div className="p-8 md:col-span-3">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="mt-10">
            <HoverFaq faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Map Section - Moved below FAQ */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Office Location
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
              <div className="grid md:grid-cols-2">
                {/* Map */}
                <div className="h-[300px] md:h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3016530549196!2d78.35999867584752!3d17.441233583006236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d616b%3A0x48e8ce2c432f7051!2sINovaBeing%20Technologies%20Pvt%20LTD!5e0!3m2!1sen!2sin!4v1716399000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="INovaBeing Technologies Pvt Ltd Location"
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Address */}
                <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        INovaBeing Technologies Pvt LTD
                      </h3>
                      <div className="mt-4 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                        <p>Door No. 1-60, A & B, 3rd Floor</p>
                        <p>KNR Square, opp. The Platina</p>
                        <p>Gachibowli, Hyderabad</p>
                        <p>Telangana 500032</p>
                        <p>India</p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="https://maps.app.goo.gl/UYqTeDsyWS1FdRbi7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-white transition-all hover:opacity-90"
                        >
                          Get Directions
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
