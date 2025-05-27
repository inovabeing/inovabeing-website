import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-20 md:py-32"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-theme-pink opacity-30 blur-[120px]" />
        <div className="absolute -bottom-[10%] right-[5%] h-[600px] w-[600px] rounded-full bg-theme-light-purple opacity-30 blur-[120px]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-float rounded-full bg-theme-pink opacity-20"></div>
        <div className="absolute left-[20%] top-[60%] h-24 w-24 animate-float-delay rounded-full bg-theme-light-purple opacity-20"></div>
        <div className="absolute right-[15%] top-[25%] h-20 w-20 animate-float-slow rounded-full bg-yellow-400 opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Clear H1 with target keyword */}
          <h1 className="mb-6 font-extrabold tracking-tight text-white">
            <span className="block text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Business
            </span>
            <span className="block text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              With AI In Just 7 Days
            </span>
          </h1>

          {/* TL;DR summary for AI search optimization */}
          <p className="mb-10 text-xl text-gray-300 md:text-2xl hero-description">
            We build cutting-edge AI solutions that deliver immediate results. Our custom AI applications and data
            enrichment services eliminate lengthy development cycles and excessive costs, providing rapid business
            transformation.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="ctaOutline"
              size="xl"
              className="min-w-[200px] zoom-on-hover relative overflow-hidden group"
            >
              <Link href="#solutions">
                <span className="text-yellow-500 font-semibold relative z-10">Explore AI Solutions</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>

          {/* Enhanced Clients Section */}
          <div className="mt-12 flex flex-col items-center justify-center">
            <h3 className="mb-6 text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              Our Trusted Clients
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {[
                { name: "Offineeds", url: "https://www.offineeds.com" },
                { name: "Art & Artist", url: null },
              ].map((company) => (
                <div
                  key={company.name}
                  className="px-5 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
                >
                  {company.url ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                    >
                      {company.name}
                    </a>
                  ) : (
                    <span className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {company.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
