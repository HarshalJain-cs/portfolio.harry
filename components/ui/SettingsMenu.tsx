'use client'

/**
 * SETTINGS MENU
 * Dropdown menu for controlling sounds, animations, and theme
 * Accessible from top-right navigation
 * Stores preferences in localStorage via context providers
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSettings, FiVolume2, FiVolumeX, FiZap, FiZapOff, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/contexts/ThemeContext'
import { useSound } from '@/contexts/SoundContext'
import { useAnimation } from '@/contexts/AnimationContext'

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Use context hooks for global state management
  const { theme, setTheme } = useTheme()
  const { soundEnabled, toggleSound: toggleSoundContext, playClick } = useSound()
  const { animationLevel, setAnimationLevel } = useAnimation()

  const handleToggleSound = () => {
    toggleSoundContext()
    // Play a test sound when enabling (will only play if sound is being enabled)
    setTimeout(() => {
      if (!soundEnabled) {
        playClick()
      }
    }, 50)
  }

  const handleToggleAnimations = () => {
    const newLevel = animationLevel === 'none' ? 'moderate' : 'none'
    setAnimationLevel(newLevel)
  }

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    playClick()
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
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 ${soundEnabled ? 'bg-gold-main/10' : 'bg-platinum-dark/20'}`}>
                      {soundEnabled ? (
                        <FiVolume2 className="text-gold-bright" size={16} />
                      ) : (
                        <FiVolumeX className="text-platinum-muted" size={16} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-platinum-main text-sm font-medium leading-tight">
                        Sound Effects
                      </div>
                      <div className="text-platinum-dark text-xs mt-0.5">
                        {soundEnabled ? 'Enabled' : 'Disabled'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleToggleSound}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all flex-shrink-0 ${
                      soundEnabled ? 'bg-gold-main' : 'bg-platinum-dark'
                    }`}
                  >
                    <motion.span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                        soundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                      layout
                    />
                  </button>
                </div>

                {/* Animations Toggle */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 ${animationLevel !== 'none' ? 'bg-emerald-main/10' : 'bg-platinum-dark/20'}`}>
                      {animationLevel !== 'none' ? (
                        <FiZap className="text-emerald-bright" size={16} />
                      ) : (
                        <FiZapOff className="text-platinum-muted" size={16} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-platinum-main text-sm font-medium leading-tight">
                        Animations
                      </div>
                      <div className="text-platinum-dark text-xs mt-0.5">
                        {animationLevel !== 'none' ? 'Enabled' : 'Reduced'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleToggleAnimations}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all flex-shrink-0 ${
                      animationLevel !== 'none' ? 'bg-emerald-main' : 'bg-platinum-dark'
                    }`}
                  >
                    <motion.span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                        animationLevel !== 'none' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                      layout
                    />
                  </button>
                </div>

                {/* Theme Toggle */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 ${theme === 'dark' ? 'bg-platinum-main/10' : 'bg-gold-main/10'}`}>
                      {theme === 'dark' ? (
                        <FiMoon className="text-platinum-bright" size={16} />
                      ) : (
                        <FiSun className="text-gold-bright" size={16} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-platinum-main text-sm font-medium leading-tight">
                        Theme
                      </div>
                      <div className="text-platinum-dark text-xs mt-0.5">
                        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleToggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all flex-shrink-0 ${
                      theme === 'dark' ? 'bg-platinum-main' : 'bg-gold-main'
                    }`}
                  >
                    <motion.span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                        theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
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
