/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// https://www.realtimecolors.com/?colors=212121-fafafa-488157-dad7cd-3a5a40&fonts=Inter-Inter
			'white': '#fafafa',
			'black': "#212121",
			'primary': '#488157',
			'secondary': '#dad7cd',
			'accent': '#3a5a40',
		},
		fontFamily: {
			'inter': ['Inter', 'sans-serif'],
			'code': ["Fira Mono", 'monospace']
		}
	},
	plugins: [],
}
