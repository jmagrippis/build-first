const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.tsx', './src/**/*.css'],
	variants: {
		borderStyle: ['responsive', 'focus'],
		backgroundColor: ['even', 'hover'],
	},
	theme: {
		container: {
			center: true,
		},
		colors: {
			white: colors.white,
			gray: colors.warmGray,
			teal: colors.teal,
			'twitter-blue': '#1da1f2',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['"New Tegomin"', 'serif'],
		},
		fontWeight: {
			thin: 200,
			light: 300,
			normal: 400,
		},
	},
	plugins: [],
}
