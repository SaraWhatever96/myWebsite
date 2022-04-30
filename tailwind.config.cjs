const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.svelte'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'showreel': '40rem',
        'illustration':'30rem'
      },
      boxShadow: {
        'mdspecial': '0 4px 6px -1px rgba(100, 116, 139, 0.10), 0 2px 4px -1px rgba(100, 116, 139, 0.10)'
      },
      colors: {
        'slate': colors.slate,
        'sky': colors.sky
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};
