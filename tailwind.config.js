module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: theme => ({
				'hero-pattern': "url('/beach.jpg')",
			}),
			height: {
				header: '80px',
				footer: '80px',
				hero: '500px',
				herorel: '420px',
			},
			spacing: {
				header: '80px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
