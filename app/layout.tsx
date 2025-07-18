import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Yassine El Aidous | Software Developer & AI Enthusiast",
  description:
    "Portfolio of Yassine El Aidous, a software developer and AI enthusiast from Morocco, specializing in embedded systems, machine learning, and digital innovation.",
  metadataBase: new URL("https://yassine-portfolio.vercel.app"), // Update with your actual domain
  openGraph: {
    title: "Yassine El Aidous | Software Developer & AI Enthusiast",
    description:
      "Portfolio of Yassine El Aidous, a software developer and AI enthusiast from Morocco, specializing in embedded systems, machine learning, and digital innovation.",
    url: "https://yassine-portfolio.vercel.app", // Update with your actual domain
    siteName: "Yassine El Aidous Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yassine El Aidous Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine El Aidous | Software Developer & AI Enthusiast",
    description:
      "Portfolio of Yassine El Aidous, a software developer and AI enthusiast from Morocco, specializing in embedded systems, machine learning, and digital innovation.",
    images: ["/images/og-image.png"],
    creator: "@YassineElAidous", // Update with your actual Twitter handle
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
