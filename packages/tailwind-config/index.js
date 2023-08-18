/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
	// ty gpt
	theme: {
		extend: {
			colors: {
				primary: "#8E6C88",
				secondary: "#F5F5F5",
				accent: "#FF9A8B",
				text: "#333333",
				background: "#FFFFFF",
				border: "#E0E0E0",
			},
			fontFamily: {
				base: ["Helvetica", "Arial", "sans-serif"],
				heading: ["Georgia", "serif"],
			},
			spacing: {
				small: "0.5rem",
				medium: "1rem",
				large: "1.5rem",
			},
			borderRadius: {
				app: "5px",
			},
		},
	},
	plugins: [],
};