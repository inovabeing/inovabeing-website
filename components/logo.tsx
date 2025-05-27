import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  linkWrapper?: boolean
}

export function Logo({ className = "", linkWrapper = true }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-2 ${linkWrapper ? "" : "zoom-on-hover"} ${className}`}>
      <Image src="/images/inb-logo.png" alt="INovaBeing Logo" width={32} height={32} />
    </div>
  )

  if (linkWrapper) {
    return (
      <Link href="/" className="zoom-on-hover">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
