/**
 * Animated Number Component
 * Counts up to a target number with animation
 * Only animates in moderate/aggressive modes
 */

'use client'

import { useEffect, useState, useRef } from 'react'
import { useAnimation } from '@/contexts/AnimationContext'

interface AnimatedNumberProps {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedNumber({
  value,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedNumberProps) {
  const { animationLevel, hasAnimations } = useAnimation()
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Skip animation in conservative mode or if animations disabled
    if (animationLevel === 'conservative' || animationLevel === 'none') {
      setDisplayValue(value)
      return
    }

    // Only animate once when element comes into view
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          animateValue()
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated, animationLevel])

  const animateValue = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateValue = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (value - startValue) * easeOut

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(updateValue)
  }

  const formattedValue = displayValue.toFixed(decimals)

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
