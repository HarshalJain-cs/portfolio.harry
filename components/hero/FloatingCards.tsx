'use client'

/**
 * FLOATING CARDS FOR HERO SECTION
 * 4 cards with 3D tilt effect and parallax scrolling
 * Glass morphism with gold borders
 * Float animation (4s ease-in-out infinite)
 * Positioned at 4 corners around main content
 */

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiTrendingUp, FiCode, FiAward, FiUsers } from 'react-icons/fi'

interface FloatingCard {
  id: number
  icon: React.ReactNode
  label: string
  value: string
  position: string // Tailwind positioning classes
  delay: number
}

const floatingCards: FloatingCard[] = [
  {
    id: 1,
    icon: <FiTrendingUp size={24} />,
    label: 'Portfolio ROI',
    value: '+247%',
    position: 'top-[20%] left-[5%]',
    delay: 0,
  },
  {
    id: 2,
    icon: <FiCode size={24} />,
    label: 'Tech Stack',
    value: '20+',
    position: 'top-[15%] right-[8%]',
    delay: 1,
  },
  {
    id: 3,
    icon: <FiAward size={24} />,
    label: 'Certifications',
    value: '15+',
    position: 'bottom-[25%] left-[8%]',
    delay: 2,
  },
  {
    id: 4,
    icon: <FiUsers size={24} />,
    label: 'Projects',
    value: '150+',
    position: 'bottom-[20%] right-[5%]',
    delay: 3,
  },
]

export default function FloatingCards() {
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effect based on scroll
  const y1 = useTransform(scrollY, [0, 500], [0, -50])
  const y2 = useTransform(scrollY, [0, 500], [0, -30])
  const y3 = useTransform(scrollY, [0, 500], [0, -40])
  const y4 = useTransform(scrollY, [0, 500], [0, -60])

  const parallaxValues = [y1, y2, y3, y4]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {floatingCards.map((card, index) => {
        // Calculate 3D tilt based on mouse position
        const rotateX = mousePosition.y * -5
        const rotateY = mousePosition.x * 5

        return (
          <motion.div
            key={card.id}
            className={`hidden lg:block absolute ${card.position} perspective-1000`}
            style={{ y: parallaxValues[index] }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay * 0.2, duration: 0.8 }}
          >
            <motion.div
              className="bg-glass-medium backdrop-blur-glass border border-glass-gold rounded-lg p-6 shadow-gold preserve-3d"
              animate={{
                y: [0, -20, 0],
                rotateX: [rotateX - 5, rotateX + 5, rotateX - 5],
                rotateY: [rotateY - 5, rotateY + 5, rotateY - 5],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotateX: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotateY: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
            >
              <div className="flex flex-col items-center gap-3 text-center min-w-[120px]">
                <div className="text-gold-bright">{card.icon}</div>
                <div className="text-2xl font-heading font-bold text-platinum-bright font-mono">
                  {card.value}
                </div>
                <div className="text-xs text-platinum-muted uppercase tracking-wide">
                  {card.label}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </>
  )
}
