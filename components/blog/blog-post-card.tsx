"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
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

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>

          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="bg-purple-600 hover:bg-purple-700">{post.category}</Badge>
            <h3 className="mt-2 text-lg font-bold text-white line-clamp-2">{post.title}</h3>
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>

          <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="ml-2">{post.author}</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400">
            <span className="font-medium">Read article</span>
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>

      {/* AI Insights Tooltip - appears on hover */}
      {isHovered && post.insights.efficiency > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -right-1 -top-1 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800"
        >
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">AI Impact Metrics</div>
          <div className="mt-1 space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs">Implementations:</span>
              <span className="text-xs font-medium">{post.insights.implementations}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs">Efficiency Gain:</span>
              <span className="text-xs font-medium">{post.insights.efficiency}%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs">Cost Reduction:</span>
              <span className="text-xs font-medium">{post.insights.costReduction}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
