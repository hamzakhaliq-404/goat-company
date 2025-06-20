"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Leaf, CheckCircle, Sparkles } from "lucide-react"

export default function BrandStorySection() {
  return (
    <section id="brand-story" className="py-20 px-4 md:px-8 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
          Real Wellness Starts with Real Ingredients
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          At GOAT FZ LLC, we believe the best things don't come from factories—they come from nature.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-primary/20 shadow-2xl flex flex-col justify-center">
          <CardHeader className="flex flex-col items-center">
            <Leaf className="h-10 w-10 text-primary mb-2 animate-pulse" />
            <CardTitle className="text-2xl font-bold text-white text-center">Nature, Not Factories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-center mb-4">
              That's why we work with pure, organic ingredients like Himalayan shilajit, rosemary oil, and pumpkin seed oil—sourced from trusted lands, carefully extracted, and never diluted.
            </p>
            <p className="text-slate-400 text-center">
              We started this journey after seeing a rise in artificial products that promised too much and delivered too little. People were paying for wellness, but not getting well. We saw the gap—and decided to change the standard.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-primary/20 shadow-2xl flex flex-col justify-center">
          <CardHeader className="flex flex-col items-center">
            <Sparkles className="h-10 w-10 text-purple-400 mb-2 animate-bounce" />
            <CardTitle className="text-2xl font-bold text-white text-center">Tradition, Science, Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-center mb-4">
              We don't follow trends. We follow tradition, science, and purpose. Every product we offer is made with one goal: To help you feel stronger, clearer, and more balanced—naturally.
            </p>
            <ul className="text-left text-slate-200 space-y-2 mt-4">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> 100% Authentic</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Organic & Pure</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Backed by generations of natural wisdom</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto text-center"
      >
        <p className="text-xl md:text-2xl text-white font-semibold mb-4">
          Whether you're using shilajit to boost energy, rosemary oil to sharpen focus, or pumpkin oil to nourish from within—you can trust what you're putting on or into your body.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          No fillers. No fakes. Just real results.
        </p>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">Welcome to GOAT FZ LLC.</h3>
        <p className="text-lg text-slate-300">Where nature is the greatest of all time.</p>
      </motion.div>
    </section>
  )
} 