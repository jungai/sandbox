const basePlugin = require('./base-theme');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,svelte}'],
	// ty gpt
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				border: 'hsl(var(--border))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
			},
			borderRadius: {
				radius: 'var(--radius)',
			},
			fontFamily: {
				base: ['Helvetica', 'Arial', 'sans-serif'],
				heading: ['Georgia', 'serif'],
			},
			spacing: {
				small: '0.5rem',
				medium: '1rem',
				large: '1.5rem',
			},
		},
	},
	plugins: [basePlugin],
};
