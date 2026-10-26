/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#14532D',
          foreground: '#FFFFFF',
          dark: '#0F3D20',
          hover: '#166534',
        },
        secondary: {
          DEFAULT: '#166534',
          foreground: '#FFFFFF',
          light: '#ECFDF3',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#647067',
        },
        accent: {
          DEFAULT: '#F59E0B',
          foreground: '#17251B',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#17251B',
        },
        // FoodBridge Brand Identity
        foodbridge: {
          forest: '#14532D',
          'forest-hover': '#166534',
          secondary: '#166534',
          fresh: '#65A30D',
          mint: '#ECFDF3',
          cream: '#FAF9F2',
          'cream-warm': '#F5F3E8',
          dark: '#17251B',
          muted: '#647067',
          blue: '#E8F3FA',
          orange: '#F59E0B',
          red: '#DC2626',
          border: '#E5E7EB',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
