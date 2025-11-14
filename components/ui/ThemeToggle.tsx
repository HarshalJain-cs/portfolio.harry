/**
 * Theme Toggle Button
 * Stock exchange themed dark/light mode switch
 */

'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 text-stock-text/60 hover:text-stock-cyan transition-colors group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Icon Container with rotation animation */}
      <div className="relative w-5 h-5">
        {/* Sun Icon (visible in dark mode) */}
        <FiSun
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-0'
          }`}
        />
        {/* Moon Icon (visible in light mode) */}
        <FiMoon
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute right-0 top-full mt-2 px-2 py-1 bg-stock-navy border border-stock-cyan/30 text-stock-cyan text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  )
}
