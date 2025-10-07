"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, GraduationCap, Zap } from "lucide-react"
import { InternApplicationForm } from "./InternApplicationForm"

interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  thingsYoullDo: string[]
  requirements: string[]
  benefits: string[]
  isActive: boolean
  preferredSkills?: string[]
}

const jobOpenings: JobOpening[] = [
  {
    id: "ai-intern-2024",
    title: "Hiring Interns for AI Project",
    department: "AI Development",
    location: "Remote / Hybrid",
    type: "Internship",
    experience: "Entry Level",
    description: "We’re looking for driven interns to join our AI development team at Inovabeing Technologies Pvt Ltd. This 3-month internship offers hands-on experience working directly with the founder on real-world AI use cases that solve real business problems. High performers may be considered for full-time roles.",
    thingsYoullDo: [
      "Contribute to AI-powered projects across automation, data processing, and tool integration",
      "Collaborate with experienced developers and data scientists",
      "Build, test, and deploy AI-driven workflows using modern tech stacks"
    ],
    requirements: [
      "Pursuing or recently completed a degree in Computer Science, AI/ML, or related fields",
      "Basic knowledge of Python",
      "Strong problem-solving mindset",
      "Good communication and collaboration skillsExcellent communication and teamwork abilities",
      "Curiosity and willingness to learn fast",
    ],
    benefits: [
      "Real-world AI project experience",
      "Direct mentorship from the founder and AI leads",
      "Certificate of completion",
      "Access to latest AI tools & platforms",
      "Opportunity for full-time placement post-internship"
    ],
    isActive: false,
  },
  {
    id: "campaign-manager",
    title: "Campaign Manager / Performance Marketer",
    department: "Marketing",
    location: "Hybrid (Hyderabad preferred)",
    type: "Full-Time",
    experience: "3–4 years",
    description:
      "We’re hiring a Campaign Manager / Performance Marketer to plan, execute, and optimize ROI-driven campaigns across Google, Meta, LinkedIn, and other platforms. You’ll manage campaigns for INovaBeing’s brand, products, and clients, delivering measurable results and driving long-term growth.",
    thingsYoullDo: [
      "Plan and execute ROI-driven ad campaigns across Google, Meta, and LinkedIn",
      "Develop full-funnel strategies covering awareness, engagement, and conversion",
      "Manage budgets effectively, ensuring CAC control and ROI of 5× or higher",
      "Track and optimize key metrics including ROAS, CPL, CTR, and conversions",
      "Collaborate with internal teams and freelancers to deliver creative ad assets",
      "Prepare regular reports with insights, recommendations, and ROI analysis"
    ],
    requirements: [
      "3–4 years of proven experience in performance marketing or campaign management",
      "Strong track record of managing high-budget campaigns with measurable ROI",
      "Deep understanding of CAC, ROAS, CPL, CTR, and conversion rate optimization",
      "Ability to manage multiple campaigns and client accounts in parallel",
      "Analytical mindset with strong reporting, problem-solving, and communication skills"
    ],
    benefits: [
      "CTC: Market Standard",
      "Performance Bonus: Annual bonus up to 10% based on campaign ROI and KPIs",
      // no active flag inside array
    ],
    isActive: false,
  },
  
  {
   id: "ai-intern-2025",
    title: "Product Engineer – AI Web Stack (Internship)",
   department: "AI Development | 3 Months | Work directly with the founder | 1 position only | Hyderabad",
    location: "Hybrid",
    type: "Internship",
    experience: "Entry Level",
    description: "Are you ready to design, build, and launch AI-powered web products at startup speed? Join Inovabeing as a Product Engineer – AI Web Stack (Internship) and take ownership from day one.",
    thingsYoullDo: [
      "Build and deploy complete web applications—user login, dashboards, payment integration, full-page design, and more.",
      "Use modern frameworks (React, Next.js) and AI-powered dev tools (v0.dev, Replit, Copilot, etc.) to deliver products fast.",
      "Collaborate with a product-focused, fast-moving team on real launches.",
      "Ship live projects in record time and see your work in the hands of users.",
    ],
    requirements: [
      "Solid skills in React.js, JavaScript, and web fundamentals.",
      "Experience with frameworks like Next.js or similar.",
      "Ability to use and adapt to AI dev tools (v0.dev, Replit, Copilot, etc.).",
      "Comfort with building/integrating user authentication, dashboards, payment gateways, and full-stack features.",
      "Your own laptop and a stable internet connection.",
      "Drive to build, learn, and deploy—if you can launch a live website in 48 hours, you’ll fit right in",
      "Bonus: Already tinkering with AI for coding, UI/UX, or automation",
    ],
    benefits: [
      "End-to-end product building experience",
      "Direct mentorship from the founder",
      "Flexible 5- hours freedom",
      "Internship certificate",
      "Access to latest AI tools and platforms",
      "Priority for a full-time offer",
      "Monthly stipend: ₹10,000–₹15,000 (based on experience/performance)",
    ],
    isActive: false,
  },
  {
    id: "ai-software-engineering-intern-2025",
    title: "AI & Software Engineering Intern",
    department: "AI & Software Engineering | Inovabeing Technologies Pvt Ltd | Hyderabad (Hybrid)",
    location: "Hyderabad (Hybrid)",
    type: "Internship",
    experience: "Graduate Level (Entry)",
    description:
      "Join Inovabeing Technologies Pvt Ltd as an AI & Software Engineering Intern and gain hands-on experience working on real-world AI automation projects. Over 2 months, you’ll explore prompt engineering, AI model integration, and software workflows that bring automation to life.",
    thingsYoullDo: [
      "Work on real-world mini projects combining coding and AI model integration.",
      "Experiment with prompt engineering and explore outputs from multiple AI models.",
      "Develop small-scale automation workflows and API integrations.",
      "Participate in a 24-hour coding assignment (Mini Chatbot or API Integration) to showcase your approach.",
      "Collaborate with engineers and mentors building AI-first products.",
    ],
    requirements: [
      "Must have completed graduation (no current students).",
      "Preferably with prior internship or project experience.",
      "Strong coding skills (Python preferred).",
      "Eagerness to experiment with AI models and prompt design.",
      "Basic familiarity with APIs, databases, and web workflows.",
      "Curiosity for AI/LLMs and willingness to learn hands-on.",
      "Ability to work in Hybrid mode from Hyderabad with your own device.",
    ],
    benefits: [
      "Hands-on exposure to AI model integration and prompt engineering.",
      "Practical experience with automation workflows and AI use cases.",
      "Mentorship from engineers building AI-first systems.",
      "Opportunity to work directly on startup-grade projects.",
      "Chance to convert into a longer-term or full-time role based on performance.",
      "Competitive stipend (discussed during selection).",
      "Certificate of completion after successful internship.",
    ],
    isActive: true,
  },
  {
    id: "db-engineer-sql-nosql-2025",
  title: "Database Engineer (SQL/NoSQL)",
    department: "Data Engineering | 2 Years Experience | Hyderabad",
    location: "Hybrid",
    type: "Full-time",
    experience: "2+ Years",
    description: "Own database design, performance, and reliability across SQL and NoSQL systems. Partner with backend teams to model data, build efficient queries, and support production deployments and migrations with CI/CD discipline.",
    thingsYoullDo: [
      "Design and maintain relational schemas, indexes, and constraints for PostgreSQL/MySQL.",
      "Optimize complex SQL queries, analyze execution plans, and resolve performance bottlenecks through indexing, partitioning, and schema refactoring.",
      "Manage MongoDB collections, document models, aggregations, and plan for sharding and schema versioning.",
      "Implement backup/restore and disaster-recovery routines, validate RPO/RTO with drills, and monitor database health and capacity.",
      "Enforce RBAC, least-privilege access, secret management, and auditing for security and compliance.",
      "Collaborate with engineers to translate use cases into normalized/denormalized data models.",
      "Support versioned migrations with safe rollout/rollback strategies and CI/CD runbooks."
    ],
    requirements: [
      "2 years’ hands-on experience with PostgreSQL or MySQL (schema design, indexing, query tuning).",
      "Working knowledge of MongoDB (document modeling, aggregation pipelines).",
      "Strong SQL skills and understanding of isolation levels, locking, and ACID properties.",
      "Experience operating databases in containerized/cloud environments and integrating with CI/CD pipelines.",
      "Familiarity with backup/restore tooling, migration frameworks, and basic scripting (Bash/Python)."
    ],
    preferredSkills: [
      "Replication/HA/failover setups (Postgres streaming replication, MySQL replicas, MongoDB replica sets).",
      "Partitioning, connection pool tuning, and caching strategies.",
      "Experience with observability stacks (Prometheus, Grafana, ELK).",
      "Exposure to managed cloud DB services (GCP/AWS/Azure).",
      "Understanding of data governance, PII handling, and auditing best practices."
    ],
    benefits: [
      "Competitive salary with annual performance bonus.",
      "Opportunity to shape data foundations for AI-driven products.",
      "Career growth pathway into Data Platform Engineer / DBA Lead.",
      "Work with a fast-moving product and engineering team."
    ],
    isActive: false,
  },
  {
    id: "software-engineer-fullstack-2025",
  title: "Software Engineer (Full-Stack, Code & Deploy)",
    department: "Engineering | 2–3 Years Experience | Hyderabad",
    location: "Hybrid",
    type: "Full-time",
    experience: "2–3 Years",
  description: "Own end-to-end development: design and build backend services, ship clean UIs, and operate reliable deployments with containers and CI/CD on cloud (GCP/AWS/Azure). Collaborate across product, design, and AI teams to deliver features in tight, well-documented sprints.",
    thingsYoullDo: [
      "Design, build, and maintain backend services in Python or Java with clean, modular, and well-tested code.",
      "Develop user-facing features with React/Angular using TypeScript/JavaScript, and implement supporting services in Node.js where needed.",
      "Design and manage schemas, queries, migrations, and performance tuning for PostgreSQL/MySQL.",
      "Apply NoSQL patterns (MongoDB) when appropriate for document-based data needs.",
      "Containerize applications with Docker and deploy to Kubernetes or equivalent platforms.",
      "Operate workloads on GCP/AWS/Azure with cost-aware provisioning, IAM, and networking best practices.",
      "Set up and maintain CI/CD pipelines with GitHub Actions, Jenkins, or GitLab CI.",
      "Monitor release health, manage rollbacks, and participate in on-call/maintenance rotations.",
      "Translate product requirements into technical tasks, write unit/integration tests, and maintain clear documentation.",
      "Collaborate in 2-week sprints, conduct code reviews, and ship features to production quickly."
    ],
    requirements: [
      "2–3 years’ experience building production software with Python or Java (solid OOP, data structures, and algorithms).",
      "Frontend proficiency with React or Angular; working knowledge of Node.js.",
      "Proficiency with Docker and basic Kubernetes concepts (pods, deployments, services, config/secrets).",
      "Experience with CI/CD pipelines (GitHub Actions, GitLab, or Jenkins).",
      "SQL fundamentals with PostgreSQL/MySQL and exposure to MongoDB.",
      "Experience with at least one cloud provider (GCP/AWS/Azure).",
      "Strong debugging skills, Git proficiency, and good documentation and communication habits."
    ],
    preferredSkills: [
      "Experience with Helm or managed Kubernetes services (GKE/EKS/AKS).",
      "Observability tools such as Prometheus, Grafana, or ELK stack.",
      "Security best practices (image scanning, secret management, least-privilege IAM).",
      "Experience with message queues, caching, or pub-sub systems."
    ],
    benefits: [
      "Competitive salary with annual performance bonus.",
      "Steep growth path to Senior Engineer / Tech Lead as we scale.",
      "Opportunities to work on AI-driven products and international SaaS deployments.",
      "Work with a fast-moving, product-focused engineering team."
    ],
    isActive: false,
  },
  {
    id: "freelance-content-video-creator-2025",
    title: "Freelance Content & Video Creator (LinkedIn + Reels)",
    department: "Marketing | Freelance / Project-based | Remote",
    location: "Remote",
    type: "Freelance",
    experience: "Mid-level",
    description: "Turn ideas, raw footage, and draft text into sharp LinkedIn posts and scroll-stopping reels. You’ll be the creative engine that amplifies INovaBeing’s journey and makes our content stand out on professional and social platforms.",
    thingsYoullDo: [
      "Edit raw videos (intern projects, founder updates, product explainers) into short-form reels optimized for LinkedIn, Instagram, and YouTube.",
      "Draft and polish LinkedIn copy and posts that match INovaBeing’s brand voice.",
      "Add captions, hooks, and storytelling angles to maximize engagement and reach.",
      "Collaborate with the founder and UI/UX designer to align visuals and messaging.",
      "Repurpose long-form content into bite-sized formats for multi-platform distribution.",
      "Stay updated on social trends, especially in AI, startups, and automation."
    ],
    requirements: [
      "Proven experience in short-form video editing (Premiere Pro, Final Cut, DaVinci Resolve, or AI-based tools).",
      "Strong copywriting and editing skills tailored for professional platforms like LinkedIn.",
      "Portfolio of past work — reels, shorts, LinkedIn posts, or ad copy required.",
      "Ability to deliver quick turnarounds while maintaining quality standards.",
      "Self-driven, creative, and able to work independently."
    ],
    preferredSkills: [
      "Experience with AI/startup-related content.",
      "Familiarity with growth-focused content strategies.",
      "Basic design skills to adapt visuals when needed."
    ],
    benefits: [
      "Flexible, remote work with control over your own schedule.",
      "Opportunity for ongoing work and long-term collaboration.",
      "Chance to shape the public voice of a fast-growing AI-first startup.",
      "Competitive, project-based compensation."
    ],
    isActive: false,
  },
]

export function CareersClientPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleApplyClick = (jobId: string) => {
    setSelectedJob(jobId)
    setShowApplicationForm(true)
  }

  const handleBackToJobs = () => {
    setShowApplicationForm(false)
    setSelectedJob(null)
  }

  if (showApplicationForm && selectedJob) {
    const job = jobOpenings.find((j) => j.id === selectedJob)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
  <div className={`container mx-auto px-4 py-12${showApplicationForm && selectedJob ? ' flex justify-center items-center min-h-screen' : ''}`}> 
          <InternApplicationForm job={job} onBack={handleBackToJobs} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Join Our AI Innovation Team
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Shape the future of artificial intelligence with INovaBeing. We're looking for passionate individuals who want to make a real impact in the AI industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Collaborative Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Cutting-edge Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Learning & Growth</span>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Current Openings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(() => {
              const jobs = jobOpenings.filter((job) => job.isActive);
              // If a card is expanded, only show that card (full width on desktop)
              if (expandedId) {
                const job = jobs.find(j => j.id === expandedId);
                if (!job) return null;
                return (
                  <div className="col-span-1 md:col-span-2">
                    <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-3xl mx-auto">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div>
                            <CardTitle className="text-base md:text-lg text-gray-900 dark:text-white">{job.title}</CardTitle>
                            <CardDescription className="text-xs md:text-sm">{job.department}</CardDescription>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="flex items-center gap-1 text-xs md:text-sm">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm">
                              <Briefcase className="h-3 w-3" />
                              {job.experience}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{job.description}</p>

                        {job.thingsYoullDo && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base md:text-lg">What You'll Do:</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {job.thingsYoullDo.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.requirements && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base md:text-lg">Requirements:</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.preferredSkills && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base md:text-lg">Preferred Skills:</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {job.preferredSkills.map((skill, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.benefits && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base md:text-lg">What We Offer:</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {job.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                  <span className="text-green-500 mt-1">✓</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex gap-2 pt-4 mt-auto">
                          <Button
                            onClick={() => setExpandedId(null)}
                            className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white px-6 py-2 text-sm md:text-base"
                          >
                            Less
                          </Button>
                          <Button
                            onClick={() => handleApplyClick(job.id)}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 text-sm md:text-base"
                          >
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              }
              // If no card is expanded, show all active jobs
              return jobs.map((job) => {
                return (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full w-full">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                          <CardTitle className="text-base md:text-lg text-gray-900 dark:text-white">{job.title}</CardTitle>
                          <CardDescription className="text-xs md:text-sm">{job.department}</CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1 text-xs md:text-sm">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm">
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm">
                            <Briefcase className="h-3 w-3" />
                            {job.experience}
                          </Badge>
                          {job.id === "software-engineer-fullstack-2025" && (
                            <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm bg-green-100 text-green-800 border-green-300">
                              2 Openings
                            </Badge>
                          )}
                          {job.id === "db-engineer-sql-nosql-2025" && (
                            <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm bg-green-100 text-green-800 border-green-300">
                              1 Opening
                            </Badge>
                          )}
                          {job.id === "freelance-content-video-creator-2025" && (
                            <Badge variant="outline" className="flex items-center gap-1 text-xs md:text-sm bg-green-100 text-green-800 border-green-300">
                              1 Opening
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                        {job.description}
                      </p>
                      <div className="pt-2">
                        <Button
                          onClick={() => setExpandedId(job.id)}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 text-sm md:text-base"
                        >
                          More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              });
            })()}
          </div>

          {jobOpenings.filter((job) => job.isActive).length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">No Current Openings</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented individuals.
                </p>
                {/* Join Our Talent Pool button removed per request */}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}