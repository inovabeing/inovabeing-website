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
      "Familiarity with machine learning concepts",
      "Strong problem-solving mindset",
      "Good communication and collaboration skillsExcellent communication and teamwork abilities",
      "Curiosity and willingness to learn fast",
    ],
    benefits: [
      "Real-world AI project experience",
      "Direct mentorship from the founder and AI leads",
      "Flexible work hours (remote/hybrid)",
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
      "Hands-on expertise with Google Ads, Meta Ads Manager, and LinkedIn Campaign Manager",
      "Deep understanding of CAC, ROAS, CPL, CTR, and conversion rate optimization",
      "Ability to manage multiple campaigns and client accounts in parallel",
      "Analytical mindset with strong reporting, problem-solving, and communication skills"
    ],
    benefits: [
      "CTC: Market Standard",
      "Performance Bonus: Annual bonus up to 10% based on campaign ROI and KPIs",
      "Team Setup: You'll work closely with our Social Media Associate who handles posting, blogs, and case studies, while you lead strategy, campaigns, and performance."
    ],
    isActive: true
  },
  
   {
    id: "ai-intern-2025",
    title: "Product Engineer – AI Web Stack (Internship) @ Inovabeing",
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
    id: "midlevel-fullstack-engineer",
    title: "Mid-Level Full Stack Engineer",
    department: "Engineering",
    location: "Hybrid (Hyderabad)",
    type: "Full-Time",
    experience: "3–5 years",
    description: "We’re hiring a Mid-Level Full Stack Engineer to own end-to-end product development, from backend APIs to frontend UI, while managing infrastructure on GCP using Terraform. You’ll contribute to AI-driven products and enterprise-grade SaaS solutions, ensuring scalable, secure, and reliable deployments.",
    thingsYoullDo: [
      "Build scalable and secure backend APIs using Node.js/Express or Python/FastAPI.",
      "Develop clean, responsive React/Next.js frontend applications.",
      "Integrate internal products and client systems efficiently.",
      "Manage cloud infrastructure on GCP (Cloud Run, Cloud SQL, Secret Manager, IAM).",
      "Write and maintain Terraform configurations for infrastructure provisioning.",
      "Follow TDD and implement automated unit tests, collaborating in 2-week sprints."
    ],
    requirements: [
      "3–5 years experience as Full Stack Engineer.",
      "Strong backend with Node.js/Express or Python/FastAPI/Flask.",
      "Proficiency in React/Next.js for frontend.",
      "Hands-on PostgreSQL (schema, queries, performance).",
      "Experience deploying on GCP (Cloud Run, Cloud SQL, IAM, Secret Manager).",
      "Knowledge of Terraform, CI/CD, TDD, unit testing, problem-solving, and communication."
    ],
    preferredSkills: [
      "Docker & containerization.",
      "Exposure to microservices architecture.",
      "Familiarity with monitoring/logging tools (Stackdriver, Prometheus, ELK).",
      "Experience in AI-driven products or high-scale SaaS systems.",
      "Working knowledge of cloud security and IAM best practices.",
      "Experience with automated deployment pipelines."
    ],
    benefits: [
      "Monthly Salary: ₹60,000 (base).",
      "Annual Performance Bonus based on company profitability and contributions.",
      "Steep growth path to Senior Engineer / Tech Lead.",
      "Opportunity to work on AI products and international SaaS deployments.",
      "Hands-on experience with latest cloud technologies.",
      "Chance to own end-to-end product lifecycle."
    ],
    isActive: true
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
        <div className="container mx-auto px-4 py-12">
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Join Our AI Innovation Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Shape the future of artificial intelligence with INovaBeing. We're looking for passionate individuals who
            want to make a real impact in the AI industry.
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
              const jobs = jobOpenings.filter((job) => job.isActive).slice(0, 2);
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
                            <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">{job.title}</CardTitle>
                            <CardDescription className="text-sm md:text-base">{job.department}</CardDescription>
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
              // If no card is expanded, show both side by side
              return jobs.map((job) => {
                return (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-xl mx-auto md:max-w-2xl">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                          <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">{job.title}</CardTitle>
                          <CardDescription className="text-sm md:text-base">{job.department}</CardDescription>
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
                <Button variant="outline">Join Our Talent Pool</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}