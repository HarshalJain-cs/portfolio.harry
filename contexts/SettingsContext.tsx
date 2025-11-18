'use client'

/**
 * Settings Context
 * Provides global access to user settings (animations, sounds, theme)
 * Settings are synced with localStorage
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Settings {
  soundEnabled: boolean
  animationsEnabled: boolean
  theme: 'dark' | 'light'
}

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
  toggleSound: () => void
  toggleAnimations: () => void
  toggleTheme: () => void
}

const defaultSettings: Settings = {
  soundEnabled: false, // OFF by default
  animationsEnabled: true,
  theme: 'dark',
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [mounted, setMounted] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedSettings = localStorage.getItem('portfolio-settings')
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (e) {
        console.error('Failed to parse settings:', e)
      }
    }
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-settings', JSON.stringify(settings))

      // Apply theme to document
      if (settings.theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }

      // Apply reduce-motion preference
      if (!settings.animationsEnabled) {
        document.documentElement.style.setProperty('--animation-duration', '0s')
      } else {
        document.documentElement.style.removeProperty('--animation-duration')
      }
    }
  }, [settings, mounted])

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  const toggleSound = () => {
    setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))
  }

  const toggleAnimations = () => {
    setSettings(prev => ({ ...prev, animationsEnabled: !prev.animationsEnabled }))
  }

  const toggleTheme = () => {
    setSettings(prev => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark',
    }))
  }

  const value: SettingsContextType = {
    settings,
    updateSettings,
    toggleSound,
    toggleAnimations,
    toggleTheme,
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}
