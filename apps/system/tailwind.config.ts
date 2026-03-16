import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary Orange
          600: '#ea580c', // Deeper Orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        luxury: {
          dark: '#0a0a0b',
          panel: '#111113',
          accent: '#f97316',
        }
      },
      fontSize: {
        'fluid-display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'fluid-h1': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        'fluid-body': ['clamp(0.875rem, 1.2vw, 1rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        'fluid-gap': 'clamp(0.75rem, 2vw, 1.5rem)',
        'fluid-padding': 'clamp(1rem, 4vw, 3rem)',
      }
    }
  },
  plugins: [],
};
export default config;