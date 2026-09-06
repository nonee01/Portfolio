"use client"

import { motion } from "framer-motion"
import { about } from "@/lib/content"

const ease = [0.25, 0.1, 0.25, 1] as const

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
        >
          <motion.h2 variants={item} className="section-title mb-16">
            About
          </motion.h2>

          <motion.p variants={item} className="hero-subtitle mb-16 max-w-4xl text-foreground">
            {about.lead}
          </motion.p>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-7">
              {about.paragraphs.map((text) => (
                <motion.p key={text.slice(0, 40)} variants={item} className="body-text text-foreground-secondary">
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div variants={item}>
              <dl className="mb-12 space-y-0">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-6 border-b border-border py-4">
                    <dt className="mono text-xs uppercase tracking-widest text-foreground-tertiary">{fact.label}</dt>
                    <dd className="meta-text text-right text-foreground-secondary">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="border-l border-ctp-mauve/40 pl-6">
                <h3 className="mono mb-4 text-xs uppercase tracking-[0.15em] text-ctp-mauve">{about.quiet.title}</h3>
                <p className="project-description mb-4 text-foreground-secondary">{about.quiet.body}</p>
                <p className="project-description text-foreground-tertiary">{about.quiet.close}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
