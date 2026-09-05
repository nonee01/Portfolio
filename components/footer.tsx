"use client"

import { Coffee } from "lucide-react"
import { site } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="meta-text text-foreground-tertiary">
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={site.coffee}
          target="_blank"
          rel="noopener noreferrer"
          className="meta-text group inline-flex items-center gap-2 text-foreground-tertiary transition-colors duration-300 hover:text-foreground"
        >
          <Coffee className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          Buy me a coffee
        </a>
      </div>
    </footer>
  )
}
