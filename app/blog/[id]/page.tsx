"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Simulated blog posts data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Business Process Automation in 2023",
    content: `
      <p class="lead">Artificial intelligence is transforming how businesses operate, creating unprecedented opportunities for automation, efficiency, and growth.</p>
      
      <h2>The Evolution of Business Process Automation</h2>
      <p>Business process automation has evolved significantly over the past decade. What began as simple rule-based systems has transformed into intelligent, adaptive solutions powered by sophisticated AI algorithms. This evolution represents a fundamental shift in how organizations approach operational efficiency.</p>
      
      <p>Traditional automation focused primarily on repetitive, rule-based tasks with predictable outcomes. While effective for certain applications, these systems lacked the flexibility to handle exceptions or adapt to changing conditions. Modern AI-driven automation, by contrast, can:</p>
      
      <ul>
        <li>Learn from historical data and past decisions</li>
        <li>Adapt to changing business conditions in real-time</li>
        <li>Handle complex, multi-step processes with numerous variables</li>
        <li>Make intelligent decisions based on incomplete information</li>
        <li>Continuously improve performance through machine learning</li>
      </ul>
      
      <h2>Key AI Technologies Driving Automation</h2>
      <p>Several key technologies are at the forefront of this automation revolution:</p>
      
      <h3>Machine Learning</h3>
      <p>Machine learning algorithms enable systems to identify patterns in data and make predictions or decisions without explicit programming. In business process automation, ML can analyze historical process data to identify bottlenecks, predict outcomes, and recommend optimizations.</p>
      
      <h3>Natural Language Processing</h3>
      <p>NLP allows computers to understand, interpret, and generate human language. This technology powers intelligent document processing, automated customer service, and sophisticated content analysis, enabling automation of previously manual, language-intensive tasks.</p>
      
      <h3>Computer Vision</h3>
      <p>Computer vision systems can interpret and act upon visual information from the world. In automation contexts, this enables processing of visual documents, quality control in manufacturing, and monitoring of physical processes.</p>
      
      <h3>Robotic Process Automation (RPA)</h3>
      <p>When combined with AI, RPA moves beyond simple task automation to intelligent process automation. AI-enhanced RPA can handle complex workflows, make decisions based on multiple inputs, and adapt to changing conditions.</p>
      
      <h2>Real-World Applications Transforming Industries</h2>
      <p>Across industries, organizations are implementing AI-powered automation to transform their operations:</p>
      
      <h3>Financial Services</h3>
      <p>Banks and financial institutions are using AI to automate fraud detection, credit scoring, and regulatory compliance. These systems can analyze vast amounts of transaction data in real-time, identifying suspicious patterns and reducing false positives compared to rule-based approaches.</p>
      
      <h3>Healthcare</h3>
      <p>Healthcare providers are implementing AI for administrative tasks like appointment scheduling, billing, and claims processing. More advanced applications include automated analysis of medical images and predictive analytics for patient outcomes.</p>
      
      <h3>Manufacturing</h3>
      <p>Smart factories are leveraging AI for predictive maintenance, quality control, and supply chain optimization. These systems can predict equipment failures before they occur, identify defects invisible to the human eye, and dynamically adjust production schedules based on multiple variables.</p>
      
      <h3>Customer Service</h3>
      <p>AI-powered chatbots and virtual assistants are handling increasingly complex customer interactions. Modern systems can understand context, remember conversation history, and seamlessly escalate to human agents when necessary.</p>
      
      <h2>Implementation Challenges and Best Practices</h2>
      <p>While the benefits of AI-powered automation are compelling, implementation comes with challenges:</p>
      
      <h3>Data Quality and Availability</h3>
      <p>AI systems require high-quality, relevant data for training and operation. Organizations must ensure they have sufficient data infrastructure and governance practices in place.</p>
      
      <h3>Integration with Legacy Systems</h3>
      <p>Many businesses operate with complex ecosystems of legacy systems. Successful AI implementation requires thoughtful integration strategies that bridge new capabilities with existing infrastructure.</p>
      
      <h3>Change Management</h3>
      <p>Automation changes how people work. Organizations must invest in change management, training, and clear communication to ensure successful adoption.</p>
      
      <h3>Ethical Considerations</h3>
      <p>AI systems can perpetuate or amplify biases present in training data. Businesses must implement robust testing and monitoring to ensure fair, ethical outcomes.</p>
      
      <h2>The Future of AI-Powered Automation</h2>
      <p>Looking ahead, several trends will shape the evolution of business process automation:</p>
      
      <h3>Hyperautomation</h3>
      <p>Organizations will increasingly combine multiple AI technologies to automate end-to-end processes, creating intelligent workflows that span departments and systems.</p>
      
      <h3>Human-AI Collaboration</h3>
      <p>Rather than replacing humans, the most effective automation solutions will enhance human capabilities, handling routine tasks while enabling people to focus on creative, strategic work.</p>
      
      <h3>Democratization of AI</h3>
      <p>Low-code and no-code platforms will make AI capabilities accessible to business users without specialized technical expertise, accelerating adoption across organizations.</p>
      
      <h2>Conclusion</h2>
      <p>AI-powered automation represents a fundamental shift in how businesses operate. By combining the efficiency of automation with the adaptability and intelligence of AI, organizations can transform their operations, improve customer experiences, and create new sources of value. Those who successfully navigate the implementation challenges will gain significant competitive advantages in an increasingly digital business landscape.</p>
    `,
    excerpt:
      "Discover how artificial intelligence is transforming business operations through advanced automation, reducing costs and improving efficiency.",
    category: "AI Innovation",
    author: "Sarah Johnson",
    authorImage: "/images/blog/authors/sarah-johnson.jpg",
    authorBio:
      "Sarah Johnson is the Director of AI Innovation at INovaBeing with over 15 years of experience in artificial intelligence and business transformation.",
    date: "October 15, 2023",
    readTime: "7 min read",
    image: "/images/blog/ai-automation.jpg",
    tags: ["AI", "Automation", "Business"],
    insights: {
      implementations: 124,
      efficiency: 67,
      costReduction: 42,
    },
    relatedPosts: [2, 3, 7],
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
    tags: ["AI", "Customer Experience", "Personalization"],
    insights: {
      implementations: 156,
      efficiency: 82,
      costReduction: 29,
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
    tags: ["AI", "Chatbots", "Customer Service"],
    insights: {
      implementations: 134,
      efficiency: 71,
      costReduction: 44,
    },
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const postId = Number(params.id)

  const [post, setPost] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [copied, setCopied] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showAIInsights, setShowAIInsights] = useState(false)

  // Simulate fetching post data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPost = () => {
      setIsLoading(true)

      setTimeout(() => {
        const foundPost = blogPosts.find((p) => p.id === postId)

        if (foundPost) {
          setPost(foundPost)

          // Get related posts
          if (foundPost.relatedPosts) {
            const related = foundPost.relatedPosts
              .map((id: number) => blogPosts.find((p) => p.id === id))
              .filter(Boolean)
            setRelatedPosts(related)
          }
        } else {
          // Post not found, redirect to blog listing
          router.push("/blog")
        }

        setIsLoading(false)
      }, 500)
    }

    fetchPost()
  }, [postId, router])

  // Update reading progress
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const readingProgress = scrollTop / docHeight
      setReadingProgress(readingProgress * 100)
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  // Handle share functionality
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(
        post.title,
      )}`,
      "_blank",
    )
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      "_blank",
    )
  }

  if (isLoading || !post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
        style={{ width: `${readingProgress}%` }}
      ></div>

      {/* Hero Section - Modified to scroll with content */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 pb-12 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Link href="/blog" className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>

              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">{post.category}</Badge>

              <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="ml-2">{post.author}</span>
                </div>

                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-4 py-12 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Sidebar - Social Sharing & Table of Contents */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                {/* Social Sharing */}
                <div className="mb-8 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="mb-4 text-lg font-bold">Share this article</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={shareOnTwitter}>
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>

                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={shareOnFacebook}>
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>

                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={shareOnLinkedIn}>
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>

                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={copyToClipboard}>
                      {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="mb-8 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">AI Insights</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setShowAIInsights(!showAIInsights)}
                    >
                      <Brain className="h-5 w-5 text-purple-500" />
                      <span className="sr-only">Toggle AI insights</span>
                    </Button>
                  </div>

                  {showAIInsights && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Implementation Success:</span>
                          <span className="font-medium">{post.insights.implementations} companies</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-full rounded-full bg-green-500"
                            style={{ width: `${Math.min(post.insights.implementations / 2, 100)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Efficiency Improvement:</span>
                          <span className="font-medium">{post.insights.efficiency}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${post.insights.efficiency}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Cost Reduction:</span>
                          <span className="font-medium">{post.insights.costReduction}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-full rounded-full bg-purple-500"
                            style={{ width: `${post.insights.costReduction}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="pt-2 text-xs text-gray-500 dark:text-gray-400">
                        Data aggregated from client implementations and case studies
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Tags */}
                <div className="mb-8 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="mb-4 text-lg font-bold">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-purple-500/20"
                        onClick={() => router.push(`/blog?tag=${tag}`)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="mb-4 text-lg font-bold">About the Author</h3>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">{post.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.authorBio || "Content Writer at INovaBeing"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-purple-600 dark:prose-a:text-purple-400">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Engagement Section */}
              <div className="mt-12 flex items-center justify-between border-t border-b border-gray-200 py-4 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Comment</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    <span>Save</span>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to top</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost: any) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                  >
                    <Link href={`/blog/${relatedPost.id}`} className="block">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4">
                        <Badge className="mb-2 bg-purple-600 hover:bg-purple-700">{relatedPost.category}</Badge>
                        <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                          {relatedPost.title}
                        </h3>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
