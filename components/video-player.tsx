"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  // Simulate video progress when "playing"
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 0
          }
          return prev + 0.5
        })
      }, 100)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
      {/* Video thumbnail/placeholder */}
      <div className="relative h-full w-full">
        <Image
          src="/images/inovabeing-video-thumbnail.png"
          alt="Inovabeing AI Solutions"
          width={1280}
          height={720}
          className="h-full w-full object-cover"
          priority
        />

        {/* Overlay with company name */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white">
          <h3 className="mb-2 text-2xl font-bold md:text-3xl">Inovabeing AI Solutions</h3>
          <p className="mb-6 text-lg">Transform Your Business With AI In Just 7 Days</p>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white transition-transform hover:scale-110"
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 pl-1" />}
          </button>
        </div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
        <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsPlaying(!isPlaying)} className="rounded-full p-1 hover:bg-white/10">
              {isPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
            </button>
            <span className="text-xs text-white">{Math.floor((progress / 100) * 180)}s / 3:00</span>
          </div>

          <button onClick={() => setIsMuted(!isMuted)} className="rounded-full p-1 hover:bg-white/10">
            {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
          </button>
        </div>
      </div>
    </div>
  )
}
