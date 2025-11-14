/**
 * Animation Context Provider
 * Manages animation level preference (conservative, moderate, aggressive)
 */

'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type AnimationLevel = 'conservative' | 'moderate' | 'aggressive' | 'none'

interface AnimationContextType {
  animationLevel: AnimationLevel
  setAnimationLevel: (level: AnimationLevel) => void
  // Helper flags for conditional rendering
  isConservative: boolean
  isModerate: boolean
  isAggressive: boolean
  hasAnimations: boolean
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationLevel, setAnimationLevelState] =
    useState<AnimationLevel>('moderate')
  const [mounted, setMounted] = useState(false)

  // Initialize animation preference from localStorage
  useEffect(() => {
    setMounted(true)
    const savedAnimationLevel = localStorage.getItem(
      'animationLevel'
    ) as AnimationLevel | null
    if (savedAnimationLevel) {
      setAnimationLevelState(savedAnimationLevel)
    }
  }, [])

  // Save animation preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('animationLevel', animationLevel)

      // Update data attribute on html element for CSS-based animations
      document.documentElement.setAttribute('data-animation', animationLevel)
    }
  }, [animationLevel, mounted])

  const setAnimationLevel = (level: AnimationLevel) => {
    setAnimationLevelState(level)
  }

  // Helper flags
  const isConservative = animationLevel === 'conservative'
  const isModerate = animationLevel === 'moderate'
  const isAggressive = animationLevel === 'aggressive'
  const hasAnimations = animationLevel !== 'none'

  return (
    <AnimationContext.Provider
      value={{
        animationLevel,
        setAnimationLevel,
        isConservative,
        isModerate,
        isAggressive,
        hasAnimations,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}
