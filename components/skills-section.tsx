"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React.js", "React Native"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["Computer Vision", "Classification Models", "Dataset Management", "AOI Systems"],
  },
  {
    title: "Operating Systems & Tools",
    skills: ["Manjaro Linux", "Ubuntu", "Git", "Obsidian"],
  },
  {
    title: "Networking & Security",
    skills: ["VPN Setup", "Headscale", "Tailscale", "Home Lab Networking"],
  },
  {
    title: "Documentation & Productivity",
    skills: ["LaTeX", "Technical Writing", "Obsidian", "LifeOS Systems"],
  },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-foreground/5 rounded-lg p-6 border border-foreground/10"
            >
              <h3 className="nav-text text-foreground/90 mb-4 font-semibold">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                    <span className="body-text text-foreground-secondary">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
