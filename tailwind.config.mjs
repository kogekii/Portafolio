/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#F5F5F5',
				'secondary': '#781D7A',
				'tertiary': '#5D2669',
				
			},
			fontSize: {
				'titulo1': '3.5rem',
				'titulo2': '3rem',
				'titulo3': '2.5rem',
				'titulo4': '2rem',
				'logo': '1.5rem',
			},
			fontFamily: {
				"holtwood": ['Holtwood One SC', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
