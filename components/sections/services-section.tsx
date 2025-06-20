"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShoppingCart, BarChart3, Palette, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "services-ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "From custom Shopify stores to complex marketplace integrations, we build e-commerce platforms that convert visitors into loyal customers.",
    features: [
      "Custom Store Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Mobile-Responsive Design",
    ],
  },
  {
    id: "services-marketing",
    icon: BarChart3,
    title: "Digital Marketing Services",
    description:
      "Drive growth with data-driven marketing strategies. We cover SEO, SEM, social media marketing, content creation, and email campaigns.",
    features: ["SEO & SEM", "Social Media Management", "Content Marketing", "PPC Campaigns"],
  },
  {
    id: "services-webdesign",
    icon: Palette,
    title: "Web Design & Development",
    description:
      "Crafting visually stunning and highly functional websites that reflect your brand identity and engage your audience effectively.",
    features: ["UI/UX Design", "Responsive Web Development", "CMS Integration", "Website Maintenance"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Services</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive suite of digital services to help your business thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                id={service.id}
                className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group
               bg-slate-800/50 border-slate-700 hover:border-primary/50 transform hover:-translate-y-1"
              >
                <CardHeader className="bg-slate-700/50 p-6 border-b border-slate-600">
                  <div className="flex items-center gap-4">
                    <service.icon className="h-10 w-10 text-primary" />
                    <CardTitle className="text-xl font-semibold text-slate-100">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <CardDescription className="mb-4 text-base text-slate-300">{service.description}</CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                          <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="link"
                    asChild
                    className="mt-auto self-start p-0 text-primary hover:text-primary/80 group-hover:underline"
                  >
                    <Link href="#contact">
                      Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
