module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/beach.jpg')",
        'bg-pattern': "url('/trees.jpg')",
      }),
      height: {
        large: '30rem',
        header: '80px',
        footer: '80px',
        hero: '500px',
        herorel: '420px',
      },
      spacing: {
        header: '80px',
        image: '56.25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
