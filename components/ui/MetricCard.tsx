'use client'

/**
 * METRIC CARD COMPONENT
 * Glass card with icon + animated number + label
 * Used for dashboard metrics and hero metrics row
 * Features: Animated counter (1s ease-out), color pulse, scale pulse, glow pulse, particle burst
 */

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, ReactNode } from 'react'
import GlassCard from './GlassCard'

export interface MetricCardProps {
  icon: ReactNode
  value: number | string
  label: string
  variant?: 'emerald' | 'platinum' | 'gold'
  prefix?: string
  suffix?: string
  animate?: boolean
  className?: string
  horizontal?: boolean  // Icon + number + label in row (for hero metrics)
}

// Color variants
const colorStyles = {
  emerald: {
    icon: 'text-emerald-bright',
    value: 'text-emerald-bright',
    glow: 'drop-shadow(0 0 20px rgba(16,185,129,0.8))',
  },
  platinum: {
    icon: 'text-platinum-bright',
    value: 'text-platinum-bright',
    glow: 'drop-shadow(0 0 15px rgba(226,232,240,0.6))',
  },
  gold: {
    icon: 'text-gold-bright',
    value: 'text-gold-bright',
    glow: 'drop-shadow(0 0 20px rgba(201,169,97,0.6))',
  },
}

export default function MetricCard({
  icon,
  value,
  label,
  variant = 'platinum',
  prefix = '',
  suffix = '',
  animate = true,
  className = '',
  horizontal = false,
}: MetricCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.25 })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 80,
  })

  const colors = colorStyles[variant]

  useEffect(() => {
    if (isInView && animate && typeof value === 'number') {
      // Animate from 80% of value to 100%
      const startValue = Math.floor(value * 0.8)
      motionValue.set(startValue)

      // Animate to final value
      setTimeout(() => {
        motionValue.set(value)
      }, 100)
    }
  }, [isInView, value, animate, motionValue])

  const displayValue = typeof value === 'number' && animate
    ? Math.round(springValue.get())
    : value

  const layoutClasses = horizontal
    ? 'flex flex-row items-center gap-4'
    : 'flex flex-col items-center text-center gap-3'

  return (
    <div ref={cardRef}>
      <GlassCard
        variant={variant === 'emerald' ? 'success' : 'data'}
        className={`${layoutClasses} ${className}`}
      >
        {/* Icon */}
        <motion.div
          className={`flex-shrink-0 ${colors.icon}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="text-2xl md:text-3xl">{icon}</div>
        </motion.div>

        {/* Value + Label */}
        <div className={horizontal ? 'flex-1' : 'w-full'}>
          {/* Animated Number */}
          <motion.div
            className={`font-mono font-bold ${colors.value} ${horizontal ? 'text-2xl md:text-3xl' : 'text-metric'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: [0.8, 1.1, 1],
                    filter: [
                      'brightness(1)',
                      'brightness(1.3)',
                      'brightness(1)',
                      colors.glow,
                      'brightness(1)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: 'easeOut',
              times: [0, 0.5, 0.8, 0.9, 1],
            }}
          >
            {prefix}
            {typeof value === 'number' && animate ? (
              <motion.span>{Math.round(springValue.get())}</motion.span>
            ) : (
              displayValue
            )}
            {suffix}
          </motion.div>

          {/* Label */}
          <motion.div
            className={`text-platinum-muted ${horizontal ? 'text-sm' : 'text-base'} uppercase tracking-wide mt-1`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {label}
          </motion.div>
        </div>

        {/* Divider (only in horizontal layout) */}
        {horizontal && (
          <div className="w-px h-12 bg-glass-platinum opacity-30" />
        )}
      </GlassCard>
    </div>
  )
}

/**
 * USAGE EXAMPLES:
 *
 * // Emerald metric (for positive values like ROI)
 * <MetricCard
 *   icon={<FiDollarSign />}
 *   value={247}
 *   label="Portfolio ROI"
 *   variant="emerald"
 *   prefix="+"
 *   suffix="%"
 *   animate
 * />
 *
 * // Platinum metric (for neutral stats)
 * <MetricCard
 *   icon={<FiCode />}
 *   value={95}
 *   label="Technical Proficiency"
 *   variant="platinum"
 *   suffix="%"
 * />
 *
 * // Gold metric (for achievements)
 * <MetricCard
 *   icon={<FiAward />}
 *   value={15}
 *   label="Certifications"
 *   variant="gold"
 *   suffix="+"
 * />
 *
 * // Horizontal layout (for hero metrics row)
 * <MetricCard
 *   icon={<FiTrendingUp />}
 *   value="$2M+"
 *   label="Value Delivered"
 *   variant="emerald"
 *   horizontal
 * />
 *
 * // Non-animated string value
 * <MetricCard
 *   icon={<FiGithub />}
 *   value="150+"
 *   label="Projects"
 *   variant="platinum"
 *   animate={false}
 * />
 */
