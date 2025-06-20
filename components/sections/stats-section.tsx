"use client"

import { motion } from "framer-motion"
import { Users, ShoppingBag, BarChart, Smile } from "lucide-react"
import CountUp from "react-countup"

const stats = [
  { icon: Users, value: 150, label: "Happy Clients", suffix: "+" },
  { icon: ShoppingBag, value: 50, label: "E-commerce Stores Launched", suffix: "+" },
  { icon: BarChart, value: 95, label: "Marketing Success", suffix: "%" }, // Shortened for space
  { icon: Smile, value: 10, label: "Years Experience", suffix: "+" }, // Shortened for space
]

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative p-6 bg-slate-800/60 backdrop-blur-md rounded-xl 
                         border border-slate-700/80 overflow-hidden
                         transition-all duration-300 ease-in-out
                         hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/20"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Subtle animated glow element for hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                           bg-gradient-to-br from-primary/20 via-transparent to-primary/20"
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className="mb-4 text-primary transition-colors duration-300 group-hover:text-primary"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }} // Icon specific hover from parent group hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-slate-50 mb-1">
                  <CountUp end={stat.value} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
