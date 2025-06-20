import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import ServicesSection from "@/components/sections/services-section"
import OurBrandsSection from "@/components/sections/our-brands-section"
import ContactSection from "@/components/sections/contact-section"
import PartnerSection from "@/components/sections/partner-section"
import BrandStorySection from "@/components/sections/brand-story-section"

// Homepage specific metadata (can override defaults from layout.tsx)
export const metadata: Metadata = {
  title: "GOAT FZ-LLC | Top E-commerce, Marketing & Web Design Solutions in UAE", // More specific title for homepage
  description:
    "Partner with GOAT FZ-LLC for unparalleled e-commerce development, strategic digital marketing, and innovative web design in the UAE. Discover our brands: Blak Herbs & Deluci London.",
  alternates: {
    canonical: "/", // Canonical URL for the homepage
  },
  openGraph: {
    title: "GOAT FZ-LLC | Top E-commerce, Marketing & Web Design Solutions in UAE",
    description:
      "Partner with GOAT FZ-LLC for unparalleled e-commerce development, strategic digital marketing, and innovative web design in the UAE. Discover our brands: Blak Herbs & Deluci London.",
    url: "https://goatfzllc.com", // Ensure this is your live domain
  },
  twitter: {
    title: "GOAT FZ-LLC | UAE's Leading Digital Solutions Provider",
    description:
      "Boost your business with GOAT FZ-LLC. Specializing in e-commerce, marketing, and web design. Featuring Blak Herbs & Deluci London.",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BrandStorySection />
      <ServicesSection />
      <OurBrandsSection />
      <PartnerSection />
      <ContactSection />
    </>
  )
}
