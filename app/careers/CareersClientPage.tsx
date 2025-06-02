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
    description:
      "Join our dynamic AI team and gain hands-on experience in cutting-edge artificial intelligence projects. You'll work alongside experienced developers and data scientists to build innovative AI solutions that transform businesses.",
    requirements: [
      "Currently pursuing or recently completed degree in Computer Science, AI, ML, or related field",
      "Basic understanding of Python programming",
      "Familiarity with machine learning concepts",
      "Strong problem-solving skills and analytical thinking",
      "Excellent communication and teamwork abilities",
      "Eagerness to learn and adapt to new technologies",
    ],
    benefits: [
      "Hands-on experience with real-world AI projects",
      "Mentorship from industry experts",
      "Flexible working hours",
      "Remote/hybrid work options",
      "Certificate of completion",
      "Potential for full-time conversion",
      "Access to cutting-edge AI tools and technologies",
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
