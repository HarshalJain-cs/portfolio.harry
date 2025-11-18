'use client'

/**
 * HJ MONOGRAM LOGO
 * Overlapping H + J with gold gradient, shimmer, glow on hover, 3D depth
 * Sizes: 16px (favicon), 60px (nav), 120px (hero), 48px (footer)
 */

import { motion } from 'framer-motion'

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'  // sm=48px, md=60px, lg=120px, xl=150px
  className?: string
  animated?: boolean
  glowOnHover?: boolean
}

const sizeMap = {
  sm: { width: 48, height: 48, fontSize: 32 },
  md: { width: 60, height: 60, fontSize: 40 },
  lg: { width: 120, height: 120, fontSize: 80 },
  xl: { width: 150, height: 150, fontSize: 100 },
}

export default function Logo({
  size = 'md',
  className = '',
  animated = true,
  glowOnHover = true,
}: LogoProps) {
  const { width, height, fontSize } = sizeMap[size]

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={glowOnHover ? { scale: 1.05, filter: 'drop-shadow(0 0 20px rgba(201,169,97,0.8))' } : {}}
    >
      {/* SVG Logo */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? 'logo-animated' : ''}
      >
        <defs>
          {/* Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#c9a961" />
            <stop offset="100%" stopColor="#8b7355" />
          </linearGradient>

          {/* Shimmer Gradient (for animation) */}
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="transparent" />
            <animate
              attributeName="x1"
              from="-200%"
              to="200%"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from="0%"
              to="400%"
              dur="3s"
              repeatCount="indefinite"
            />
          </linearGradient>

          {/* Drop Shadow Filter (3D depth) */}
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="2" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Letter H (behind) */}
        <text
          x="50"
          y="140"
          fontSize={fontSize}
          fontFamily="Syne, sans-serif"
          fontWeight="800"
          fill="url(#goldGradient)"
          filter="url(#dropShadow)"
          opacity="0.9"
        >
          H
        </text>

        {/* Letter J (in front, overlapping) */}
        <text
          x="90"
          y="140"
          fontSize={fontSize}
          fontFamily="Syne, sans-serif"
          fontWeight="800"
          fill="url(#goldGradient)"
          filter="url(#dropShadow)"
        >
          J
        </text>

        {/* Shimmer overlay (if animated) */}
        {animated && (
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill="url(#shimmer)"
            opacity="0.3"
          />
        )}
      </svg>

      <style jsx>{`
        .logo-animated {
          animation: subtle-pulse 4s ease-in-out infinite;
        }

        @keyframes subtle-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </motion.div>
  )
}

/**
 * USAGE EXAMPLES:
 *
 * // Navigation (60px)
 * <Logo size="md" />
 *
 * // Hero (120px)
 * <Logo size="lg" animated glowOnHover />
 *
 * // Footer (48px)
 * <Logo size="sm" animated={false} />
 *
 * // Favicon (use size sm and export as PNG)
 * <Logo size="sm" animated={false} />
 */
