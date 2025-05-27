"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toolsData } from "@/components/tech-arsenal/tools-data"
import { cn } from "@/lib/utils"

export function TechArsenalClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [filteredTools, setFilteredTools] = useState<typeof toolsData>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim() === "") {
      setFilteredTools([])
      setActiveCategory(null)
      return
    }

    const filtered = toolsData.filter(
      (tool) =>
        tool.name.toLowerCase().includes(value.toLowerCase()) ||
        tool.classification.toLowerCase().includes(value.toLowerCase()) ||
        tool.description.toLowerCase().includes(value.toLowerCase()),
    )

    setFilteredTools(filtered)

    // If there's an exact match, select that tool
    const exactMatch = filtered.find((tool) => tool.name.toLowerCase() === value.toLowerCase())

    if (exactMatch) {
      setSelectedTool(exactMatch.name)
      setActiveCategory(null)
    } else {
      setSelectedTool(null)

      // Set active category to the first one if we have results
      const classifications = [...new Set(filtered.map((tool) => tool.classification))].sort()
      if (classifications.length > 0 && !activeCategory) {
        setActiveCategory(classifications[0])
      } else if (classifications.length > 0 && !classifications.includes(activeCategory)) {
        setActiveCategory(classifications[0])
      }
    }
  }

  // Handle tool selection from search results
  const handleToolSelect = (toolName: string) => {
    setSelectedTool(toolName)
    setSearchTerm(toolName)
    setFilteredTools([])
    setActiveCategory(null)

    // Focus the search input
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Clear search and selection
  const handleClearSearch = () => {
    setSearchTerm("")
    setSelectedTool(null)
    setFilteredTools([])
    setActiveCategory(null)

    // Focus the search input
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Get the selected tool data
  const getSelectedToolData = () => {
    return toolsData.find((tool) => tool.name === selectedTool)
  }

  // Group tools by classification
  const groupedTools = filteredTools.reduce(
    (acc, tool) => {
      const classification = tool.classification
      if (!acc[classification]) {
        acc[classification] = []
      }
      acc[classification].push(tool)
      return acc
    },
    {} as Record<string, typeof toolsData>,
  )

  // Sort classifications
  const sortedClassifications = Object.keys(groupedTools).sort()

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Inova</span>{" "}
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Tech Arsenal
              </span>
            </motion.h1>
            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our cutting-edge technology stack powering INovaBeing's AI solutions and services.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="mt-6 sm:mt-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search tools, technologies, or categories..."
                  className="pl-10 bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-white"
                    onClick={handleClearSearch}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Clear</span>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tool Description Section */}
      <AnimatePresence>
        {selectedTool && (
          <motion.section
            className="bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50 py-6 sm:py-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <div className="mx-auto max-w-3xl rounded-xl bg-black/20 backdrop-blur-sm p-4 sm:p-6 shadow-lg border border-white/10">
                {getSelectedToolData() && (
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-1">
                      <div className="w-full h-full bg-black/40 rounded-md flex items-center justify-center">
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {getSelectedToolData()?.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{getSelectedToolData()?.name}</h3>
                        <Badge className="bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 border-none">
                          {getSelectedToolData()?.classification}
                        </Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300">{getSelectedToolData()?.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Search Results Section - Modified with wrapping category labels */}
      <AnimatePresence>
        {filteredTools.length > 0 && !selectedTool && (
          <motion.section
            className="flex-1 bg-gradient-to-b from-blue-900/50 to-purple-900/50 py-4 sm:py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-xl bg-black/20 backdrop-blur-sm overflow-hidden border border-white/10">
                  {/* Results Count */}
                  <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-sm font-medium text-white">
                      Found {filteredTools.length} result{filteredTools.length !== 1 ? "s" : ""}
                    </h2>
                  </div>

                  {/* Wrapping Categories */}
                  <div className="border-b border-white/10 p-2">
                    <div className="flex flex-wrap gap-2">
                      {sortedClassifications.map((classification) => (
                        <button
                          key={classification}
                          onClick={() => handleCategorySelect(classification)}
                          className={cn(
                            "px-3 py-2 text-sm font-medium rounded-md text-center transition-colors min-h-[2.5rem] flex items-center justify-center",
                            activeCategory === classification
                              ? "bg-yellow-500 text-black"
                              : "bg-white/10 text-white hover:bg-white/20",
                          )}
                        >
                          <span className="text-center">{classification}</span>
                          <span className="ml-1 text-xs inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-black/20">
                            {groupedTools[classification].length}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Tool List for Selected Category */}
                  <AnimatePresence mode="wait">
                    {activeCategory && (
                      <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="max-h-[50vh] overflow-y-auto"
                      >
                        <ul className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {groupedTools[activeCategory].map((tool) => (
                            <li key={tool.name} className="p-1">
                              <button
                                onClick={() => handleToolSelect(tool.name)}
                                className="w-full text-left px-3 py-2 rounded-md flex items-center justify-between hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors bg-white/5"
                              >
                                <span className="text-white font-medium">{tool.name}</span>
                                <ChevronRight className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Empty State - When no search or selection */}
      {!selectedTool && filteredTools.length === 0 && searchTerm === "" && (
        <section className="flex-1 bg-gradient-to-b from-blue-900/50 to-purple-900/50 py-6 sm:py-8 flex items-center justify-center">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="rounded-xl bg-black/20 backdrop-blur-sm p-8 border border-white/10">
                <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-white mb-2">Discover Our Tech Stack</h2>
                <p className="text-gray-400">
                  Search for technologies like "AWS", "Next.js", or categories like "Database" to explore our tech
                  arsenal.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results State */}
      {!selectedTool && filteredTools.length === 0 && searchTerm !== "" && (
        <section className="flex-1 bg-gradient-to-b from-blue-900/50 to-purple-900/50 py-6 sm:py-8 flex items-center justify-center">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="rounded-xl bg-black/20 backdrop-blur-sm p-8 border border-white/10">
                <X className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-white mb-2">No results found</h2>
                <p className="text-gray-400">
                  We couldn't find any technologies matching "{searchTerm}". Try a different search term.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
