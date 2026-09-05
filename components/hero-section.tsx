"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { site, taglines } from "@/lib/content"

const ease = [0.25, 0.1, 0.25, 1] as const

export function HeroSection() {
  const [line, setLine] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // The hero drifts up and dims as the first section takes over.
  const y = useTransform(scrollYProgress, [0, 0.12], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.25])

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setLine((n) => (n + 1) % taglines.length), 3600)
    return () => clearInterval(id)
  }, [reduceMotion])

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
  }

  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Faint grid, so the empty space reads as deliberate rather than unfinished. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(122,162,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(122,162,247,0.05) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />

      <motion.div style={reduceMotion ? undefined : { y, opacity }} className="container-xl relative">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="mono mb-6 text-xs tracking-[0.2em] text-tn-blue">
            {site.role.toUpperCase()} · {site.school.toUpperCase()}
          </motion.p>

          <motion.h1 variants={item} className="hero-title mb-8 text-foreground">
            {site.name}
          </motion.h1>

          <motion.div variants={item} className="mb-12 h-[4.5rem] sm:h-[3.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease }}
                className="hero-subtitle max-w-3xl text-foreground-secondary"
              >
                {taglines[line]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-4 text-foreground-tertiary sm:flex-row sm:gap-10">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="nav-text">{site.location}</span>
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="nav-text">{site.school}</span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.span
        aria-hidden="true"
        className="mono absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.3em] text-foreground-tertiary"
        animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        SCROLL
      </motion.span>
    </section>
  )
}
