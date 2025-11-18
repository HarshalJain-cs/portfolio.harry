'use client'

/**
 * BUTTON COMPONENT
 * Glass background (15%) + platinum text + colored border
 * 3 accent variants: gold, platinum, emerald
 * Hover: Glow + lift -4px + scale 1.08x + brighten 10%
 * Click: Scale 0.95x + pulse + emerald particle burst
 */

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, MouseEvent } from 'react'
import { playSound } from '@/lib/sound-manager'

export type ButtonVariant = 'gold' | 'platinum' | 'emerald'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  gold: 'border-glass-gold text-platinum-bright hover:shadow-gold-hover',
  platinum: 'border-glass-platinum text-platinum-bright hover:shadow-platinum',
  emerald: 'border-emerald-main text-emerald-bright hover:shadow-emerald',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const buttonVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.08,
    y: -4,
    filter: 'brightness(1.1)',
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

export default function Button({
  variant = 'gold',
  size = 'md',
  children,
  className = '',
  onClick,
  disabled = false,
  ...motionProps
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold'
  const glassClasses = 'bg-glass-medium backdrop-blur-glass border-2'
  const transitionClasses = 'transition-all duration-200'
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    // Play button click sound
    playSound('buttonClick')

    // Call provided onClick
    if (onClick) {
      onClick(e)
    }

    // TODO: Trigger emerald particle burst animation
  }

  return (
    <motion.button
      className={`
        ${baseClasses}
        ${glassClasses}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${transitionClasses}
        ${disabledClasses}
        ${className}
      `}
      variants={buttonVariants}
      initial="rest"
      whileHover={!disabled ? 'hover' : undefined}
      whileTap={!disabled ? 'tap' : undefined}
      onClick={handleClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}

/**
 * USAGE EXAMPLES:
 *
 * // Gold accent button (for "Explore Portfolio")
 * <Button variant="gold" onClick={() => navigate('/projects')}>
 *   Explore Portfolio
 * </Button>
 *
 * // Platinum accent button (for "Get In Touch")
 * <Button variant="platinum" onClick={() => navigate('/contact')}>
 *   Get In Touch
 * </Button>
 *
 * // Emerald accent button (for "Download Resume")
 * <Button variant="emerald" onClick={() => downloadResume()}>
 *   Download Resume
 * </Button>
 *
 * // Small size
 * <Button variant="gold" size="sm">
 *   Learn More
 * </Button>
 *
 * // Large size
 * <Button variant="platinum" size="lg">
 *   Get Started
 * </Button>
 *
 * // Disabled
 * <Button variant="gold" disabled>
 *   Coming Soon
 * </Button>
 */
