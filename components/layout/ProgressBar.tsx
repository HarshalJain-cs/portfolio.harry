'use client'

/**
 * SCROLL PROGRESS BAR
 * Position: Bottom (4px height)
 * Color: Solid gold with glow
 * Smooth easing (300ms transition)
 */

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 bg-gold-main shadow-gold z-9999 origin-left"
      style={{
        scaleX,
      }}
    />
  )
}
