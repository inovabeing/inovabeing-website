import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { BookingModalProvider } from "@/components/booking-modal-provider"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inovabeing.com"),
  title: {
    default: "INovaBeing - AI Solutions Delivered in 7 Days | Custom AI Development",
    template: "%s | INovaBeing",
  },
  description:
    "Transform your business with custom AI solutions in just 7 days. INovaBeing delivers cutting-edge AI applications, data enrichment, and workflow automation without lengthy development cycles or excessive costs.",
  keywords: [
    "AI solutions",
    "custom AI development",
    "business automation",
    "data enrichment",
    "AI applications",
    "rapid AI development",
    "7-day AI delivery",
    "AI consulting",
    "machine learning solutions",
    "business intelligence",
    "workflow automation",
    "AI integration",
  ],
  authors: [{ name: "INovaBeing" }],
  creator: "INovaBeing Pvt Ltd",
  publisher: "INovaBeing Pvt Ltd",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.inovabeing.com/",
    title: "INovaBeing - AI Solutions Delivered in 7 Days | Custom AI Development",
    description:
      "Transform your business with custom AI solutions in just 7 days. INovaBeing delivers cutting-edge AI applications, data enrichment, and workflow automation without lengthy development cycles or excessive costs.",
    siteName: "INovaBeing",
    images: [
      {
        url: "https://www.inovabeing.com/images/inb-logo.png",
        width: 1200,
        height: 630,
        alt: "INovaBeing - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INovaBeing - AI Solutions Delivered in 7 Days | Custom AI Development",
    description:
      "Transform your business with custom AI solutions in just 7 days. INovaBeing delivers cutting-edge AI applications, data enrichment, and workflow automation.",
    images: ["https://www.inovabeing.com/images/inb-logo.png"],
    creator: "@inovabeing",
    site: "@inovabeing",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/images/inb-logo.png", type: "image/png" }],
    apple: [{ url: "/images/inb-logo.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/images/inb-logo.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.inovabeing.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <BookingModalProvider calLink="https://cal.com/inovabeing/meet">
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieConsent />
            </div>
          </BookingModalProvider>
        </ThemeProvider>

        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "INovaBeing Pvt Ltd",
              url: "https://www.inovabeing.com",
              logo: "https://www.inovabeing.com/images/inb-logo.png",
              sameAs: [
                "https://twitter.com/inovabeing",
                "https://www.facebook.com/inovabeing",
                "https://www.linkedin.com/company/inovabeing",
                "https://www.instagram.com/inovabeing",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 73969 85858",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              description:
                "INovaBeing delivers cutting-edge AI solutions that transform businesses in just 7 days. Our services include custom AI applications, data enrichment, and workflow automation.",
            }),
          }}
        />

        {/* Microsoft Clarity Tracking Script */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t2cisond79");
          `}
        </Script>
      </body>
    </html>
  )
}
