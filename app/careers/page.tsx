import type { Metadata } from "next"
import { CareersClientPage } from "./CareersClientPage"

export const metadata: Metadata = {
  title: "Careers - Join Our AI Innovation Team | INovaBeing",
  description:
    "Join INovaBeing's dynamic team and help shape the future of AI solutions. Explore exciting career opportunities in AI development, data science, and technology innovation.",
  keywords: [
    "AI careers",
    "technology jobs",
    "AI internship",
    "machine learning jobs",
    "data science careers",
    "AI development",
    "tech internship",
    "INovaBeing careers",
  ],
  openGraph: {
    title: "Careers - Join Our AI Innovation Team | INovaBeing",
    description:
      "Join INovaBeing's dynamic team and help shape the future of AI solutions. Explore exciting career opportunities in AI development, data science, and technology innovation.",
    url: "https://www.inovabeing.com/careers",
  },
  twitter: {
    title: "Careers - Join Our AI Innovation Team | INovaBeing",
    description:
      "Join INovaBeing's dynamic team and help shape the future of AI solutions. Explore exciting career opportunities in AI development, data science, and technology innovation.",
  },
  alternates: {
    canonical: "https://www.inovabeing.com/careers",
  },
}

export default function CareersPage() {
  return <CareersClientPage />
}
