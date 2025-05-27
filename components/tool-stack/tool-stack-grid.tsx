"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ToolCard } from "./tool-card"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Define the tool data structure
interface Tool {
  name: string
  classification: string
  description: string
  logo: string
}

// Group tools by classification
const toolsByCategory: Record<string, Tool[]> = {
  "Cloud Platform": [
    {
      name: "AWS",
      classification: "Cloud Platform",
      description: "Comprehensive cloud computing platform with 200+ services",
      logo: "/images/tools/aws.png",
    },
    {
      name: "GCP",
      classification: "Cloud Platform",
      description: "Google's suite of cloud computing services",
      logo: "/images/tools/gcp.png",
    },
    {
      name: "Azure",
      classification: "Cloud Platform",
      description: "Microsoft's cloud computing service for building, testing, and managing applications",
      logo: "/images/tools/azure.png",
    },
  ],
  "LLM / AI Model": [
    {
      name: "Claude (Anthropic)",
      classification: "LLM / AI Model",
      description: "AI assistant built for safety and helpfulness",
      logo: "/images/tools/claude.png",
    },
    {
      name: "ChatGPT (OpenAI)",
      classification: "LLM / AI Model",
      description: "Advanced language model for natural conversations and content generation",
      logo: "/images/tools/chatgpt.png",
    },
  ],
  "Backend as a Service (BaaS)": [
    {
      name: "Supabase",
      classification: "Backend as a Service (BaaS)",
      description: "Open source Firebase alternative with PostgreSQL",
      logo: "/images/tools/supabase.png",
    },
  ],
  Database: [
    {
      name: "Neon",
      classification: "Serverless Postgres / Database",
      description: "Serverless Postgres with branching capabilities",
      logo: "/images/tools/neon.png",
    },
    {
      name: "DynamoDB",
      classification: "NoSQL Database",
      description: "Fully managed NoSQL database service by AWS",
      logo: "/images/tools/dynamodb.png",
    },
    {
      name: "MongoDB",
      classification: "NoSQL Database",
      description: "Document-oriented NoSQL database",
      logo: "/images/tools/mongodb.png",
    },
    {
      name: "Yugabyte",
      classification: "Distributed SQL Database",
      description: "Open source, high-performance distributed SQL database",
      logo: "/images/tools/yugabyte.png",
    },
  ],
  "AI / Dev Tool": [
    {
      name: "Windsurf",
      classification: "AI / Dev Tool",
      description: "AI-powered development tool for faster coding",
      logo: "/images/tools/windsurf.png",
    },
    {
      name: "Cursor",
      classification: "AI Coding Assistant",
      description: "AI-powered code editor for faster development",
      logo: "/images/tools/cursor.png",
    },
    {
      name: "V0.dev",
      classification: "Frontend UI Builder",
      description: "AI-powered UI component generator",
      logo: "/images/tools/v0.png",
    },
  ],
  "Authentication / Identity": [
    {
      name: "Clerk",
      classification: "Authentication / Identity",
      description: "Complete user management and authentication solution",
      logo: "/images/tools/clerk.png",
    },
    {
      name: "Auth0",
      classification: "Authentication / Identity",
      description: "Flexible and secure authentication platform",
      logo: "/images/tools/auth0.png",
    },
    {
      name: "Okta",
      classification: "Identity Management",
      description: "Enterprise-grade identity management service",
      logo: "/images/tools/okta.png",
    },
  ],
  "Web Framework": [
    {
      name: "FastAPI",
      classification: "Backend Web Framework (Python)",
      description: "Modern, fast web framework for building APIs with Python",
      logo: "/images/tools/fastapi.png",
    },
    {
      name: "Next.js",
      classification: "React Framework / Full-stack",
      description: "React framework for production-grade applications",
      logo: "/images/tools/nextjs.png",
    },
  ],
  "UI / Frontend": [
    {
      name: "ShadCN",
      classification: "UI Component Library (Tailwind-based)",
      description: "Beautifully designed components built with Radix UI and Tailwind CSS",
      logo: "/images/tools/shadcn.png",
    },
  ],
  "Workflow Automation": [
    {
      name: "n8n",
      classification: "Workflow Automation",
      description: "Workflow automation tool with fair-code license",
      logo: "/images/tools/n8n.png",
    },
    {
      name: "Make",
      classification: "Workflow Automation",
      description: "Visual platform to design, build, and automate anything",
      logo: "/images/tools/make.png",
    },
  ],
  "Hosting / Deployment": [
    {
      name: "Vercel",
      classification: "Hosting / Deployment Platform",
      description: "Platform for frontend frameworks and static sites",
      logo: "/images/tools/vercel.png",
    },
  ],
  DevOps: [
    {
      name: "FastapiLabs",
      classification: "DevOps / FastAPI Infra Tool",
      description: "Infrastructure tools for FastAPI applications",
      logo: "/images/tools/fastapilabs.png",
    },
  ],
  Data: [
    {
      name: "DBT",
      classification: "Data Transformation / Analytics Engineering",
      description: "Data transformation tool that enables analytics engineers to transform data",
      logo: "/images/tools/dbt.png",
    },
    {
      name: "Airbyte",
      classification: "Data Integration / ETL",
      description: "Open-source data integration platform",
      logo: "/images/tools/airbyte.png",
    },
  ],
  "Programming Language": [
    {
      name: "Python",
      classification: "Programming Language",
      description: "High-level programming language known for readability and versatility",
      logo: "/images/tools/python.png",
    },
  ],
  "Database Infrastructure": [
    {
      name: "Upstash",
      classification: "Redis / Kafka for Serverless",
      description: "Serverless Redis and Kafka with REST API",
      logo: "/images/tools/upstash.png",
    },
  ],
  Notification: [
    {
      name: "Novu",
      classification: "Notification Infrastructure",
      description: "Open-source notification infrastructure for developers",
      logo: "/images/tools/novu.png",
    },
  ],
  "Lead Generation": [
    {
      name: "Findymail",
      classification: "Email Finder / Lead Gen",
      description: "Email finder tool for lead generation",
      logo: "/images/tools/findymail.png",
    },
    {
      name: "Prospeo",
      classification: "Prospecting / Lead Gen",
      description: "Prospecting and lead generation platform",
      logo: "/images/tools/prospeo.png",
    },
  ],
  "Email Verification": [
    {
      name: "Bounceban",
      classification: "Email Verification",
      description: "Email verification service to reduce bounce rates",
      logo: "/images/tools/bounceban.png",
    },
    {
      name: "Zerobounce",
      classification: "Email Verification",
      description: "Email validation and verification service",
      logo: "/images/tools/zerobounce.png",
    },
  ],
  "Project Management": [
    {
      name: "ClickUp",
      classification: "Project Management",
      description: "All-in-one productivity platform",
      logo: "/images/tools/clickup.png",
    },
  ],
  "API Development": [
    {
      name: "Postman",
      classification: "API Testing / Development",
      description: "API platform for building and using APIs",
      logo: "/images/tools/postman.png",
    },
  ],
  Testing: [
    {
      name: "Playwright",
      classification: "End-to-End Testing Tool",
      description: "Framework for web testing and automation",
      logo: "/images/tools/playwright.png",
    },
  ],
  Communication: [
    {
      name: "Slack",
      classification: "Team Communication",
      description: "Business communication platform for teams",
      logo: "/images/tools/slack.png",
    },
  ],
  "Version Control": [
    {
      name: "GitHub",
      classification: "Code Repository / Version Control",
      description: "Platform for version control and collaboration",
      logo: "/images/tools/github.png",
    },
  ],
  Documentation: [
    {
      name: "Notion",
      classification: "Documentation / Workspace",
      description: "All-in-one workspace for notes, tasks, wikis, and databases",
      logo: "/images/tools/notion.png",
    },
  ],
  "Collaborative Tools": [
    {
      name: "Airtable",
      classification: "Collaborative Database / Spreadsheet",
      description: "Part spreadsheet, part database, entirely flexible",
      logo: "/images/tools/airtable.png",
    },
  ],
  Search: [
    {
      name: "Algolia",
      classification: "Search-as-a-Service",
      description: "Hosted search API for websites and mobile apps",
      logo: "/images/tools/algolia.png",
    },
  ],
}

// Create a mapping for category display order and grouping
const categoryGroups = {
  Cloud: ["Cloud Platform"],
  AI: ["LLM / AI Model", "AI / Dev Tool"],
  Backend: ["Backend as a Service (BaaS)", "Web Framework", "Programming Language"],
  Frontend: ["UI / Frontend", "Frontend UI Builder"],
  Database: ["Database", "Database Infrastructure", "Serverless Postgres / Database"],
  DevOps: ["Hosting / Deployment", "DevOps", "Version Control", "Testing"],
  Data: ["Data", "Search"],
  Tools: [
    "Workflow Automation",
    "Authentication / Identity",
    "Notification",
    "Lead Generation",
    "Email Verification",
    "Project Management",
    "API Development",
    "Communication",
    "Documentation",
    "Collaborative Tools",
  ],
}

export function ToolStackGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTools, setFilteredTools] = useState<Tool[]>([])
  const [allTools, setAllTools] = useState<Tool[]>([])

  // Flatten all tools into a single array on component mount
  useEffect(() => {
    const tools: Tool[] = []
    Object.values(toolsByCategory).forEach((categoryTools) => {
      tools.push(...categoryTools)
    })
    setAllTools(tools)
    setFilteredTools(tools)
  }, [])

  // Filter tools based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTools(allTools)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = allTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.classification.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query),
    )
    setFilteredTools(filtered)
  }, [searchQuery, allTools])

  // Get unique categories from filtered tools
  const getUniqueCategories = () => {
    const categories = new Set<string>()
    filteredTools.forEach((tool) => {
      Object.entries(categoryGroups).forEach(([group, classifications]) => {
        if (classifications.includes(tool.classification)) {
          categories.add(group)
        }
      })
    })
    return Array.from(categories)
  }

  // Get tools for a specific category group
  const getToolsForCategoryGroup = (group: string) => {
    const classifications = categoryGroups[group as keyof typeof categoryGroups] || []
    return filteredTools.filter((tool) => classifications.includes(tool.classification))
  }

  const uniqueCategories = getUniqueCategories()

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center w-full max-w-md mx-auto mb-12">
          <Search className="absolute left-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tools, categories..."
            className="pl-10 bg-background border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {uniqueCategories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <h3 className="mb-4 text-2xl font-semibold text-center">No tools found</h3>
            <p className="text-center text-muted-foreground">
              Try adjusting your search query to find what you're looking for.
            </p>
          </div>
        )}

        {uniqueCategories.map((category, index) => {
          const toolsInCategory = getToolsForCategoryGroup(category)
          if (toolsInCategory.length === 0) return null

          return (
            <div key={category} id={category.toLowerCase()} className="mb-16 scroll-mt-20">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold">{category}</h2>
                <div className="flex-grow h-px ml-6 bg-gradient-to-r from-gray-700 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {toolsInCategory.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <ToolCard tool={tool} />
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
