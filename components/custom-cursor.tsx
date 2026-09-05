"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 })

  useEffect(() => {
    // Only for real pointers: a touch screen has no cursor to replace.
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)

    const move = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)

      const target = event.target as HTMLElement | null
      setHovering(Boolean(target?.closest("a, button, [role='button']")))
    }

    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div
        className="cursor-outline"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 1 : 0.6 }}
        transition={{ duration: 0.25 }}
      />
    </>
  )
}
