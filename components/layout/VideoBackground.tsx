'use client'

/**
 * VIDEO BACKGROUND
 * Autoplay looping video for hero section
 * Futuristic trading screens / stock exchange footage
 * 20% opacity platinum overlay
 * Hidden on mobile (replaced with gradient)
 */

import { useEffect, useRef, useState } from 'react'

interface VideoBackgroundProps {
  videoUrl?: string
  fallbackGradient?: boolean
}

export default function VideoBackground({
  videoUrl = '/videos/trading-screens.mp4',
  fallbackGradient = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isMobile) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      video.play().catch((err) => {
        console.warn('Video autoplay failed:', err)
        setHasError(true)
      })
    }

    const handleError = () => {
      setHasError(true)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [isMobile])

  // Show gradient on mobile or if video fails/doesn't exist
  if (isMobile || hasError || !videoUrl) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated opacity-90" />
    )
  }

  return (
    <>
      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Platinum overlay (20% opacity) */}
      <div className="absolute inset-0 bg-platinum-main opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Fallback gradient while loading */}
      {!isLoaded && fallbackGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated opacity-90" />
      )}
    </>
  )
}
