"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, DollarSign } from "lucide-react"

interface BlogPost {
  id: number
  insights: {
    implementations: number
    efficiency: number
    costReduction: number
  }
}

interface InsightsPulseProps {
  posts: BlogPost[]
}

export function InsightsPulse({ posts }: InsightsPulseProps) {
  // Calculate aggregate insights
  const totalImplementations = posts.reduce((sum, post) => sum + post.insights.implementations, 0)
  const avgEfficiency = Math.round(posts.reduce((sum, post) => sum + post.insights.efficiency, 0) / posts.length)
  const avgCostReduction = Math.round(posts.reduce((sum, post) => sum + post.insights.costReduction, 0) / posts.length)

  // Animation for the progress bars
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-lg bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-6 text-white">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-purple-300" />
            <h3 className="font-medium">Total Implementations</h3>
          </div>
          <div className="flex items-end gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              {totalImplementations}
            </motion.div>
            <div className="text-sm text-gray-300">customer solutions</div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: animate ? "85%" : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
            ></motion.div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-purple-300" />
            <h3 className="font-medium">Average Efficiency Gain</h3>
          </div>
          <div className="flex items-end gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold"
            >
              {avgEfficiency}%
            </motion.div>
            <div className="text-sm text-gray-300">process improvement</div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: animate ? "70%" : 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"
            ></motion.div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-purple-300" />
            <h3 className="font-medium">Average Cost Reduction</h3>
          </div>
          <div className="flex items-end gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold"
            >
              {avgCostReduction}%
            </motion.div>
            <div className="text-sm text-gray-300">operational savings</div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: animate ? "60%" : 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            ></motion.div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-300">
        Data aggregated from case studies and client implementations
      </div>
    </div>
  )
}
