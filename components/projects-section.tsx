"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AOI PCB Classifier for Lear Corp",
    category: "AI/ML • Industrial Automation",
    year: "2024",
    description:
      "Developed an AI-based image classifier to detect defects in PCBs using Automated Optical Inspection (AOI) images. Applied image preprocessing, feature extraction, and machine learning models to automate quality control in SMT manufacturing.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "Image Processing"],
    link: "#", // Will be updated when you provide links
    github: "https://github.com/TheSilent01",
  },
  {
    id: 2,
    title: "Parcheesi AI Player",
    category: "Game Development • AI",
    year: "2024",
    description:
      "Designed an AI agent to play the board game Parcheesi against real players using a simulator environment. Developed game state representation, heuristic evaluation, and decision-making algorithms.",
    technologies: ["Python", "AI Algorithms", "Game Theory", "Heuristics"],
    link: "#",
    github: "https://github.com/TheSilent01",
  },
  {
    id: 3,
    title: "Home Lab with Headscale + Tailscale",
    category: "Networking • Infrastructure",
    year: "2024",
    description:
      "Built a secure, scalable home lab on Ubuntu with self-hosted Headscale for private VPN access. Configured network security, remote access, and synchronization services.",
    technologies: ["Ubuntu", "Headscale", "Tailscale", "VPN", "Network Security"],
    link: "#",
    github: "https://github.com/TheSilent01",
  },
  {
    id: 4,
    title: "Digital Maze Quiz - Quantum Rift",
    category: "Web Development • Interactive",
    year: "2024",
    description:
      "Created an interactive, fully digital maze quiz integrating physics and astronomy puzzles for ENSAM Club Event. Features digital hints and science-related narrative.",
    technologies: ["JavaScript", "HTML/CSS", "Interactive Design", "Physics"],
    link: "#",
    github: "https://github.com/TheSilent01",
  },
  {
    id: 5,
    title: "LaTeX Document Templates",
    category: "Documentation • Education",
    year: "2024",
    description:
      "Designed and implemented LaTeX templates for structured educational documents and exercise corrections in programming. Created professional PDF documents with custom styling.",
    technologies: ["LaTeX", "Document Design", "Typography", "Template Design"],
    link: "#",
    github: "https://github.com/TheSilent01",
  },
  {
    id: 6,
    title: "Personal Finance Management System",
    category: "Productivity • Personal Tools",
    year: "2024",
    description:
      "Developed a custom LifeOS vault structure in Obsidian to track monthly income, savings, and budgeting goals with integrated templates and automation.",
    technologies: ["Obsidian", "Markdown", "Personal Productivity", "Data Organization"],
    link: "#",
    github: "https://github.com/TheSilent01",
  },
]

export function ProjectsSection() {
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
    <section id="projects" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Key Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-foreground/5 rounded-lg p-8 hover:bg-foreground/10 transition-all duration-500 border border-foreground/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="project-title text-foreground/90 mb-2 group-hover:text-foreground transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="meta-text text-foreground-secondary mb-1">{project.category}</p>
                  <p className="meta-text text-foreground-tertiary">{project.year}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                    aria-label="View project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <p className="body-text text-foreground-secondary mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-foreground/10 text-foreground-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
