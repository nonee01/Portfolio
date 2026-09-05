"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { site } from "@/lib/content"
import { useActiveSection } from "@/lib/use-active-section"
import { MobileMenu } from "./mobile-menu"

export const navItems = [
  { name: "About", id: "about" },
  { name: "Work", id: "projects" },
  { name: "Stack", id: "skills" },
  { name: "Contact", id: "contact" },
]

const sectionIds = ["hero", ...navItems.map((item) => item.id)]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 py-6 transition-all duration-500 md:py-8 ${
          scrolled ? "border-b border-border bg-tn-bg/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          <a href="#hero" className="mono text-sm font-medium tracking-widest text-foreground">
            {site.initials}
          </a>

          <nav className="hidden items-center gap-12 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-text relative transition-colors duration-300 ${
                  active === item.id ? "text-foreground" : "text-foreground-tertiary hover:text-foreground-secondary"
                }`}
              >
                {item.name}
                {active === item.id && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 h-px w-full bg-tn-blue" />
                )}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-tn-blue md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
