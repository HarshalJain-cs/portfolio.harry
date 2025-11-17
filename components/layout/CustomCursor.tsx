'use client'

/**
 * CUSTOM CURSOR
 * Gold gradient trail (32px → 60px on hover)
 * Emerald particle burst on click (12 particles, fast, 0.5s)
 * Disabled on mobile/tablet
 */

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { supportsCustomCursor, createParticles, updateParticle, isParticleAlive, type Particle } from '@/lib/cursor-effects'

export default function CustomCursor() {
  const [isSupported, setIsSupported] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, { damping: 25, stiffness: 400 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 400 })

  useEffect(() => {
    const supported = supportsCustomCursor()
    setIsSupported(supported)

    if (!supported) return

    // Hide default cursor
    document.body.classList.add('custom-cursor')

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleClick = (e: MouseEvent) => {
      // Create emerald particle burst
      const newParticles = createParticles(e.clientX, e.clientY)
      setParticles(newParticles)

      // Animate particles
      const startTime = Date.now()
      const animateParticles = () => {
        const elapsed = Date.now() - startTime
        const deltaTime = 16 // Assume 60fps

        setParticles(prev => {
          const updated = prev
            .map(p => updateParticle(p, deltaTime))
            .filter(p => isParticleAlive(p))

          if (updated.length > 0) {
            requestAnimationFrame(animateParticles)
          }
          return updated
        })
      }

      requestAnimationFrame(animateParticles)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      )
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('click', handleClick)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isSupported) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9998 rounded-full mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          background: isHovering
            ? 'radial-gradient(circle, rgba(212,175,55,1) 0%, rgba(201,169,97,0.6) 50%, rgba(16,185,129,0.2) 100%)'
            : 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(201,169,97,0.4) 50%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Particle burst */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-9998 rounded-full bg-emerald-main"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos(particle.angle) * 100,
            y: Math.sin(particle.angle) * 100,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}
