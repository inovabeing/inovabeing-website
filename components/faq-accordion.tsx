"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  className?: string
}

export function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "rounded-lg border bg-white shadow-sm transition-all duration-200 dark:bg-gray-800",
            openIndex === index ? "border-purple-300 dark:border-purple-700" : "border-gray-200 dark:border-gray-700",
          )}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between p-6 text-left"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-200",
                openIndex === index ? "bg-purple-100 dark:bg-purple-900/50" : "bg-gray-100 dark:bg-gray-700",
              )}
            >
              {openIndex === index ? (
                <ChevronUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              )}
            </div>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={cn("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-96" : "max-h-0")}
          >
            <div className="border-t border-gray-200 p-6 dark:border-gray-700">
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
