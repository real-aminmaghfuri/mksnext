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
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        luxury: {
          dark: '#0f0f10',
          panel: '#18181b',
        }
      },
      fontSize: {
        'fluid-display': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h1': ['clamp(2rem, 6vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'fluid-h2': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.3' }],
        'fluid-body': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        'fluid-gap': 'clamp(1rem, 3vw, 2.5rem)',
        'fluid-padding': 'clamp(1.5rem, 5vw, 4rem)',
      }
    }
  },
  plugins: [],
};
export default config;