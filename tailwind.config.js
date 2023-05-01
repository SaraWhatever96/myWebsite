/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'green-wave': 'green-wave 20s linear infinite',
        'blue-wave': 'blue-wave 20s linear infinite',
        'rose-wave': 'rose-wave 20s linear infinite',
      },
      keyframes: {
        'green-wave': {
          '0%, 100%': {
            transform: 'translate(-11rem, 0px)'
          },
          '50%': {
            transform: 'translate(-11rem, -800px)'
          },
        },
        'blue-wave': {
          '0%, 100%': {
            transform: 'translate(-4.5rem, -1000px)'
          },
          '50%': {
            transform: 'translate(-4.5rem, 0)'
          },
        },
        'rose-wave': {
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

