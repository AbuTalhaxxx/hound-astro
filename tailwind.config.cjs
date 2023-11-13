/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	    fontFamily: {
        'syne': ['"Syne Variable"','sans-serif'],
		'grotesk': ['"Space Grotesk Variable"','sans-serif']
		},
		extend: {
		colors: {
        'lighter-black':'#0D0D0D',
        'header':"#C7CECF",
        'input-background':"rgba(186,186,186,0.04)",
        'input-border':"rgba(255,255,255,0.02)",
		},
		},
	},
	plugins: [
    require('tailwind-scrollbar-hide'),
	],
}
