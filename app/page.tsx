import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { Process } from "@/components/process"
import Script from "next/script"

export const metadata = {
  title: "Transform Your Business With AI In Just 7 Days | INovaBeing",
  description:
    "INovaBeing delivers cutting-edge AI solutions that transform businesses in record time. Our rapid development approach brings immediate results without lengthy cycles or excessive costs.",
  alternates: {
    canonical: "https://www.inovabeing.com/",
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-950">
        <Hero />
        <About />
        <Solutions />
        <Process />
      </main>

      {/* Structured data for the homepage */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "INovaBeing - AI Solutions Delivered in 7 Days",
            description:
              "Transform your business with custom AI solutions in just 7 days. INovaBeing delivers cutting-edge AI applications, data enrichment, and workflow automation.",
            url: "https://www.inovabeing.com/",
            mainEntity: {
              "@type": "Organization",
              name: "INovaBeing Pvt Ltd",
              url: "https://www.inovabeing.com",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".hero-description"],
            },
            potentialAction: {
              "@type": "ReadAction",
              target: [
                "https://www.inovabeing.com/services/inovabuild",
                "https://www.inovabeing.com/services/inovadata",
              ],
            },
          }),
        }}
      />
    </>
  )
}
