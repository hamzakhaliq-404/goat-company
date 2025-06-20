"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, Handshake, Award, Truck, BookOpen, ShoppingBag, Leaf } from "lucide-react"

export default function PartnerSection() {
  return (
    <section id="partner" className="py-20 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8 text-center"
      >
        <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-primary via-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">Partner with GOAT FZ LLC</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Premium Organic Wellness Products – Trusted by Nature, Backed by Quality
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "Authentic, Lab-Tested Products",
            desc: "Sourced responsibly and tested for purity and efficacy.",
            icon: <CheckCircle className="h-8 w-8 text-primary mb-2" />,
          },
          {
            title: "Bulk Supply & Wholesale Pricing",
            desc: "Competitive rates with flexible volume options.",
            icon: <ShoppingBag className="h-8 w-8 text-purple-400 mb-2" />,
          },
          {
            title: "Private Label / White Label Services",
            desc: "Use our trusted formulations under your own brand.",
            icon: <Award className="h-8 w-8 text-teal-400 mb-2" />,
          },
          {
            title: "Consistent Supply Chain",
            desc: "Reliable inventory and timely delivery to support growth.",
            icon: <Truck className="h-8 w-8 text-primary mb-2" />,
          },
          {
            title: "Marketing & Education Support",
            desc: "We equip your team with training, materials, and product knowledge.",
            icon: <BookOpen className="h-8 w-8 text-purple-400 mb-2" />,
          },
        ].map((item, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-primary/20 shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
            <CardHeader className="flex flex-col items-center">
              {item.icon}
              <CardTitle className="text-xl font-semibold text-white text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="mt-16 space-y-8 text-center">
        <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-primary via-purple-400 to-teal-400 bg-clip-text text-transparent">Ideal Partners</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "E-commerce & D2C sellers",
            icon: <Users className="h-7 w-7 text-primary mb-2 mx-auto" />,
          },
          {
            title: "Amazon, Noon, and other marketplace vendors",
            icon: <Handshake className="h-7 w-7 text-purple-400 mb-2 mx-auto" />,
          },
          {
            title: "Wellness, beauty, and spa brands",
            icon: <Leaf className="h-7 w-7 text-teal-400 mb-2 mx-auto" />,
          },
          {
            title: "Health & nutrition retailers",
            icon: <ShoppingBag className="h-7 w-7 text-primary mb-2 mx-auto" />,
          },
          {
            title: "Herbal remedy and supplement companies",
            icon: <Award className="h-7 w-7 text-purple-400 mb-2 mx-auto" />,
          },
        ].map((item, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-primary/20 shadow-xl hover:shadow-primary/30 transition-all duration-300 group flex flex-col items-center justify-center">
            <CardHeader className="flex flex-col items-center">
              {item.icon}
              <CardTitle className="text-lg font-semibold text-white text-center">{item.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </motion.div>

      <div className="mt-16 space-y-8 text-center">
        <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-primary via-purple-400 to-teal-400 bg-clip-text text-transparent">Why Choose GOAT FZ LLC?</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "100% Organic & Authentic Products",
            icon: <Leaf className="h-7 w-7 text-primary mb-2 mx-auto" />,
          },
          {
            title: "Retail & Export Grade Packaging",
            icon: <ShoppingBag className="h-7 w-7 text-purple-400 mb-2 mx-auto" />,
          },
          {
            title: "Transparent sourcing and production",
            icon: <BookOpen className="h-7 w-7 text-teal-400 mb-2 mx-auto" />,
          },
          {
            title: "Dedicated support team that understands partners' needs",
            icon: <Users className="h-7 w-7 text-primary mb-2 mx-auto" />,
          },
          {
            title: "Herbal remedy and supplement companies",
            icon: <Award className="h-7 w-7 text-purple-400 mb-2 mx-auto" />,
          },
        ].map((item, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-primary/20 shadow-xl hover:shadow-primary/30 transition-all duration-300 group flex flex-col items-center justify-center">
            <CardHeader className="flex flex-col items-center">
              {item.icon}
              <CardTitle className="text-lg font-semibold text-white text-center">{item.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </motion.div>

      <div className="mt-16 text-center space-y-4">
        <p className="text-white text-xl font-medium">
          Let's Build Something Natural, Together 🌿
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Contact us today for our product catalog, MOQ details, and wholesale pricing.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg 
                   transform transition-all duration-300 hover:scale-105 hover:shadow-primary/50 group"
        >
          <Link href="#contact">
            Start Your Project{" "}
          </Link>
        </Button>
      </div>
    </section>
  )
}
