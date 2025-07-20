"use client"

import { motion } from "framer-motion"
import { Coffee } from 'lucide-react';

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
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <p className="meta-text text-foreground-secondary">
                Built with passion for innovation by <span className="text-foreground">Yassine El Aidous</span>
              </p>
              <a
                href="https://coff.ee/elaidousyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground/90 transition-colors duration-300 group"
              >
                <Coffee className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Buy me a coffee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
