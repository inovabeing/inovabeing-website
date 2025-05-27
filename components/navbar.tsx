"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Moon, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HighlightedCTAButton } from "@/components/ui/highlighted-cta-button"
import { useTheme } from "next-themes"
import { useBookingModal } from "@/components/booking-modal-provider"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const { openBookingModal } = useBookingModal() // Get the openBookingModal function

  const handleMouseEnter = (dropdown: string | null) => {
    if (dropdown) {
      setHoverDropdown(dropdown)
    }
  }

  const handleMouseLeave = () => {
    setHoverDropdown(null)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", dropdown: null },
    { name: "About Us", href: "/about-us", dropdown: null },
    {
      name: "Services",
      href: "#",
      dropdown: "services",
      options: [
        { name: "InovaBuild™", href: "/services/inovabuild", suboptions: null },
        { name: "InovaData™", href: "/services/inovadata", suboptions: null },
      ],
    },
    { name: "Tech Arsenal", href: "/tech-arsenal", dropdown: null },
    { name: "Pricing", href: "/pricing", dropdown: null },
    { name: "Contact", href: "/contact", dropdown: null },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-md backdrop-blur-md"
          : "bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Logo linkWrapper={false} />
        </Link>

        <nav
          className={`${
            isOpen
              ? "absolute inset-x-0 top-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 backdrop-blur-md max-h-[500px] border-b opacity-100"
              : "hidden md:flex items-center gap-6"
          }`}
        >
          <ul className={`${isOpen ? "flex flex-col p-4" : "flex items-center gap-6"}`}>
            {navItems.map((item) => (
              <li key={item.name} className={isOpen ? "py-2" : "relative"}>
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => !isOpen && handleMouseEnter(item.dropdown)}
                    onMouseLeave={() => !isOpen && handleMouseLeave()}
                  >
                    <button className="flex items-center gap-1 text-white transition-colors hover:text-yellow-400 zoom-on-hover">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {hoverDropdown === item.dropdown && (
                      <div className="absolute left-0 top-full z-50 mt-1 min-w-[250px] rounded-md border border-gray-700 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-2 shadow-lg">
                        {item.options &&
                          item.options.map((option) => (
                            <Link
                              key={option.name}
                              href={option.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                              onClick={() => setIsOpen(false)}
                            >
                              {option.name}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white transition-colors hover:text-yellow-400 zoom-on-hover"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            {isOpen && (
              <li className="py-2">
                <Button
                  variant="ctaBright"
                  className="w-full zoom-on-hover flex items-center justify-center gap-1.5"
                  onClick={() => {
                    setIsOpen(false)
                    openBookingModal()
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Book My Call
                </Button>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <HighlightedCTAButton
              variant="ctaBright"
              className="relative overflow-hidden zoom-on-hover flex items-center gap-1.5 py-2"
              onClick={() => openBookingModal()}
            >
              <Calendar className="h-4 w-4" />
              <span className="text-white">Book My Call</span>
            </HighlightedCTAButton>
          </div>

          {/* Simple theme toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 zoom-on-hover"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white md:hidden zoom-on-hover"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
