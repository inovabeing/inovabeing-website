"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Search, Tag, User, TrendingUp, Zap, Brain, Cpu, Database, BarChart3, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { FeaturedPost } from "@/components/blog/featured-post"
import { TrendingTopics } from "@/components/blog/trending-topics"
import { ContentRecommendations } from "@/components/blog/content-recommendations"
import { InsightsPulse } from "@/components/blog/insights-pulse"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [visiblePosts, setVisiblePosts] = useState(6)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const headerRef = useRef<HTMLDivElement>(null)

  // Simulated blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Business Process Automation in 2023",
      excerpt:
        "Discover how artificial intelligence is transforming business operations through advanced automation, reducing costs and improving efficiency.",
      category: "AI Innovation",
      author: "Sarah Johnson",
      authorImage: "/images/blog/authors/sarah-johnson.jpg",
      date: "October 15, 2023",
      readTime: "7 min read",
      image: "/images/blog/ai-automation.jpg",
      trending: true,
      featured: true,
      tags: ["AI", "Automation", "Business"],
      insights: {
        implementations: 124,
        efficiency: 67,
        costReduction: 42,
      },
    },
    {
      id: 2,
      title: "Building Intelligent Data Pipelines: A Step-by-Step Guide",
      excerpt:
        "Learn how to design and implement intelligent data pipelines that transform raw data into actionable business insights.",
      category: "Data Engineering",
      author: "Michael Chen",
      authorImage: "/images/blog/authors/michael-chen.jpg",
      date: "October 8, 2023",
      readTime: "10 min read",
      image: "/images/blog/data-pipelines.jpg",
      trending: false,
      featured: false,
      tags: ["Data", "AI", "Engineering"],
      insights: {
        implementations: 89,
        efficiency: 73,
        costReduction: 38,
      },
    },
    {
      id: 3,
      title: "The Future of Customer Experience: AI-Powered Personalization",
      excerpt:
        "Explore how AI is enabling unprecedented levels of personalization in customer experiences across industries.",
      category: "Customer Experience",
      author: "Emily Rodriguez",
      authorImage: "/images/blog/authors/emily-rodriguez.jpg",
      date: "September 29, 2023",
      readTime: "6 min read",
      image: "/images/blog/customer-experience.jpg",
      trending: true,
      featured: false,
      tags: ["AI", "Customer Experience", "Personalization"],
      insights: {
        implementations: 156,
        efficiency: 82,
        costReduction: 29,
      },
    },
    {
      id: 4,
      title: "Implementing Machine Learning Models in Production Environments",
      excerpt:
        "A comprehensive guide to deploying and maintaining machine learning models in production with best practices and common pitfalls.",
      category: "Machine Learning",
      author: "David Park",
      authorImage: "/images/blog/authors/david-park.jpg",
      date: "September 22, 2023",
      readTime: "12 min read",
      image: "/images/blog/ml-production.jpg",
      trending: false,
      featured: false,
      tags: ["Machine Learning", "DevOps", "Production"],
      insights: {
        implementations: 67,
        efficiency: 58,
        costReduction: 31,
      },
    },
    {
      id: 5,
      title: "Ethical Considerations in AI Development and Deployment",
      excerpt:
        "An exploration of the ethical challenges and considerations when developing and implementing AI solutions in business contexts.",
      category: "AI Ethics",
      author: "Priya Sharma",
      authorImage: "/images/blog/authors/priya-sharma.jpg",
      date: "September 15, 2023",
      readTime: "9 min read",
      image: "/images/blog/ai-ethics.jpg",
      trending: false,
      featured: false,
      tags: ["AI", "Ethics", "Business"],
      insights: {
        implementations: 42,
        efficiency: 0,
        costReduction: 0,
      },
    },
    {
      id: 6,
      title: "Transforming Healthcare with AI: Case Studies and Insights",
      excerpt:
        "Real-world examples of how AI is revolutionizing healthcare delivery, patient care, and operational efficiency.",
      category: "Healthcare",
      author: "James Wilson",
      authorImage: "/images/blog/authors/james-wilson.jpg",
      date: "September 8, 2023",
      readTime: "8 min read",
      image: "/images/blog/healthcare-ai.jpg",
      trending: true,
      featured: false,
      tags: ["AI", "Healthcare", "Case Study"],
      insights: {
        implementations: 112,
        efficiency: 76,
        costReduction: 53,
      },
    },
    {
      id: 7,
      title: "The Rise of Conversational AI: Beyond Simple Chatbots",
      excerpt:
        "How advanced conversational AI is transforming customer service, sales, and internal operations across industries.",
      category: "AI Innovation",
      author: "Sarah Johnson",
      authorImage: "/images/blog/authors/sarah-johnson.jpg",
      date: "August 30, 2023",
      readTime: "7 min read",
      image: "/images/blog/conversational-ai.jpg",
      trending: false,
      featured: false,
      tags: ["AI", "Chatbots", "Customer Service"],
      insights: {
        implementations: 134,
        efficiency: 71,
        costReduction: 44,
      },
    },
    {
      id: 8,
      title: "Predictive Analytics: Forecasting Business Trends with AI",
      excerpt:
        "How businesses are leveraging predictive analytics powered by AI to anticipate market trends and make data-driven decisions.",
      category: "Data Science",
      author: "Michael Chen",
      authorImage: "/images/blog/authors/michael-chen.jpg",
      date: "August 23, 2023",
      readTime: "9 min read",
      image: "/images/blog/predictive-analytics.jpg",
      trending: false,
      featured: false,
      tags: ["AI", "Analytics", "Business Intelligence"],
      insights: {
        implementations: 98,
        efficiency: 64,
        costReduction: 37,
      },
    },
  ]

  const categories = [
    { id: "all", name: "All Topics", icon: <Tag className="h-4 w-4" /> },
    { id: "AI Innovation", name: "AI Innovation", icon: <Brain className="h-4 w-4" /> },
    { id: "Data Engineering", name: "Data Engineering", icon: <Database className="h-4 w-4" /> },
    { id: "Machine Learning", name: "Machine Learning", icon: <Cpu className="h-4 w-4" /> },
    { id: "Data Science", name: "Data Science", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "Customer Experience", name: "Customer Experience", icon: <User className="h-4 w-4" /> },
    { id: "AI Ethics", name: "AI Ethics", icon: <Filter className="h-4 w-4" /> },
    { id: "Healthcare", name: "Healthcare", icon: <Zap className="h-4 w-4" /> },
  ]

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === "all" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const trendingPosts = blogPosts.filter((post) => post.trending).slice(0, 3)

  // Load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  // Get unique tags from all posts
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Simulate AI-generated content recommendations based on viewed content
  const generateRecommendations = () => {
    // In a real implementation, this would use actual user behavior data
    return blogPosts.sort(() => 0.5 - Math.random()).slice(0, 3)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Dynamic Header - Modified to scroll with content */}
      <div
        ref={headerRef}
        className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16 md:py-24"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300"
            >
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-500"></span>
              INovaBeing Insights
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
            >
              AI Innovation{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pulse
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-300"
            >
              Cutting-edge insights on AI, automation, and digital transformation
            </motion.p>

            {/* Interactive Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mt-8 mx-auto max-w-2xl"
            >
              <div className={`relative transition-all duration-300 ${isSearchFocused ? "scale-105" : "scale-100"}`}>
                <Input
                  type="text"
                  placeholder="Search for AI insights, trends, and case studies..."
                  className="h-12 pl-12 pr-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:border-pink-500/50 focus:bg-white/15 focus:outline-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Dynamic search suggestions would appear here */}
              {isSearchFocused && searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-2 w-full rounded-lg border border-gray-700 bg-gray-900 p-2 shadow-lg"
                >
                  <p className="px-2 py-1 text-sm text-gray-400">Suggested topics:</p>
                  <div className="flex flex-wrap gap-2 p-2">
                    {allTags
                      .filter((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                      .slice(0, 5)
                      .map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-purple-500/20"
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className="flex items-center gap-1.5 whitespace-nowrap"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {featuredPost && activeCategory === "all" && !searchQuery && (
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold">Featured Article</h2>
                <FeaturedPost post={featuredPost} />
              </div>
            )}

            {/* AI-Powered Insights Pulse */}
            {activeCategory === "all" && !searchQuery && (
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-purple-500" />
                  AI Insights Pulse
                </h2>
                <InsightsPulse posts={blogPosts} />
              </div>
            )}

            {/* Blog Posts Grid */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : activeCategory !== "all"
                    ? `${activeCategory} Articles`
                    : "Latest Articles"}
              </h2>

              {filteredPosts.length === 0 ? (
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-8 text-center">
                  <h3 className="text-xl font-bold">No articles found</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {filteredPosts.slice(0, visiblePosts).map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>

                  {visiblePosts < filteredPosts.length && (
                    <div className="mt-8 text-center">
                      <Button variant="outline" size="lg" onClick={loadMorePosts} className="px-8">
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Trending Topics */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="mb-4 text-xl font-bold flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-purple-500" />
                Trending Topics
              </h3>
              <TrendingTopics posts={trendingPosts} />
            </div>

            {/* AI-Powered Content Recommendations */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="mb-4 text-xl font-bold flex items-center">
                <Brain className="mr-2 h-5 w-5 text-purple-500" />
                AI-Recommended For You
              </h3>
              <ContentRecommendations recommendations={generateRecommendations()} />
            </div>

            {/* Popular Tags */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="mb-4 text-xl font-bold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-purple-500/20"
                    onClick={() => {
                      setSearchQuery(tag)
                      setActiveCategory("all")
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="rounded-lg bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-6 text-white">
              <h3 className="mb-2 text-xl font-bold">Stay Ahead of the Curve</h3>
              <p className="mb-4 text-gray-300">
                Get the latest AI insights and innovation trends delivered to your inbox.
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
