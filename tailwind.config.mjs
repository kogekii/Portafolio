/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#e4e4e4',
				'secondary': '#6c2f67',
				'finn': {
					'50': '#fdf6fd',
					'100': '#faecfb',
					'200': '#f4d9f5',
					'300': '#ecbaed',
					'400': '#e191e1',
					'500': '#cf66cf',
					'600': '#b247af',
					'700': '#93388f',
					'800': '#783073',
					'900': '#6c2f67',
					'950': '#40123d',
				},
				
			}
		},
	},
	plugins: [],
}
