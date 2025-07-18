"use client"

import { motion } from "framer-motion"
import { MapPin, GraduationCap } from "lucide-react"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center">
      <div className="container-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="hero-title text-foreground/90 whitespace-normal">YASSINE EL AIDOUS</h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="hero-subtitle text-foreground-secondary max-w-3xl">
              Software Developer & AI Enthusiast crafting innovative solutions in embedded systems, machine learning,
              and digital automation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 text-foreground-secondary">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="nav-text">Morocco</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <span className="nav-text">ENSAM Meknès</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
