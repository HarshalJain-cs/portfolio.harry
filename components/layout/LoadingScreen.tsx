'use client'

/**
 * LOADING SCREEN
 * HJ logo with blur animation + animated particles background
 * Duration: 2 seconds total
 */

import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import { loadingLogoAnimation, particleAnimation } from '@/lib/animations'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function LoadingScreen({
  onComplete,
  duration = 2000
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) {
        setTimeout(onComplete, 600) // Wait for exit animation
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-10000 flex items-center justify-center bg-bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gold-main"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                custom={i * 0.5}
                variants={particleAnimation}
                initial="initial"
                animate="animate"
              />
            ))}
          </div>

          {/* HJ Logo with blur animation */}
          <motion.div
            variants={loadingLogoAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Logo size="xl" animated={false} glowOnHover={false} />
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="absolute bottom-1/4 text-platinum-muted font-mono text-sm uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
