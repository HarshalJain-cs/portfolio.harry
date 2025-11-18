'use client'

/**
 * GLASS CARD COMPONENT
 * 5 variants: subtle, luxury, success, data, interactive
 * Based on glass morphism design system
 */

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

export type GlassCardVariant = 'subtle' | 'luxury' | 'success' | 'data' | 'interactive'

export interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: GlassCardVariant
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const variantStyles: Record<GlassCardVariant, string> = {
  // 8% opacity, 16px blur
  subtle: 'bg-glass-subtle backdrop-blur-glass border border-glass-white',

  // 15% opacity, gold border 18%, gold shadow
  luxury: 'bg-glass-medium backdrop-blur-glass border border-glass-gold shadow-gold',

  // 15% opacity, emerald border, emerald shadow
  success: 'bg-glass-medium backdrop-blur-glass border border-emerald-main/20 shadow-emerald',

  // 10% opacity, 16px blur
  data: 'bg-[rgba(255,255,255,0.10)] backdrop-blur-glass border border-glass-white',

  // Interactive with hover effects
  interactive: 'bg-glass-medium backdrop-blur-glass border border-glass-platinum cursor-pointer',
}

const hoverVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
}

export default function GlassCard({
  variant = 'subtle',
  children,
  className = '',
  hover = false,
  onClick,
  ...motionProps
}: GlassCardProps) {
  const baseClasses = 'rounded-lg p-6 transition-all duration-300'
  const variantClasses = variantStyles[variant]

  // Add hover opacity increase (2%) for interactive variant
  const hoverClasses = hover || variant === 'interactive'
    ? 'hover:bg-[rgba(255,255,255,0.17)] hover:backdrop-blur-[20px]'
    : ''

  const shouldAnimate = hover || variant === 'interactive'

  const content = shouldAnimate ? (
    <motion.div
      className={`${baseClasses} ${variantClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      {...motionProps}
    >
      {children}
    </motion.div>
  ) : (
    <div
      className={`${baseClasses} ${variantClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )

  return content
}

/**
 * USAGE EXAMPLES:
 *
 * // Subtle card (8% opacity)
 * <GlassCard variant="subtle">
 *   <p>Content here</p>
 * </GlassCard>
 *
 * // Luxury card (gold border + shadow)
 * <GlassCard variant="luxury">
 *   <h3>Premium Content</h3>
 * </GlassCard>
 *
 * // Success card (emerald theme)
 * <GlassCard variant="success">
 *   <p>+247% ROI</p>
 * </GlassCard>
 *
 * // Interactive card (with hover effects)
 * <GlassCard variant="interactive" hover onClick={() => console.log('clicked')}>
 *   <p>Click me!</p>
 * </GlassCard>
 *
 * // Data card
 * <GlassCard variant="data">
 *   <div>Stats and metrics</div>
 * </GlassCard>
 */
