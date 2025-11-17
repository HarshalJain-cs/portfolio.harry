'use client'

/**
 * BADGE COMPONENT
 * Status badges for different states and metrics
 * Variants: live (emerald), achievement (gold), tech (glass), completion (platinum checkmark)
 */

import { ReactNode } from 'react'
import { FiCheck } from 'react-icons/fi'

export type BadgeVariant = 'live' | 'achievement' | 'tech' | 'completion' | 'neutral'

export interface BadgeProps {
  variant?: BadgeVariant
  children?: ReactNode
  className?: string
  icon?: ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  // Emerald background + emerald text (for "Live" status)
  live: 'bg-emerald-main/20 text-emerald-bright border border-emerald-main/30',

  // Gold border + gold text (for achievements)
  achievement: 'bg-transparent text-gold-bright border border-gold-main',

  // Glass background + muted text (for tech stack)
  tech: 'bg-glass-subtle backdrop-blur-glass text-platinum-dark border border-glass-white',

  // Platinum checkmark (for completion)
  completion: 'bg-transparent text-platinum-main border border-platinum-muted',

  // Neutral
  neutral: 'bg-glass-light backdrop-blur-glass text-platinum-muted border border-glass-platinum',
}

export default function Badge({
  variant = 'neutral',
  children,
  className = '',
  icon,
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wide'

  // Show checkmark for completion variant if no icon provided
  const displayIcon = icon || (variant === 'completion' ? <FiCheck size={12} /> : null)

  return (
    <span className={`${baseClasses} ${variantStyles[variant]} ${className}`}>
      {displayIcon && <span className="flex-shrink-0">{displayIcon}</span>}
      {children}
    </span>
  )
}

/**
 * USAGE EXAMPLES:
 *
 * // Live status badge (emerald)
 * <Badge variant="live">Live</Badge>
 *
 * // Achievement badge (gold)
 * <Badge variant="achievement">Winner</Badge>
 *
 * // Tech stack badge (glass + muted)
 * <Badge variant="tech">React</Badge>
 * <Badge variant="tech">TypeScript</Badge>
 *
 * // Completion badge (platinum checkmark)
 * <Badge variant="completion">Completed</Badge>
 *
 * // Custom icon
 * <Badge variant="achievement" icon={<Trophy size={12} />}>
 *   Top Performer
 * </Badge>
 *
 * // Neutral badge
 * <Badge variant="neutral">Development</Badge>
 */
