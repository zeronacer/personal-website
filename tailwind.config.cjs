/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// https://colorhunt.co/palette/11423287a922fcdc2af7f6bb
			// https://www.realtimecolors.com/?colors=212121-fafafa-87A922-F7F6BB-FCDC2A&fonts=Inter-Inter

			'white': '#fafafa',
			'black': "#212121",
			'primary': '#87A922',
			'secondary': '#F7F6BB',
			'accent': '#FCDC2A',
		},
		fontFamily: {
			'inter': ['Inter', 'sans-serif'],
			'code': ["Fira Mono", 'monospace']
		}
	},
	plugins: [],
}
