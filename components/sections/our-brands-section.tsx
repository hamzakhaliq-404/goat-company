"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const brands = [
  {
    name: "Blak Herbs",
    logoUrl: "/images/blak-herbs-logo.webp",
    websiteUrl: "https://blakherbs.com/",
    description: "Premium natural wellness products, ethically sourced and crafted for holistic health.",
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "text-black",
  },
  {
    name: "DELUCI LONDON",
    logoUrl: "/images/deluci-london-logo.jpg",
    websiteUrl: "https://delucilondon.com/",
    description: "A modern take on timeless elegance— fashion accessories with London sophistication",
    bgColor: "bg-emerald-800",
    textColor: "text-stone-400",
    accentColor: "text-stone-400",
  },
]

export default function OurBrandsSection() {
  return (
    <section id="our-brands" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Flagship Brands</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the successful e-commerce ventures powered by GOAT FZ-LLC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-xl shadow-2xl overflow-hidden ${brand.bgColor} ${brand.textColor} p-8 md:p-10 
               flex flex-col md:flex-row items-center gap-8
               transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${brand.name === "Blak Herbs" ? "hover:shadow-amber-400/30" : "hover:shadow-yellow-300/30"}`}
            >
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src={brand.logoUrl || "/placeholder.svg"}
                  alt={`${brand.name} Logo`}
                  width={brand.name === "Blak Herbs" ? 200 : 180} // Adjust size based on logo aspect ratio
                  height={brand.name === "Blak Herbs" ? 100 : 180}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className={`text-2xl md:text-3xl font-bold ${brand.accentColor} mb-3`}>{brand.name}</h3>
                <p className="text-base md:text-lg mb-6">{brand.description}</p>
                <Button
  asChild
  className={`bg-white text-black border border-current hover:bg-gray-100`}
>
  <Link href={brand.websiteUrl} target="_blank" rel="noopener noreferrer">
    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
  </Link>
</Button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
