"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/content"

const ease = [0.25, 0.1, 0.25, 1] as const

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease }}
          className="section-title mb-4"
        >
          Stack
        </motion.h2>

        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            className="grid grid-cols-1 gap-2 border-t border-border py-7 md:grid-cols-[16rem_1fr] md:gap-10"
          >
            <h3 className="mono pt-1 text-xs uppercase tracking-[0.15em] text-foreground-tertiary">{group.title}</h3>
            <p className="body-text text-foreground-secondary">{group.items.join("  ·  ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
