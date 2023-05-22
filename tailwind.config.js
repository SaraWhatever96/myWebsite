/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'green-wave-desktop': 'green-wave-desktop 20s linear infinite',
        'blue-wave-desktop': 'blue-wave-desktop 20s linear infinite',
        'pink-wave-desktop': 'pink-wave-desktop 20s linear infinite',
      },
      keyframes: {
        'green-wave-desktop': {
          '0%, 100%': {
            transform: 'translate(-11rem, 0px)'
          },
          '50%': {
            transform: 'translate(-11rem, -800px)'
          },
        },
        'blue-wave-desktop': {
          '0%, 100%': {
            transform: 'translate(-4.5rem, -1000px)'
          },
          '50%': {
            transform: 'translate(-4.5rem, 0)'
          },
        },
        'pink-wave-desktop': {
          '0%, 100%': {
            transform: 'translate(0, 0)'
          },
          '50%': {
            transform: 'translate(0, -1200px)'
          },
        }
      }
    },
  },
  plugins: [],
}

