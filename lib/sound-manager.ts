/**
 * SOUND MANAGER
 * Audio system with volume control and localStorage persistence
 * Sounds: OFF by default, user must enable
 */

export interface SoundConfig {
  enabled: boolean
  volumes: {
    master: number      // 50% (0-100)
    openingBell: number // 60%
    cardFlip: number    // 30%
    cashRegister: number // 70%
    whoosh: number      // 70%
    buttonClick: number // 70%
    successChime: number // 70%
  }
}

export const defaultSoundConfig: SoundConfig = {
  enabled: false, // OFF by default
  volumes: {
    master: 50,
    openingBell: 60,
    cardFlip: 30,
    cashRegister: 70,
    whoosh: 70,
    buttonClick: 70,
    successChime: 70,
  },
}

// Sound file paths (to be added in /public/sounds/)
export const soundPaths = {
  openingBell: '/sounds/opening-bell.mp3',
  cardFlip: '/sounds/card-flip.mp3',
  cashRegister: '/sounds/cash-register.mp3',
  whoosh: '/sounds/whoosh.mp3',
  buttonClick: '/sounds/button-click.mp3',
  successChime: '/sounds/success-chime.mp3',
}

export type SoundType = keyof typeof soundPaths

class SoundManager {
  private sounds: Map<SoundType, HTMLAudioElement> = new Map()
  private config: SoundConfig = defaultSoundConfig
  private initialized: boolean = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadConfig()
    }
  }

  // Load config from localStorage
  private loadConfig(): void {
    try {
      const stored = localStorage.getItem('soundConfig')
      if (stored) {
        this.config = { ...defaultSoundConfig, ...JSON.parse(stored) }
      }
    } catch (error) {
      console.warn('Failed to load sound config:', error)
    }
  }

  // Save config to localStorage
  private saveConfig(): void {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(this.config))
    } catch (error) {
      console.warn('Failed to save sound config:', error)
    }
  }

  // Initialize audio elements
  public init(): void {
    if (this.initialized || typeof window === 'undefined') return

    Object.entries(soundPaths).forEach(([key, path]) => {
      const audio = new Audio(path)
      audio.preload = 'auto'
      this.sounds.set(key as SoundType, audio)
    })

    this.initialized = true
  }

  // Play a sound
  public play(soundType: SoundType): void {
    if (!this.config.enabled || !this.initialized) return

    const audio = this.sounds.get(soundType)
    if (!audio) return

    // Calculate final volume
    const masterVol = this.config.volumes.master / 100
    const soundVol = this.config.volumes[soundType] / 100
    audio.volume = masterVol * soundVol

    // Clone and play to allow overlapping sounds
    const clone = audio.cloneNode() as HTMLAudioElement
    clone.volume = audio.volume
    clone.play().catch((err) => {
      console.warn(`Failed to play ${soundType}:`, err)
    })
  }

  // Toggle sound on/off
  public toggle(): boolean {
    this.config.enabled = !this.config.enabled
    this.saveConfig()
    return this.config.enabled
  }

  // Enable sounds
  public enable(): void {
    this.config.enabled = true
    this.saveConfig()
  }

  // Disable sounds
  public disable(): void {
    this.config.enabled = false
    this.saveConfig()
  }

  // Check if enabled
  public isEnabled(): boolean {
    return this.config.enabled
  }

  // Set master volume (0-100)
  public setMasterVolume(volume: number): void {
    this.config.volumes.master = Math.max(0, Math.min(100, volume))
    this.saveConfig()
  }

  // Set individual sound volume (0-100)
  public setSoundVolume(soundType: SoundType, volume: number): void {
    this.config.volumes[soundType] = Math.max(0, Math.min(100, volume))
    this.saveConfig()
  }

  // Get current config
  public getConfig(): SoundConfig {
    return { ...this.config }
  }

  // Get master volume
  public getMasterVolume(): number {
    return this.config.volumes.master
  }
}

// Singleton instance
let soundManagerInstance: SoundManager | null = null

export const getSoundManager = (): SoundManager => {
  if (!soundManagerInstance) {
    soundManagerInstance = new SoundManager()
  }
  return soundManagerInstance
}

// Convenience functions
export const playSound = (soundType: SoundType): void => {
  getSoundManager().play(soundType)
}

export const toggleSound = (): boolean => {
  return getSoundManager().toggle()
}

export const isSoundEnabled = (): boolean => {
  return getSoundManager().isEnabled()
}

export const initSounds = (): void => {
  getSoundManager().init()
}

export default {
  getSoundManager,
  playSound,
  toggleSound,
  isSoundEnabled,
  initSounds,
  soundPaths,
  defaultSoundConfig,
}
