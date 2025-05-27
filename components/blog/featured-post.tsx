"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  authorImage: string
  date: string
  readTime: string
  image: string
  tags: string[]
  insights: {
    implementations: number
    efficiency: number
    costReduction: number
  }
}

interface FeaturedPostProps {
  post: BlogPost
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-1 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-video md:aspect-auto">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute left-4 top-4">
              <div className="flex items-center rounded-full bg-purple-600 px-3 py-1 text-sm font-medium text-white">
                <TrendingUp className="mr-1 h-4 w-4" />
                Featured Article
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <Badge className="mb-2 bg-purple-600 hover:bg-purple-700">{post.category}</Badge>

            <Link href={`/blog/${post.id}`}>
              <h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                {post.title}
              </h2>
            </Link>

            <p className="mb-6 text-gray-600 dark:text-gray-400">{post.excerpt}</p>

            <div className="mb-6 flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div className="ml-3">
                <div className="font-medium">{post.author}</div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link href={`/blog/${post.id}`} className="inline-flex items-center text-purple-600 dark:text-purple-400">
              <span className="font-medium">Read full article</span>
              <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -right-1 -top-1 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
        >
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">AI Impact Metrics</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between gap-8">
              <span className="text-sm">Implementations:</span>
              <span className="text-sm font-medium">{post.insights.implementations}</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-sm">Efficiency Gain:</span>
              <span className="text-sm font-medium">{post.insights.efficiency}%</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-sm">Cost Reduction:</span>
              <span className="text-sm font-medium">{post.insights.costReduction}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
