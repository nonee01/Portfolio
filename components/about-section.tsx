"use client"

import { motion } from "framer-motion"
import { Building, Calendar, MapPin } from "lucide-react"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <p className="body-text text-foreground-secondary leading-relaxed">
                I'm a passionate university student at ENSAM Meknès, deeply engaged in software development, embedded
                systems, AI, and digital innovation. My journey combines academic excellence with hands-on experience in
                industrial automation and cutting-edge technology.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary leading-relaxed">
                Through my internship at Lear Corp, I gained valuable experience with SMT production lines, AOI systems,
                and quality assurance processes, where I developed AI solutions for automated defect detection in PCB
                manufacturing.
              </p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
              <h3 className="nav-text text-foreground/90 mb-4 font-semibold">Experience Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-foreground-secondary" />
                  <span className="body-text text-foreground-secondary">Internship at Lear Corp</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-foreground-secondary" />
                  <span className="body-text text-foreground-secondary">SMT Production & AOI Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-foreground-secondary" />
                  <span className="body-text text-foreground-secondary">Quality Assurance & Process Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <p className="body-text text-foreground-secondary leading-relaxed">
                My expertise spans from low-level embedded systems programming to high-level AI applications, with a
                particular focus on industrial automation and quality control systems. I enjoy tackling complex
                technical challenges and creating innovative solutions.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary leading-relaxed">
                Beyond technical work, I'm passionate about documentation and knowledge sharing. I create professional
                LaTeX templates, maintain organized productivity systems in Obsidian, and contribute to educational
                materials for fellow students.
              </p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
              <h3 className="nav-text text-foreground/90 mb-4 font-semibold">Current Focus</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="body-text text-foreground-secondary">AI/ML in Industrial Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="body-text text-foreground-secondary">Embedded Systems Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="body-text text-foreground-secondary">Network Security & Infrastructure</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
