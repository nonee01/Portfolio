"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react"
import { site } from "@/lib/content"

const ease = [0.25, 0.1, 0.25, 1] as const

const links = [
  { label: "GitHub", value: "TheSilent01", href: site.github, Icon: Github },
  { label: "LinkedIn", value: "Yassine El Aidous", href: site.linkedin, Icon: Linkedin },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard is blocked without a secure context; the mailto link still works.
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section-spacing">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="section-title mb-16">Contact</h2>

          <p className="hero-subtitle mb-16 max-w-3xl text-foreground">
            Happy to talk about monitoring, systems work, or anything below. Mail is the fastest way to reach me.
          </p>

          <div className="mb-12 border-b border-border pb-5">
            <span className="mono mb-3 block text-xs uppercase tracking-widest text-foreground-tertiary">Email</span>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a
                href={`mailto:${site.email}`}
                className="project-title text-foreground transition-colors duration-300 hover:text-tn-blue"
              >
                {site.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="nav-text inline-flex items-center gap-2 text-foreground-tertiary transition-colors duration-300 hover:text-foreground"
                aria-label="Copy email address"
              >
                {copied ? <Check className="h-4 w-4 text-tn-green" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            {links.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-5 pr-2 transition-colors duration-300 sm:pr-10"
              >
                <span className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-foreground-tertiary transition-colors duration-300 group-hover:text-tn-blue" />
                  <span>
                    <span className="mono block text-xs uppercase tracking-widest text-foreground-tertiary">
                      {label}
                    </span>
                    <span className="nav-text text-foreground-secondary transition-colors duration-300 group-hover:text-foreground">
                      {value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-foreground-tertiary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tn-blue" />
              </a>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="nav-text inline-flex items-center gap-2 bg-tn-blue px-7 py-3.5 text-tn-bg transition-opacity duration-300 hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Send a mail
            </a>
            <a
              href={site.cv}
              className="nav-text inline-flex items-center gap-2 border border-border px-7 py-3.5 text-foreground-secondary transition-colors duration-300 hover:border-tn-blue hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
