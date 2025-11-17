'use client'

/**
 * SETTINGS MENU
 * Dropdown menu for controlling sounds, animations, and theme
 * Accessible from top-right navigation
 * Stores preferences in localStorage
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSettings, FiVolume2, FiVolumeX, FiZap, FiZapOff, FiSun, FiMoon } from 'react-icons/fi'

interface Settings {
  soundEnabled: boolean
  animationsEnabled: boolean
  theme: 'dark' | 'light'
}

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>({
    soundEnabled: false, // OFF by default per spec
    animationsEnabled: true,
    theme: 'dark',
  })

  // Load settings from localStorage on mount
  useEffect(() => {
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
    localStorage.setItem('portfolio-settings', JSON.stringify(settings))
  }, [settings])

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

  return (
    <div className="relative">
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-platinum-main hover:text-gold-bright transition-colors relative"
        aria-label="Settings"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiSettings size={20} />
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="absolute top-full right-0 mt-2 w-64 bg-glass-medium backdrop-blur-glass-md border border-glass-platinum rounded-lg shadow-lg z-50 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-4">
                {/* Header */}
                <div className="border-b border-glass-platinum pb-3">
                  <h3 className="text-platinum-bright font-heading font-semibold">
                    Settings
                  </h3>
                </div>

                {/* Sound Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.soundEnabled ? (
                      <FiVolume2 className="text-gold-bright" size={20} />
                    ) : (
                      <FiVolumeX className="text-platinum-muted" size={20} />
                    )}
                    <div>
                      <div className="text-platinum-main text-sm font-medium">
                        Sound Effects
                      </div>
                      <div className="text-platinum-dark text-xs">
                        {settings.soundEnabled ? 'Enabled' : 'Disabled'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleSound}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.soundEnabled ? 'bg-gold-main' : 'bg-platinum-dark'
                    }`}
                  >
                    <motion.span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                      layout
                    />
                  </button>
                </div>

                {/* Animations Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.animationsEnabled ? (
                      <FiZap className="text-emerald-bright" size={20} />
                    ) : (
                      <FiZapOff className="text-platinum-muted" size={20} />
                    )}
                    <div>
                      <div className="text-platinum-main text-sm font-medium">
                        Animations
                      </div>
                      <div className="text-platinum-dark text-xs">
                        {settings.animationsEnabled ? 'Enabled' : 'Reduced'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleAnimations}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.animationsEnabled ? 'bg-emerald-main' : 'bg-platinum-dark'
                    }`}
                  >
                    <motion.span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.animationsEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                      layout
                    />
                  </button>
                </div>

                {/* Theme Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.theme === 'dark' ? (
                      <FiMoon className="text-platinum-bright" size={20} />
                    ) : (
                      <FiSun className="text-gold-bright" size={20} />
                    )}
                    <div>
                      <div className="text-platinum-main text-sm font-medium">
                        Theme
                      </div>
                      <div className="text-platinum-dark text-xs">
                        {settings.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.theme === 'dark' ? 'bg-platinum-main' : 'bg-gold-main'
                    }`}
                  >
                    <motion.span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                      layout
                    />
                  </button>
                </div>

                {/* Footer Note */}
                <div className="pt-3 border-t border-glass-platinum">
                  <p className="text-platinum-dark text-xs">
                    Preferences are saved locally
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
