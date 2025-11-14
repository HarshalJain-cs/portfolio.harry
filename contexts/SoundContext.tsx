/**
 * Sound Context Provider
 * Manages sound effects throughout the application
 */

'use client'

import { createContext, useContext, useEffect, useState, useRef } from 'react'

interface SoundContextType {
  soundEnabled: boolean
  toggleSound: () => void
  playOpeningBell: () => void
  playTickerBeep: () => void
  playClick: () => void
  playHover: () => void
  playSuccess: () => void
  playError: () => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Audio refs for different sounds
  const openingBellRef = useRef<HTMLAudioElement | null>(null)
  const tickerBeepRef = useRef<HTMLAudioElement | null>(null)
  const clickRef = useRef<HTMLAudioElement | null>(null)
  const hoverRef = useRef<HTMLAudioElement | null>(null)
  const successRef = useRef<HTMLAudioElement | null>(null)
  const errorRef = useRef<HTMLAudioElement | null>(null)

  // Initialize sound preference from localStorage
  useEffect(() => {
    setMounted(true)
    const savedSoundPreference = localStorage.getItem('soundEnabled')
    if (savedSoundPreference !== null) {
      setSoundEnabled(savedSoundPreference === 'true')
    }

    // Initialize audio elements
    if (typeof window !== 'undefined') {
      // Note: These sounds would need to be created/sourced
      // For now, we'll use Web Audio API to generate simple beeps
      openingBellRef.current = new Audio()
      tickerBeepRef.current = new Audio()
      clickRef.current = new Audio()
      hoverRef.current = new Audio()
      successRef.current = new Audio()
      errorRef.current = new Audio()
    }
  }, [])

  // Save sound preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('soundEnabled', soundEnabled.toString())
    }
  }, [soundEnabled, mounted])

  const toggleSound = () => {
    setSoundEnabled(prev => !prev)
  }

  // Generate beep sound using Web Audio API
  const generateBeep = (
    frequency: number,
    duration: number,
    volume: number = 0.1
  ) => {
    if (!soundEnabled || typeof window === 'undefined') return

    try {
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = 'sine'
      gainNode.gain.value = volume

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration / 1000)
    } catch (error) {
      console.error('Error playing sound:', error)
    }
  }

  const playOpeningBell = () => {
    if (!soundEnabled) return
    // Bell sound: Combination of frequencies for a bell-like tone
    generateBeep(800, 200, 0.15)
    setTimeout(() => generateBeep(600, 300, 0.1), 100)
    setTimeout(() => generateBeep(400, 400, 0.08), 200)
  }

  const playTickerBeep = () => {
    if (!soundEnabled) return
    // Quick high-pitched beep
    generateBeep(1200, 50, 0.05)
  }

  const playClick = () => {
    if (!soundEnabled) return
    // Short click sound
    generateBeep(600, 30, 0.08)
  }

  const playHover = () => {
    if (!soundEnabled) return
    // Very subtle hover sound
    generateBeep(800, 20, 0.03)
  }

  const playSuccess = () => {
    if (!soundEnabled) return
    // Ascending tones for success
    generateBeep(400, 80, 0.1)
    setTimeout(() => generateBeep(600, 80, 0.1), 80)
    setTimeout(() => generateBeep(800, 120, 0.1), 160)
  }

  const playError = () => {
    if (!soundEnabled) return
    // Descending tones for error
    generateBeep(600, 100, 0.12)
    setTimeout(() => generateBeep(400, 150, 0.12), 100)
  }

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playOpeningBell,
        playTickerBeep,
        playClick,
        playHover,
        playSuccess,
        playError,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  const context = useContext(SoundContext)
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}
