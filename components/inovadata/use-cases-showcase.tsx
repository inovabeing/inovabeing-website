"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Database,
  BarChart3,
  Search,
  Users,
  MessageSquare,
  Home,
  DollarSign,
  LineChart,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Define the use case data structure
interface UseCase {
  id: string
  title: string
  icon: React.ReactNode
  useCase: string
  benefit: string
}

// Use case data
const useCases: UseCase[] = [
  {
    id: "ecommerce",
    title: "E-commerce Intelligence",
    icon: <Database className="h-6 w-6" />,
    useCase: "Extract pricing, availability, and reviews from online marketplaces.",
    benefit:
      "Businesses can monitor competitor pricing and product availability to optimize their own pricing strategies and inventory management.",
  },
  {
    id: "media",
    title: "Media & Sentiment Analytics",
    icon: <MessageSquare className="h-6 w-6" />,
    useCase: "Aggregate news articles and media mentions.",
    benefit:
      "Organizations can track brand mentions across various media platforms to understand public sentiment and adjust their public relations strategies accordingly.",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Data Preparation",
    icon: <BarChart3 className="h-6 w-6" />,
    useCase: "Collect and structure datasets for training machine learning models.",
    benefit:
      "Companies can gather and organize relevant data to enhance the performance of their AI models, leading to more accurate predictions and insights.",
  },
  {
    id: "seo",
    title: "SEO & Search Insights",
    icon: <Search className="h-6 w-6" />,
    useCase: "Extract search engine results page (SERP) data to analyze keyword rankings and trends.",
    benefit:
      "Digital marketers can identify keyword opportunities and track search rankings to improve their SEO strategies.",
  },
  {
    id: "talent",
    title: "Talent & Recruitment Trends",
    icon: <Users className="h-6 w-6" />,
    useCase: "Scrape job postings and salary data.",
    benefit:
      "HR departments can analyze industry hiring patterns and salary benchmarks to inform their recruitment and compensation strategies.",
  },
  {
    id: "social",
    title: "Social Listening & Analytics",
    icon: <Activity className="h-6 w-6" />,
    useCase: "Monitor social media for brand perception and market sentiment.",
    benefit:
      "Businesses can track real-time customer feedback during product launches to address issues promptly and optimize engagement.",
  },
  {
    id: "real-estate",
    title: "Real Estate Market Analysis",
    icon: <Home className="h-6 w-6" />,
    useCase: "Aggregate listings from property portals.",
    benefit:
      "Real estate firms can assess property pricing trends and market dynamics in specific locations to make informed investment decisions.",
  },
  {
    id: "pricing",
    title: "Pricing Intelligence",
    icon: <DollarSign className="h-6 w-6" />,
    useCase: "Monitor competitor prices and analyze pricing strategies.",
    benefit:
      "Companies can adjust their pricing strategies by regularly comparing competitor prices, ensuring market competitiveness and maximizing margins.",
  },
  {
    id: "competitor",
    title: "Competitor Analysis & Market Research",
    icon: <LineChart className="h-6 w-6" />,
    useCase: "Conduct detailed competitive benchmarking and gather industry insights.",
    benefit:
      "Businesses can identify competitor strengths, weaknesses, and market positioning to refine their go-to-market strategies.",
  },
]

export function UseCasesShowcase() {
  const [activeCase, setActiveCase] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = (id: string) => {
    setActiveCase(id)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const handleFocus = (id: string) => {
    setActiveCase(id)
    setIsHovering(true)
  }

  const handleBlur = () => {
    setIsHovering(false)
  }

  const activeUseCase = useCases.find((useCase) => useCase.id === activeCase)

  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Use Cases & Potential Applications
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hover over each use case to discover how InovaData™ can transform your business with AI-powered data
            solutions.
          </p>
        </div>

        <div className="relative">
          {/* Use Case Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.id}
                className={cn(
                  "group relative overflow-hidden rounded-lg border p-4 cursor-pointer transition-all duration-300",
                  activeCase === useCase.id
                    ? "border-purple-500 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 shadow-md"
                    : "border-gray-200 bg-white hover:border-purple-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-800/30",
                )}
                onMouseEnter={() => handleMouseEnter(useCase.id)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleFocus(useCase.id)}
                onBlur={handleBlur}
                tabIndex={0}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                      activeCase === useCase.id
                        ? "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
                    )}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>

                <div className="mt-2 flex items-center text-sm text-purple-600 dark:text-purple-400">
                  <span className="font-medium">Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence>
            {isHovering && activeUseCase && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 rounded-lg border border-purple-200 bg-white p-6 shadow-lg dark:border-purple-800/30 dark:bg-gray-900"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                    {activeUseCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{activeUseCase.title}</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Use Case</h4>
                    <p className="text-gray-700 dark:text-gray-300">{activeUseCase.useCase}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
                      Potential Benefit
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">{activeUseCase.benefit}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
