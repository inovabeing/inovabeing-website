"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export function ToolStackHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,119,198,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="container relative px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
              Tech Arsenal
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Explore the cutting-edge technologies that power our AI solutions and drive innovation for our clients.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["Cloud", "AI", "Backend", "Frontend", "DevOps", "Data", "Tools"].map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                {category}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
