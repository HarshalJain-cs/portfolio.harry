import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Stock Exchange Theme Colors
        'stock-navy': '#000080',      // Navy Blue (Primary)
        'stock-green': '#00FF00',     // Green (Positive/Growth)
        'stock-red': '#FF0000',       // Red (Alerts/Negative)
        'stock-gold': '#FFD700',      // Gold (Achievements)
        'stock-cyan': '#00FFFF',      // Cyan (Links/Interactive)
        'stock-dark': '#0a0e27',      // Very Dark Blue (Background)
        'stock-board': '#001F54',     // Stock Board Background
        'stock-text': '#E0E0E0',      // Light Gray Text
      },
      fontFamily: {
        'heading': ['Roboto Condensed', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      animation: {
        'ticker-scroll': 'ticker-scroll 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'count-up': 'count-up 2s ease-out',
        'flash-green': 'flash-green 0.5s ease-in-out',
        'flash-red': 'flash-red 0.5s ease-in-out',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'flash-green': {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
        },
        'flash-red': {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
        },
      },
      boxShadow: {
        'stock-glow': '0 0 20px rgba(0, 255, 255, 0.5)',
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
