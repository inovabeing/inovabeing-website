"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import type { ButtonProps } from "@/components/ui/button"

export interface HighlightedCTAButtonProps extends ButtonProps {}

export const HighlightedCTAButton = forwardRef<HTMLButtonElement, HighlightedCTAButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ctaGradient"
        className={cn(
          "relative overflow-hidden px-8 py-6 text-lg font-bold shadow-lg transition-all duration-300",
          "hover:scale-105 hover:shadow-xl",
          "after:absolute after:inset-0 after:rounded-md after:border-2 after:border-white/30 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100",
          "animate-subtle-pulse",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

HighlightedCTAButton.displayName = "HighlightedCTAButton"
