/**
 * Sound Toggle Button
 * Toggle sound effects on/off
 */

'use client'

import { useSound } from '@/contexts/SoundContext'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

export default function SoundToggle() {
  const { soundEnabled, toggleSound, playClick } = useSound()

  const handleToggle = () => {
    toggleSound()
    // Play a sound when enabling (but not when disabling)
    if (!soundEnabled) {
      // We can't use playClick here because soundEnabled hasn't updated yet
      // The sound will be enabled after this click
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const audioContext = new (window.AudioContext ||
            (window as any).webkitAudioContext)()
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)

          oscillator.frequency.value = 600
          oscillator.type = 'sine'
          gainNode.gain.value = 0.1

          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.1)
        }
      }, 50)
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 text-stock-text/60 hover:text-stock-cyan transition-colors group"
      aria-label={`${soundEnabled ? 'Disable' : 'Enable'} sound effects`}
      title={`${soundEnabled ? 'Disable' : 'Enable'} sound effects`}
    >
      {/* Icon Container */}
      <div className="relative w-5 h-5">
        {/* Volume On Icon */}
        <FiVolume2
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            soundEnabled
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-0'
          }`}
        />
        {/* Volume Off Icon */}
        <FiVolumeX
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            !soundEnabled
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-0'
          }`}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute right-0 top-full mt-2 px-2 py-1 bg-stock-navy border border-stock-cyan/30 text-stock-cyan text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {soundEnabled ? 'Sounds ON' : 'Sounds OFF'}
      </div>
    </button>
  )
}
