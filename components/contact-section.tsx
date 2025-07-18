"use client"

import { motion } from "framer-motion"
import { Copy, ExternalLink, Mail, MapPin, GraduationCap } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("yassine.elaidous@ensam-meknes.ac.ma") // Update with your actual email
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Placeholder social links - will be updated when you provide them
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/TheSilent01", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/none000/", icon: "linkedin" },
    { name: "Discord", url: "#", icon: "discord", username: "silence2255" },
  ]

  return (
    <section id="contact" className="section-spacing pb-40">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <p className="body-text text-foreground-secondary leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, collaborating on innovative projects, or
                connecting with fellow developers and researchers. Feel free to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <Mail className="h-5 w-5 text-foreground-secondary" />
                <div className="flex-1 flex items-center justify-between">
                  <span className="contact-text text-foreground">yassine.elaidous@ensam-meknes.ac.ma</span>
                  <button
                    onClick={copyEmail}
                    className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
                    aria-label="Copy email address"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  {emailCopied && <span className="meta-text text-green-400 ml-2">Copied!</span>}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <MapPin className="h-5 w-5 text-foreground-secondary" />
                <span className="contact-text text-foreground">Morocco</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <GraduationCap className="h-5 w-5 text-foreground-secondary" />
                <span className="contact-text text-foreground">ENSAM Meknès</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="h-5 w-5 text-foreground-secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <span className="contact-text text-foreground">Discord</span>
                    <span className="block meta-text text-foreground-secondary">silence2255</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="nav-text text-foreground/90 font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 group"
                  >
                    <span className="contact-text text-foreground group-hover:text-foreground/80">{link.name}</span>
                    <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-foreground/80 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
              <h3 className="nav-text text-foreground/90 font-semibold mb-4">Open to Opportunities</h3>
              <p className="body-text text-foreground-secondary leading-relaxed">
                Currently seeking internships and full-time opportunities in:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="body-text text-foreground-secondary">Embedded Systems Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="body-text text-foreground-secondary">AI/ML Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="body-text text-foreground-secondary">Cybersecurity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
