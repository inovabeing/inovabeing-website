"use client"
import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Logo width={150} height={40} />
            <p className="mt-2 max-w-xs text-sm text-gray-300">
              Transforming businesses with cutting-edge AI solutions that deliver real results.
            </p>
            <div className="flex">
              <Link
                href="https://www.linkedin.com/company/inovabeing"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-gray-300 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/inovabuild" className="text-gray-300 transition-colors hover:text-white">
                  InovaBuild™
                </Link>
              </li>
              <li>
                <Link href="/services/inovadata" className="text-gray-300 transition-colors hover:text-white">
                  InovaData™
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 shrink-0 text-gray-300" />
                <span className="text-gray-300">
                  Gachibowli, Hyderabad,
                  <br />
                  India - 500075
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 shrink-0 text-gray-300" />
                <span className="text-gray-300">+91 0000-000-000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 shrink-0 text-gray-300" />
                <a href="mailto:info@inovabeing.com" className="text-gray-300 hover:text-white transition-colors">
                  info@inovabeing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} INovaBeing Pvt Ltd. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
