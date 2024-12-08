import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 4s linear infinite',
      },
      fontFamily: {
  			lastica: ['var(--font-lastica)'],
  			poppins: ['var(--font-poppins)'],
  			satoshi: ['var(--font-satoshi)']
  		},
  		colors: {
  			primary: '#232323',
  			secondary: '#FFFFFF',
  			gray: '#d4d4d8',
  			stroke: '#E2E8F0',
  			boxdark: '#24303F',
        strokeinput : "#BBBBBB",
  			'boxdark-2': '#1A222C',
  			strokedark: '#3f3f46',
  			success: '#219653',
  			danger: '#D34053',
  			warning: '#FFA70B',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config