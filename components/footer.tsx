"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <p className="meta-text text-foreground-secondary">
            Built with passion for innovation by <span className="text-foreground">Yassine El Aidous</span>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
