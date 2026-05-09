/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base:       '#030712',
        'base-alt': '#070d1a',
        card:       '#0d1117',
        card2:      '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite reverse',
        'float-med':    'float 7s ease-in-out infinite 2s',
        'pulse-dot':    'pulse-dot 2s ease-in-out infinite',
        'blink':        'blink 1s step-end infinite',
        'scroll-down':  'scroll-down 2s ease-in-out infinite',
        'spin-slow':    'spin 8s linear infinite',
        'gradient-x':   'gradient-x 5s ease infinite',
        'glow-pulse':   'glow-pulse 3s ease-in-out infinite',
        'fade-in-up':   'fade-in-up 0.6s ease-out forwards',
        'shimmer':      'shimmer 2s linear infinite',
        'timeline-grow':'timeline-grow 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%':      { transform: 'translateY(-20px) scale(1.05)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1',   boxShadow: '0 0 0 0 rgba(52,211,153,0.4)' },
          '50%':      { opacity: '0.6', boxShadow: '0 0 0 6px rgba(52,211,153,0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'scroll-down': {
          '0%':   { transform: 'translateY(0)',    opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.08)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        'timeline-grow': {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
      },
    },
  },
  plugins: [],
}
