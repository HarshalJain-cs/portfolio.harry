/**
 * Animation Level Toggle
 * Allows users to select animation intensity level
 */

'use client'

import { useAnimation, AnimationLevel } from '@/contexts/AnimationContext'
import { useState } from 'react'
import { FiZap } from 'react-icons/fi'

export default function AnimationToggle() {
  const { animationLevel, setAnimationLevel } = useAnimation()
  const [isOpen, setIsOpen] = useState(false)

  const animationLevels: { value: AnimationLevel; label: string; icon: string }[] = [
    { value: 'none', label: 'None', icon: '○' },
    { value: 'conservative', label: 'Conservative', icon: '◔' },
    { value: 'moderate', label: 'Moderate', icon: '◑' },
    { value: 'aggressive', label: 'Aggressive', icon: '●' },
  ]

  const currentLevel = animationLevels.find(l => l.value === animationLevel)

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-stock-text/60 hover:text-stock-cyan transition-colors group"
        aria-label="Animation settings"
        title="Animation level"
      >
        <FiZap size={20} />

        {/* Tooltip */}
        <div className="absolute right-0 top-full mt-2 px-2 py-1 bg-stock-navy border border-stock-cyan/30 text-stock-cyan text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          Animations: {currentLevel?.label}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 bg-stock-board border-2 border-stock-navy shadow-stock-glow z-50 min-w-[180px]">
            <div className="px-3 py-2 border-b border-stock-navy/50">
              <div className="text-stock-cyan text-xs font-mono uppercase">
                Animation Level
              </div>
            </div>

            {animationLevels.map(level => (
              <button
                key={level.value}
                onClick={() => {
                  setAnimationLevel(level.value)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2.5 font-mono text-sm transition-colors flex items-center gap-3 ${
                  animationLevel === level.value
                    ? 'bg-stock-navy text-stock-cyan'
                    : 'text-stock-text/80 hover:bg-stock-navy/50 hover:text-stock-cyan'
                }`}
              >
                <span className="text-lg">{level.icon}</span>
                <span>{level.label}</span>
                {animationLevel === level.value && (
                  <span className="ml-auto text-stock-green">✓</span>
                )}
              </button>
            ))}

            <div className="px-3 py-2 border-t border-stock-navy/50 text-stock-text/40 text-xs">
              {animationLevel === 'none' && 'No animations'}
              {animationLevel === 'conservative' && 'Subtle hover effects only'}
              {animationLevel === 'moderate' && 'Balanced animations'}
              {animationLevel === 'aggressive' && 'Full animations & effects'}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
