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
      "20–25 hours/week",
      "Internship certificate",
      "Access to latest AI tools and platforms",
      "Priority for a full-time offer",
      "Monthly stipend: ₹10,000–₹15,000 (based on experience/performance)",
    ],
    isActive: true,
  },
]

export function CareersClientPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Current Openings</h2>

          <div className="space-y-6">
            {jobOpenings
              .filter((job) => job.isActive)
              .map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">{job.title}</CardTitle>
                        <CardDescription className="text-lg">{job.department}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Do:</h4>
                      <ul className="space-y-2">
                        {job.thingsYoullDo.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What We Offer:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                    Ready to build the future with us? <span className="text-green-500 mt-1"></span>
                      <Button
                        onClick={() => handleApplyClick(job.id)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-2"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
