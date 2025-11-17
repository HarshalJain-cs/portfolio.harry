/**
 * CUSTOM CURSOR EFFECTS
 * Gold gradient trail with emerald particle burst on click
 */

export interface CursorConfig {
  size: {
    default: number    // 32px
    hover: number      // 60px
  }
  trail: {
    length: 'short' | 'medium' | 'long'  // medium
    opacity: number    // 0.8 (80%)
  }
  colors: {
    default: string    // Gold gradient
    hover: string      // Gold glow
    particles: string  // Emerald
  }
  blend: string        // 'difference'
  particles: {
    count: number      // 12
    speed: number      // 2 (fast)
    life: number       // 0.5s
  }
}

export const cursorConfig: CursorConfig = {
  size: {
    default: 32,
    hover: 60,
  },
  trail: {
    length: 'medium',
    opacity: 0.8,
  },
  colors: {
    default: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(201,169,97,0.4) 50%, transparent 100%)',
    hover: 'radial-gradient(circle, rgba(212,175,55,1) 0%, rgba(201,169,97,0.6) 50%, rgba(16,185,129,0.2) 100%)',
    particles: '#10b981', // Emerald
  },
  blend: 'difference',
  particles: {
    count: 12,
    speed: 2,
    life: 0.5,
  },
}

export interface Particle {
  id: number
  x: number
  y: number
  angle: number
  velocity: number
  life: number
  maxLife: number
  size: number
}

export const createParticles = (x: number, y: number): Particle[] => {
  const particles: Particle[] = []
  const { count, speed, life } = cursorConfig.particles

  for (let i = 0; i < count; i++) {
    particles.push({
      id: Math.random(),
      x,
      y,
      angle: (Math.PI * 2 * i) / count,
      velocity: speed + Math.random() * 0.5,
      life: 0,
      maxLife: life * 1000, // Convert to ms
      size: 4 + Math.random() * 4,
    })
  }

  return particles
}

export const updateParticle = (particle: Particle, deltaTime: number): Particle => {
  const newLife = particle.life + deltaTime
  const progress = newLife / particle.maxLife

  return {
    ...particle,
    x: particle.x + Math.cos(particle.angle) * particle.velocity * (deltaTime / 16),
    y: particle.y + Math.sin(particle.angle) * particle.velocity * (deltaTime / 16),
    life: newLife,
    size: particle.size * (1 - progress),
  }
}

export const isParticleAlive = (particle: Particle): boolean => {
  return particle.life < particle.maxLife
}

// Trail positions interface
export interface TrailPosition {
  x: number
  y: number
  timestamp: number
}

export const getTrailLength = (): number => {
  switch (cursorConfig.trail.length) {
    case 'short':
      return 5
    case 'medium':
      return 10
    case 'long':
      return 15
    default:
      return 10
  }
}

// Utility function to check if device supports custom cursor
export const supportsCustomCursor = (): boolean => {
  // Disable on mobile and tablet
  if (typeof window === 'undefined') return false

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches

  return !isMobile && !hasCoarsePointer
}

export default {
  cursorConfig,
  createParticles,
  updateParticle,
  isParticleAlive,
  getTrailLength,
  supportsCustomCursor,
}
