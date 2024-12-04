import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
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
  			'boxdark-2': '#1A222C',
  			strokedark: '#2E3A47',
  			success: '#219653',
  			danger: '#D34053',
  			warning: '#FFA70B',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'1': '0px 1px 3px rgba(0, 0, 0, 0.08)',
  			'2': '0px 1px 4px rgba(0, 0, 0, 0.12)',
  			'3': '0px 1px 5px rgba(0, 0, 0, 0.14)',
  			'4': '0px 4px 10px rgba(0, 0, 0, 0.12)',
  			'5': '0px 1px 1px rgba(0, 0, 0, 0.15)',
  			'6': '0px 3px 15px rgba(0, 0, 0, 0.1)',
  			'7': '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
  			'8': '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
  			default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
  			card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
  			'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
  			switcher: '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
  			'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)'
  		},
  		dropShadow: {
  			'1': '0px 1px 0px #E2E8F0',
  			'2': '0px 1px 4px rgba(0, 0, 0, 0.12)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
