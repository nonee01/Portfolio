import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { site } from "@/lib/content"
import { JsonLd } from "./json-ld"
import "./globals.css"

const title = `${site.name} · ${site.role}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1b26",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  )
}
