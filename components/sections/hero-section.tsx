"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, ShoppingCart, BarChart3, Palette, Zap } from "lucide-react"
import { useEffect } from "react"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
}

const iconItemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  hover: {
    scale: 1.15,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.4, yoyo: Number.POSITIVE_INFINITY },
  },
}

const FloatingShape = ({
  delay,
  size,
  position,
  color,
}: {
  delay: number
  size: string
  position: { top?: string; left?: string; right?: string; bottom?: string }
  color: string
}) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${color}`}
    style={{ width: size, height: size, ...position, filter: "blur(30px)" }}
    initial={{ y: Math.random() * 40 - 20, x: Math.random() * 40 - 20, scale: 0.8, opacity: 0 }}
    animate={{
      y: [null, Math.random() * 60 - 30, Math.random() * 60 - 30, null],
      x: [null, Math.random() * 60 - 30, Math.random() * 60 - 30, null],
      rotate: [0, 360],
      scale: [0.8, 1, 1.2, 0.8],
      opacity: [0, 0.3, 0.2, 0],
    }}
    transition={{
      duration: 20 + Math.random() * 15,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
      delay,
      ease: "easeInOut",
    }}
  />
)

export default function HeroSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <section
      id="hero" // Added ID here
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-slate-50"
    >
      {/* Enhanced Animated Background Elements */}
      <FloatingShape delay={0} size="350px" position={{ top: "10%", left: "15%" }} color="bg-primary" />
      <FloatingShape delay={1} size="280px" position={{ top: "60%", right: "10%" }} color="bg-purple-500" />
      <FloatingShape delay={2} size="200px" position={{ bottom: "15%", left: "30%" }} color="bg-teal-500" />
      <FloatingShape delay={3} size="150px" position={{ top: "20%", right: "35%" }} color="bg-pink-500" />

      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <motion.div variants={textVariants} initial="hidden" animate={controls} custom={0}>
          <Zap className="mx-auto h-16 w-16 text-primary mb-4 animate-pulse" />
        </motion.div>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={controls}
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6
                   bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-teal-400
                   pb-2 md:pb-3" // Added padding-bottom here
        >
          Ignite Your Digital Future
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={controls}
          custom={2}
          className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10"
        >
          GOAT FZ-LLC crafts <strong className="text-primary">next-generation</strong> e-commerce platforms,
          <strong className="text-purple-400"> high-impact</strong> marketing, and
          <strong className="text-teal-400"> breathtaking</strong> web designs. Experience the pinnacle of digital
          innovation in the UAE.
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={controls}
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-primary/50 group"
          >
            <Link href="#contact">
              Start Your Project{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-primary
                     shadow-md transform transition-all duration-300 hover:scale-105 group"
          >
            <Link href="#services">Explore Services</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 flex justify-center gap-8 md:gap-12 flex-wrap"
        >
          {[
            { Icon: ShoppingCart, label: "E-commerce Mastery", color: "text-primary" },
            { Icon: BarChart3, label: "Marketing Genius", color: "text-purple-400" },
            { Icon: Palette, label: "Design Excellence", color: "text-teal-400" },
          ].map(({ Icon, label, color }) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-2 text-slate-300 cursor-pointer"
              variants={iconItemVariants}
              whileHover="hover"
            >
              <Icon className={`h-10 w-10 md:h-12 md:w-12 ${color}`} />
              <span className="text-sm md:text-base font-medium">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
