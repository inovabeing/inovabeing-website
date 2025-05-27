"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ToolCardProps {
  tool: {
    name: string
    classification: string
    description: string
    logo: string
  }
}

export function ToolCard({ tool }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden transition-all duration-300 bg-black/20 rounded-xl border border-gray-800 hover:border-gray-700 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4 overflow-hidden bg-gray-800 rounded-lg">
            <Image
              src={tool.logo || "/placeholder.svg"}
              alt={`${tool.name} logo`}
              fill
              className="object-contain p-2"
              unoptimized
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{tool.name}</h3>
            <p className="text-sm text-gray-400">{tool.classification}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300">{tool.description}</p>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  )
}
