/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#fff',
			'black': "#212121",
			'primary': '#dad7cd',
			'secondary': '#344e41',
			'secondary-light': '#a3b18a',
			'accent': '#488157',
			'accent-dark': '#3a5a40'
		},
		fontFamily: {
			'inter': ['Inter', 'sans-serif'],
			'code': ["Fira Mono", 'monospace']
		}
	},
	plugins: [],
}
