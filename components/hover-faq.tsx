"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItem {
  question: string
  answer: string
}

interface HoverFaqProps {
  faqs: FaqItem[]
  className?: string
}

export function HoverFaq({ faqs, className = "" }: HoverFaqProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-750"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
          tabIndex={0}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{faq.question}</h3>
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
