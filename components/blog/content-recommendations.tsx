"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  image: string
  category: string
  excerpt: string
}

interface ContentRecommendationsProps {
  recommendations: BlogPost[]
}

export function ContentRecommendations({ recommendations }: ContentRecommendationsProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [currentRecommendations, setCurrentRecommendations] = useState(recommendations)

  // Simulate refreshing recommendations
  const refreshRecommendations = () => {
    setIsRefreshing(true)

    // In a real implementation, this would call an API to get new recommendations
    setTimeout(() => {
      // Shuffle the recommendations for demo purposes
      setCurrentRecommendations([...currentRecommendations].sort(() => 0.5 - Math.random()))
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Based on your reading history</p>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={refreshRecommendations}
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          <span className="sr-only">Refresh recommendations</span>
        </Button>
      </div>

      <div className="space-y-4">
        {currentRecommendations.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
          >
            <div className="flex gap-3">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex-1">
                <div className="text-xs text-purple-600 dark:text-purple-400">{post.category}</div>
                <Link href={`/blog/${post.id}`} className="group/link">
                  <h4 className="font-medium line-clamp-2 group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400">
                    {post.title}
                  </h4>
                </Link>

                <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>Read article</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
