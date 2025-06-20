"use client"

import Link from "next/link"
import { GrapeIcon as Goat, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#hero", label: "Home" }, // Changed href to target hero section ID
  { href: "#stats", label: "Stats" },
  { href: "#services", label: "Services" },
  { href: "#our-brands", label: "Our Brands" },
  { href: "#contact", label: "Contact Us" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 ease-in-out",
        isScrolled || isMobileMenuOpen ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent",
        "rounded-xl p-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/#hero" className="flex items-center gap-2 text-xl font-bold">
          {" "}
          {/* Also update logo link */}
          <Goat className="h-8 w-8 text-primary" />
          <span>GOAT FZ-LLC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-background/90 backdrop-blur-md rounded-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
