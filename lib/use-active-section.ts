"use client"

import { useEffect, useState } from "react"

// Tracks which section owns the middle of the viewport, for the nav underline.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return active
}
