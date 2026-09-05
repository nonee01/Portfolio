"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { site } from "@/lib/content"
import { navItems } from "./navbar"

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-tn-bg md:hidden"
        >
          <div className="container-xl flex h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <span className="mono text-sm tracking-widest text-foreground">{site.initials}</span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="text-3xl font-medium text-foreground"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <a href={`mailto:${site.email}`} className="meta-text text-foreground-tertiary">
              {site.email}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
