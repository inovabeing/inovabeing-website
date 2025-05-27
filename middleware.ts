import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for the blog page
  if (request.nextUrl.pathname.startsWith("/blog")) {
    // Redirect to the homepage
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/blog/:path*"],
}
