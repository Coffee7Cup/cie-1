/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				notable: ['Notable', 'sans-serif'],
				gajraj: ['Gajraj One', 'sans-serif'],
			},
		},
	},
	plugins: [],
}