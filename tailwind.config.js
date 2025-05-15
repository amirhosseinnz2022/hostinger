/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './index.html',
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
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'neon-purple': '#A020F0',
        'neon-pink': '#FF00FF',
        'neon-blue': '#00FFFF',
        'brand-primary': 'hsl(var(--brand-primary))',
        'brand-secondary': 'hsl(var(--brand-secondary))',
        'brand-accent': 'hsl(var(--brand-accent))',
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
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary))' },
          '50%': { boxShadow: '0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))' },
        },
        'subtle-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
        'subtle-pulse': 'subtle-pulse 2.5s infinite ease-in-out',
        'float': 'float 3s infinite ease-in-out',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'], 
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, hsl(var(--brand-primary) / 0.3), hsl(var(--background)) 70%)',
        'card-gradient': 'linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.8) 100%)',
      },
      boxShadow: {
        'neon-sm': '0 0 5px hsl(var(--brand-accent)), 0 0 10px hsl(var(--brand-accent) / 0.5)',
        'neon-md': '0 0 15px hsl(var(--brand-accent)), 0 0 30px hsl(var(--brand-accent) / 0.5)',
        'neon-lg': '0 0 25px hsl(var(--brand-accent)), 0 0 50px hsl(var(--brand-accent) / 0.5)',
        'card-glow': '0 0 15px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--primary) / 0.2)',
        'card-hover-glow': '0 0 25px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};