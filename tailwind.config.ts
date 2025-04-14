
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
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
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					'navy': '#33415C',
					'teal': '#5C97AB',
					'light-blue': '#D3E4FD',
					'cream': '#F6F6F7',
					'soft-blue': '#7B9DB3',
					'accent': '#EC6C4C',
					'text': '#333333',
					'light-text': '#555555',
					'dark-accent': '#1C2C42'
				},
				cyber: {
					'black': '#0d0f12',
					'dark': '#1A1F2C',
					'neon': '#00FFFC',
					'pink': '#FF0055',
					'yellow': '#FFE600',
					'blue': '#0EA5E9',
					'purple': '#8B5CF6',
					'red': '#FF3D71',
					'green': '#00D68F',
					'text': '#ECF0F1',
					'muted': '#8E9196',
					'overlay': 'rgba(13, 15, 18, 0.7)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' }
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'dataflow': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s ease-in-out infinite alternate',
				'scanline': 'scanline 4s linear infinite',
				'flicker': 'flicker 0.5s linear infinite',
				'dataflow': 'dataflow 15s linear infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(0deg, rgba(0,255,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,252,0.1) 1px, transparent 1px)',
				'neon-glow': 'radial-gradient(circle, rgba(0,255,252,0.4) 0%, rgba(0,255,252,0.1) 40%, transparent 70%)',
				'data-flow': 'linear-gradient(90deg, rgba(0,255,252,0) 0%, rgba(0,255,252,0.2) 50%, rgba(0,255,252,0) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
