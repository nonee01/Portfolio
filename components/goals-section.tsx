"use client"

import { motion } from "framer-motion"
import { Target, Zap, Rocket, Award, Code, Globe } from "lucide-react"

const goals = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Master Linux & Full-Stack Development",
    description:
      "Achieve expertise in Linux administration, network security, and full-stack software development within the next year.",
    timeline: "2024-2025",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Competitive Programming Excellence",
    description: "Master algorithmic problem-solving to compete in national and international programming contests.",
    timeline: "Ongoing",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI/ML Industrial Applications",
    description:
      "Build and deploy robust AI/ML applications, particularly in industrial automation and quality control.",
    timeline: "2024-2025",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Cloud & Infrastructure Mastery",
    description:
      "Gain advanced skills in cloud infrastructure, containerization, and orchestration (Docker, Kubernetes).",
    timeline: "2025",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Tech Innovation & Startups",
    description:
      "Launch or contribute to tech startups or open-source projects focused on innovative industrial solutions.",
    timeline: "2025-2026",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Professional Career Launch",
    description: "Secure a high-level role in embedded systems, AI, or cybersecurity by graduation.",
    timeline: "2025-2026",
  },
]

export function GoalsSection() {
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
    <section id="goals" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Learning & Career Goals
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-foreground/5 rounded-lg p-8 hover:bg-foreground/10 transition-all duration-500 border border-foreground/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-foreground/10 rounded-lg text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                  {goal.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="nav-text text-foreground/90 font-semibold group-hover:text-foreground transition-colors duration-300">
                      {goal.title}
                    </h3>
                    <span className="meta-text text-foreground-tertiary bg-foreground/10 px-2 py-1 rounded">
                      {goal.timeline}
                    </span>
                  </div>
                  <p className="body-text text-foreground-secondary leading-relaxed">{goal.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
