import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // CUSTOM COLORS (Warmer Charcoal + Gold + Emerald + Platinum)
      colors: {
        // Backgrounds (Warmer Charcoal)
        'bg-primary': '#1a1a2e',
        'bg-secondary': '#252541',
        'bg-elevated': '#2d3748',
        'bg-board': '#16213e',

        // Gold (Links, borders, hover, achievement badges)
        'gold-shadow': '#8b7355',
        'gold-main': '#c9a961',
        'gold-bright': '#d4af37',

        // Emerald (ONLY positive metrics)
        'emerald-dark': '#047857',
        'emerald-main': '#10b981',
        'emerald-bright': '#34d399',

        // Platinum (Text hierarchy)
        'platinum-bright': '#f1f5f9',
        'platinum-main': '#e2e8f0',
        'platinum-muted': '#cbd5e1',
        'platinum-dark': '#94a3b8',

        // Supporting
        'accent-navy': '#2563eb',
        'accent-ruby': '#dc2626',
        'accent-silver': '#94a3b8',
      },

      // TYPOGRAPHY
      fontFamily: {
        heading: ['Syne', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        hero: 'clamp(3rem, 8vw, 4.5rem)',        // $HARSHAL: 72px
        h1: 'clamp(2.5rem, 6vw, 4rem)',
        h2: 'clamp(2rem, 5vw, 3rem)',
        h3: 'clamp(1.5rem, 4vw, 2.25rem)',       // Section headings: 36px
        metric: 'clamp(2.5rem, 5vw, 3rem)',      // Metric numbers: 48px
      },

      // GLASS MORPHISM
      backdropBlur: {
        glass: '16px',
        'glass-md': '20px',
        'glass-lg': '24px',
      },

      backgroundColor: {
        'glass-subtle': 'rgba(255,255,255,0.08)',
        'glass-light': 'rgba(255,255,255,0.12)',
        'glass-medium': 'rgba(255,255,255,0.15)',
        'glass-heavy': 'rgba(255,255,255,0.20)',
      },

      borderColor: {
        'glass-gold': 'rgba(201,169,97,0.18)',
        'glass-platinum': 'rgba(226,232,240,0.18)',
        'glass-white': 'rgba(255,255,255,0.18)',
      },

      // SHADOWS & GLOWS
      boxShadow: {
        sm: '0 2px 4px rgba(0,0,0,0.1)',
        md: '0 4px 12px rgba(0,0,0,0.15)',
        lg: '0 8px 24px rgba(0,0,0,0.2)',
        xl: '0 12px 48px rgba(0,0,0,0.25)',
        'gold': '0 0 20px rgba(201,169,97,0.4)',
        'gold-hover': '0 0 30px rgba(201,169,97,0.6)',
        'emerald': '0 0 20px rgba(16,185,129,0.3)',
        'platinum': '0 0 15px rgba(226,232,240,0.2)',
      },

      // ANIMATIONS
      animation: {
        // Loading screen
        'logo-blur': 'logo-blur 1.2s cubic-bezier(0.6, 0.05, 0.01, 0.9) forwards',
        'logo-exit': 'logo-exit 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',

        // Particles
        'particle': 'particle 2s ease-out infinite',

        // Floating cards
        'float': 'float 4s ease-in-out infinite',

        // Glitch effect
        'glitch': 'glitch 2.5s ease-in-out',
        'shimmer': 'shimmer 3s linear infinite',

        // Counters
        'count-up': 'count-up 1s ease-out forwards',
        'glow-pulse': 'glow-pulse 0.8s ease-in-out',
        'color-pulse': 'color-pulse 1s ease-in-out',

        // Misc
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.6s ease-out forwards',
      },

      keyframes: {
        // Loading logo
        'logo-blur': {
          '0%': {
            filter: 'blur(10px)',
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            filter: 'blur(0px)',
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
        'logo-exit': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100px)',
            opacity: '0',
          },
        },

        // Floating
        'float': {
          '0%, 100%': {
            transform: 'translateY(-20px) rotateX(-10deg) rotateY(-10deg)',
          },
          '50%': {
            transform: 'translateY(20px) rotateX(10deg) rotateY(10deg)',
          },
        },

        // Glitch
        'glitch': {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 0px rgba(201,169,97,0)',
          },
          '20%': {
            opacity: '0.8',
            textShadow: '2px 2px 4px rgba(201,169,97,0.6)',
          },
          '50%': {
            opacity: '1',
            textShadow: '-2px -2px 4px rgba(16,185,129,0.4)',
          },
          '80%': {
            opacity: '0.9',
            textShadow: '0 0 8px rgba(201,169,97,0.8)',
          },
        },

        'shimmer': {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },

        // Counter animations
        'count-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '80%': {
            opacity: '1',
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },

        'glow-pulse': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 0px rgba(16,185,129,0))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.8))',
          },
        },

        'color-pulse': {
          '0%, 100%': {
            filter: 'brightness(1)',
          },
          '50%': {
            filter: 'brightness(1.3)',
          },
        },

        // Basic animations
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },

        'slide-up': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

        'slide-in': {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },

        // Particle
        'particle': {
          '0%': {
            opacity: '0',
            transform: 'scale(0) translate(0, 0)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1) translate(var(--tx), var(--ty))',
          },
        },
      },

      // TRANSITIONS
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '600': '600ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.6, 0.05, 0.01, 0.9)',
      },

      // Z-INDEX
      zIndex: {
        '0': '0',
        '1000': '1000',
        '1100': '1100',
        '1200': '1200',
        '9998': '9998',
        '9999': '9999',
        '10000': '10000',
      },
    },
  },
  plugins: [],
}

export default config
