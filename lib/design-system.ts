/**
 * HARSHAL JAIN PORTFOLIO - DESIGN SYSTEM
 * Complete design tokens and system configuration
 * Based on: Warmer Charcoal + Gold + Emerald + Platinum
 */

export const colors = {
  // PRIMARY BACKGROUNDS (Warmer charcoal tones)
  background: {
    primary: '#1a1a2e',      // Deep navy-charcoal (main background)
    secondary: '#252541',    // Purple-charcoal (cards/sections)
    elevated: '#2d3748',     // Warm gray (elevated elements)
    board: '#16213e',        // Darker board background
  },

  // LUXURY GOLD (Moderate usage - links, borders, hover, achievement badges)
  gold: {
    shadow: '#8b7355',       // Gold shadow for depth
    main: '#c9a961',         // Primary gold
    bright: '#d4af37',       // Hover/active gold
    glow: 'rgba(201,169,97,0.4)', // Gold glow effect
  },

  // EMERALD SUCCESS (ONLY positive metrics - ROI, growth, live status)
  emerald: {
    dark: '#047857',         // Dark emerald for text
    main: '#10b981',         // Main emerald indicator
    bright: '#34d399',       // Bright emerald highlights
    glow: 'rgba(16,185,129,0.3)', // Emerald glow effect
  },

  // PLATINUM TEXT (Primary text hierarchy)
  platinum: {
    bright: '#f1f5f9',       // Brightest text (headings)
    main: '#e2e8f0',         // Main platinum text
    muted: '#cbd5e1',        // Secondary text
    dark: '#94a3b8',         // Muted/tertiary text
  },

  // GLASS MORPHISM (Opacity + blur levels)
  glass: {
    subtle: 'rgba(255,255,255,0.08)',    // 8% for subtle elements
    light: 'rgba(255,255,255,0.12)',     // 12% for navigation
    medium: 'rgba(255,255,255,0.15)',    // 15% for cards
    heavy: 'rgba(255,255,255,0.20)',     // 20% for overlays
    border: {
      gold: 'rgba(201,169,97,0.18)',     // 18% gold border
      platinum: 'rgba(226,232,240,0.18)', // 18% platinum border
      white: 'rgba(255,255,255,0.18)',    // 18% white border
    },
    blur: {
      sm: '16px',
      md: '20px',
      lg: '24px',
    },
  },

  // SUPPORTING COLORS
  accent: {
    navy: '#2563eb',         // Navy blue accents
    ruby: '#dc2626',         // Negative/alerts
    silver: '#94a3b8',       // Silver details
  },
}

// TYPOGRAPHY SYSTEM
export const typography = {
  fonts: {
    heading: "'Syne', 'Space Grotesk', sans-serif",  // Bold, unique headings
    body: "'Inter', sans-serif",                      // Clean body text
    mono: "'JetBrains Mono', monospace",              // Code/numbers
  },

  sizes: {
    // Hero/Display
    hero: 'clamp(3rem, 8vw, 4.5rem)',        // 48-72px ($HARSHAL)

    // Headings
    h1: 'clamp(2.5rem, 6vw, 4rem)',          // 40-64px
    h2: 'clamp(2rem, 5vw, 3rem)',            // 32-48px
    h3: 'clamp(1.5rem, 4vw, 2.25rem)',       // 24-36px (section headings: 36px)
    h4: 'clamp(1.25rem, 3vw, 1.75rem)',      // 20-28px

    // Body
    lg: '1.125rem',   // 18px
    base: '1rem',     // 16px (tagline: 24px custom)
    sm: '0.875rem',   // 14px
    xs: '0.75rem',    // 12px

    // Metrics
    metric: 'clamp(2.5rem, 5vw, 3rem)',      // 40-48px for metric numbers
  },

  weights: {
    light: 300,
    normal: 400,    // Tagline
    medium: 500,
    semibold: 600,  // Section headings
    bold: 700,      // $HARSHAL, metric numbers
    black: 900,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
  },
}

// SPACING SYSTEM (8px base)
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
  '4xl': '8rem',   // 128px
}

// SHADOWS & EFFECTS
export const effects = {
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 12px rgba(0,0,0,0.15)',
    lg: '0 8px 24px rgba(0,0,0,0.2)',
    xl: '0 12px 48px rgba(0,0,0,0.25)',
    gold: '0 0 20px rgba(201,169,97,0.4)',        // Gold glow
    goldHover: '0 0 30px rgba(201,169,97,0.6)',   // Stronger gold glow
    emerald: '0 0 20px rgba(16,185,129,0.3)',     // Emerald glow
    platinum: '0 0 15px rgba(226,232,240,0.2)',   // Platinum glow
  },

  blur: {
    sm: 'blur(8px)',
    md: 'blur(16px)',
    lg: 'blur(24px)',
  },

  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',     // Hover transitions
    slow: '600ms cubic-bezier(0.4, 0, 0.2, 1)',     // Page transitions
    spring: 'cubic-bezier(0.6, 0.05, 0.01, 0.9)',   // Custom spring
  },
}

// RESPONSIVE BREAKPOINTS
export const breakpoints = {
  xs: '320px',    // Mobile small
  sm: '640px',    // Mobile large
  md: '768px',    // Tablet
  lg: '1024px',   // Laptop
  xl: '1280px',   // Desktop
  '2xl': '1536px', // Large desktop
}

// ANIMATION DURATIONS
export const durations = {
  loadingScreen: 2000,      // 2s total
  glitch: 2500,             // 2.5s glitch effect
  pageTransition: 600,      // 600ms page transitions
  hover: 300,               // 300ms hover effects
  counterAnimation: 1000,   // 1s number counters
  floatAnimation: 4000,     // 4s floating cards
}

// Z-INDEX LAYERS
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1200,
  cursor: 9998,
  progress: 9999,
  loading: 10000,
}

export default {
  colors,
  typography,
  spacing,
  effects,
  breakpoints,
  durations,
  zIndex,
}
