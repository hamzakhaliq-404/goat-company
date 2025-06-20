import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://goatfzllc.com" // Your domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Important for resolving relative URLs in metadata
  title: {
    default: "GOAT FZ-LLC | Premier E-commerce, Marketing & Web Design in UAE",
    template: "%s | GOAT FZ-LLC", // For page-specific titles
  },
  description:
    "GOAT FZ-LLC: Your trusted partner in UAE for cutting-edge e-commerce solutions, results-driven digital marketing, and bespoke web design services. Elevate your brand with us.",
  keywords: [
    "E-commerce UAE",
    "Digital Marketing Dubai",
    "Web Design Ras Al Khaimah",
    "GOAT FZ-LLC",
    "Shopify Experts UAE",
    "SEO Services UAE",
    "Branding Agency UAE",
    "Online Store Development",
  ],
  authors: [{ name: "GOAT FZ-LLC", url: siteUrl }],
  creator: "GOAT FZ-LLC",
  publisher: "GOAT FZ-LLC",
  alternates: {
    canonical: "/", // Canonical URL for the homepage
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "GOAT FZ-LLC | Premier E-commerce, Marketing & Web Design in UAE",
    description:
      "Transform your business with GOAT FZ-LLC's expert e-commerce, marketing, and web design services in the UAE.",
    siteName: "GOAT FZ-LLC",
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Create an appealing Open Graph image (e.g., 1200x630px)
        width: 1200,
        height: 630,
        alt: "GOAT FZ-LLC Services Showcase",
      },
    ],
    locale: "en_US", // Or "ar_AE" if you have an Arabic version
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with your actual Twitter handle
    creator: "@YourTwitterHandle",
    title: "GOAT FZ-LLC | Elevate Your Digital Presence in UAE",
    description:
      "Expert e-commerce, marketing, and web design solutions by GOAT FZ-LLC. Partner with the best in the UAE.",
    images: [`${siteUrl}/twitter-image.png`], // Create a Twitter-specific image (e.g., 1200x600px or similar aspect ratio)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

// Define Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GOAT FZ-LLC",
  url: siteUrl,
  logo: `${siteUrl}/logo-schema.png`, // Create a logo specifically for schema (e.g., transparent PNG)
  sameAs: [
    // Add your social media profile URLs here
    // "https://www.facebook.com/yourprofile",
    // "https://www.linkedin.com/company/yourcompany",
    // "https://www.instagram.com/yourprofile",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-55-147-0288", // Main contact number
    contactType: "Customer Service", // Or "Sales", "Technical Support"
    areaServed: "AE", // United Arab Emirates
    availableLanguage: ["en", "ar"], // English, Arabic
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "FDCW0558, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ",
    addressLocality: "Ras Al Khaimah",
    country: "AE", // United Arab Emirates
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {/* Ensure you have favicon files in your /public directory */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" /> {/* For PWA capabilities */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
