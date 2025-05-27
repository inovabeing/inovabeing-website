"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  image: string
  category: string
  date: string
}

interface TrendingTopicsProps {
  posts: BlogPost[]
}

export function TrendingTopics({ posts }: TrendingTopicsProps) {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group flex items-center gap-3"
        >
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="flex-1">
            <div className="text-xs text-gray-500 dark:text-gray-400">{post.category}</div>
            <Link href={`/blog/${post.id}`} className="group/link">
              <h4 className="font-medium line-clamp-2 group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400">
                {post.title}
              </h4>
            </Link>
            <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
              <span>{post.date}</span>
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
