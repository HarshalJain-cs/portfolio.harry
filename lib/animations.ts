/**
 * ANIMATION SYSTEM
 * Framer Motion variants and animation configurations
 */

import { Variants } from 'framer-motion'

// PAGE TRANSITIONS (Scale + Fade, 600ms)
export const pageTransition: Variants = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// LOADING SCREEN (HJ Logo: Blur → Unblur, Scale 1.2x, 1.2s cubic-bezier)
export const loadingLogoAnimation: Variants = {
  initial: {
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    filter: 'blur(0px)',
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.05, 0.01, 0.9], // Custom cubic-bezier
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// BACKGROUND PARTICLES (for loading screen)
export const particleAnimation: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (custom: number) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    x: [0, custom * 100],
    y: [0, custom * -100],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: custom * 0.2,
    },
  }),
}

// GLITCH EFFECT (Subtle shimmer for $HARSHAL)
export const glitchAnimation: Variants = {
  initial: {
    opacity: 1,
  },
  glitch: {
    opacity: [1, 0.8, 1, 0.9, 1],
    textShadow: [
      '0 0 0px rgba(201,169,97,0)',
      '2px 2px 4px rgba(201,169,97,0.6)',
      '-2px -2px 4px rgba(16,185,129,0.4)',
      '0 0 8px rgba(201,169,97,0.8)',
      '0 0 0px rgba(201,169,97,0)',
    ],
    transition: {
      duration: 2.5,
      times: [0, 0.2, 0.5, 0.8, 1],
      ease: 'easeInOut',
    },
  },
  hover: {
    opacity: [1, 0.9, 1],
    textShadow: [
      '0 0 0px rgba(201,169,97,0)',
      '0 0 20px rgba(201,169,97,0.6)',
      '0 0 0px rgba(201,169,97,0)',
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

// SCROLL ANIMATIONS (Trigger 25%, Fade + Slide + Scale, 150ms stagger, repeat every time)
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// STAGGER CONTAINER (150ms delay between children)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// STAGGER ITEM (for use with staggerContainer)
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// FLOATING 3D CARDS (20px vertical, 10deg rotation, 4s duration)
export const floatingCard: Variants = {
  animate: {
    y: [-20, 20, -20],
    rotateX: [-10, 10, -10],
    rotateY: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'reverse',
    },
  },
}

// PROJECT CARD HOVER (Scale 1.05x, Lift -8px, Tilt 10deg, 300ms)
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  hover: {
    scale: 1.05,
    y: -8,
    boxShadow: '0 0 10px rgba(201,169,97,0.4), 0 8px 24px rgba(0,0,0,0.2)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// BUTTON HOVER (Scale 1.08x, Lift -4px, 200ms spring)
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.08,
    y: -4,
    boxShadow: '0 0 20px rgba(201,169,97,0.6)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

// PARTICLE BURST (Emerald, 12 particles, fast, 0.5s life)
export const particleBurst = {
  count: 12,
  color: '#10b981', // Emerald
  speed: 2,
  life: 0.5,
}

// METRIC COUNTER ANIMATION (1s ease-out, color pulse, scale pulse)
export const counterAnimation: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: [0.8, 1.1, 1],
    transition: {
      duration: 1,
      ease: 'easeOut',
      times: [0, 0.8, 1],
    },
  },
}

// METRIC COLOR PULSE (during counting)
export const colorPulse: Variants = {
  pulse: {
    filter: [
      'brightness(1)',
      'brightness(1.3)',
      'brightness(1)',
    ],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

// GLOW PULSE (final emphasis after counter completes)
export const glowPulse: Variants = {
  pulse: {
    filter: [
      'drop-shadow(0 0 0px rgba(16,185,129,0))',
      'drop-shadow(0 0 20px rgba(16,185,129,0.8))',
      'drop-shadow(0 0 0px rgba(16,185,129,0))',
    ],
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

// HERO METRICS STAGGER (200ms delay)
export const metricsStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

// TAGLINE SLIDE IN
export const slideIn: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// FADE IN SIMPLE
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

// MOBILE MENU SLIDE FROM TOP
export const mobileMenuSlide: Variants = {
  closed: {
    y: '-100%',
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// DROPDOWN SLIDE DOWN (for mega menu)
export const dropdownSlide: Variants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
}

// PARALLAX CONFIGURATION
export const parallaxConfig = {
  videoBackground: 0.3,     // Video parallax speed
  floatingCards: {
    card1: 0.4,
    card2: 0.5,
    card3: 0.6,
    card4: 0.7,
  },
  glassOverlay: 1.0,        // No parallax (stays fixed)
}

// CURSOR EFFECTS
export const cursorVariants = {
  default: {
    width: 32,
    height: 32,
    opacity: 0.8,
  },
  hover: {
    width: 60,
    height: 60,
    opacity: 1,
  },
  click: {
    scale: 0.8,
  },
}

export default {
  pageTransition,
  loadingLogoAnimation,
  particleAnimation,
  glitchAnimation,
  scrollReveal,
  staggerContainer,
  staggerItem,
  floatingCard,
  cardHover,
  buttonHover,
  particleBurst,
  counterAnimation,
  colorPulse,
  glowPulse,
  metricsStagger,
  slideIn,
  fadeIn,
  mobileMenuSlide,
  dropdownSlide,
  parallaxConfig,
  cursorVariants,
}
