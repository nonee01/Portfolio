"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/content"

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <div className="flex items-baseline gap-5">
        <span className="mono text-xs text-ctp-mauve">{String(index + 1).padStart(2, "0")}</span>
        <span className="mono text-xs uppercase tracking-[0.15em] text-foreground-tertiary">{project.kind}</span>
      </div>

      <h3 className="project-title mt-6 text-foreground transition-colors duration-300 group-hover:text-tn-blue">
        {project.title}
      </h3>

      <p className="project-description mt-4 text-foreground-secondary">{project.blurb}</p>

      <p className="mono mt-auto pt-6 text-xs leading-relaxed text-foreground-tertiary">
        {project.stack.join("  ·  ")}
      </p>

      <span className="mono mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em]">
        {project.repo ? (
          <span className="border-b border-tn-blue/40 pb-0.5 text-tn-blue transition-colors duration-300 group-hover:border-tn-blue">
            Source
          </span>
        ) : (
          <span className="text-foreground-tertiary">Not public</span>
        )}
        {project.repo && (
          <ArrowUpRight className="h-3 w-3 text-tn-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </span>
    </>
  )

  const className =
    "group flex h-full w-[78vw] shrink-0 flex-col overflow-hidden border-l border-border pl-8 pr-10 sm:w-[54vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw]"

  return project.repo ? (
    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <article className={className}>{body}</article>
  )
}

export function HorizontalProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const reduceMotion = useReducedMotion()

  // Measure the real overflow instead of guessing a percentage, so the track
  // always lands on the last panel no matter the breakpoint.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () =>
      setDistance(Math.max(0, track.scrollWidth - document.documentElement.clientWidth))

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener("resize", measure)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const smoothX = useSpring(x, { stiffness: 90, damping: 26, mass: 0.4 })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })

  if (reduceMotion) {
    return (
      <section id="projects" className="section-spacing">
        <div className="container-xl">
          <h2 className="section-title mb-16">Selected work</h2>
          <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <div key={project.id} className="min-h-[24rem] [&>*]:w-full">
                <ProjectPanel project={project} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    // Scroll length is the viewport plus however far the track has to travel,
    // which keeps the horizontal speed roughly constant across screen sizes.
    <section id="projects" ref={sectionRef} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col gap-6 overflow-hidden pb-8 pt-24">
        <div className="container-xl flex shrink-0 items-baseline justify-between">
          <h2 className="section-title">Selected work</h2>
          <span className="mono hidden text-xs text-foreground-tertiary sm:block">{projects.length} entries</span>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x: smoothX }}
          className="flex min-h-0 flex-1 pl-6 pr-6 md:pl-16 xl:pl-32"
        >
          {projects.map((project, i) => (
            <ProjectPanel key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        <div className="container-xl shrink-0">
          <div className="h-px w-full bg-tn-gutter/60">
            <motion.div
              className="h-px origin-left bg-gradient-to-r from-tn-blue to-ctp-mauve"
              style={{ scaleX: progress }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
