/**
 * Fade In Animation Component
 * Fades in content when it enters viewport
 * Respects user's animation preference
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import { useAnimation } from '@/contexts/AnimationContext'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 500,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const { animationLevel } = useAnimation()
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip animation in conservative or none modes
    if (animationLevel === 'conservative' || animationLevel === 'none') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, animationLevel])

  // If animations disabled, just show content
  if (animationLevel === 'conservative' || animationLevel === 'none') {
    return <div className={className}>{children}</div>
  }

  // Calculate transform based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(20px)'
        case 'down':
          return 'translateY(-20px)'
        case 'left':
          return 'translateX(20px)'
        case 'right':
          return 'translateX(-20px)'
        default:
          return 'none'
      }
    }
    return 'none'
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}
