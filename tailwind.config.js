/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      margin: {
        'full-width': '1em calc(50% - 50vw)',
      },
      animation: {
        'green-wave-desktop': 'green-wave-desktop 20s linear infinite',
        'blue-wave-desktop': 'blue-wave-desktop 20s linear infinite',
        'pink-wave-desktop': 'pink-wave-desktop 20s linear infinite',
        'green-wave-mobile': 'green-wave-mobile 20s linear infinite',
        'blue-wave-mobile': 'blue-wave-mobile 20s linear infinite',
        'pink-wave-mobile': 'pink-wave-mobile 20s linear infinite',
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
        },
        'green-wave-mobile': {
          '0%, 100%': {
            transform: 'translate(0, -4rem)'
          },
          '50%': {
            transform: 'translate(-800px, -4rem)'
          },
        },
        'blue-wave-mobile': {
          '0%, 100%': {
            transform: 'translate(-1000px, 0.5rem)'
          },
          '50%': {
            transform: 'translate(0, 0.5rem)'
          },
        },
        'pink-wave-mobile': {
          '0%, 100%': {
            transform: 'translate(0, 4rem)'
          },
          '50%': {
            transform: 'translate(-1200px, 4rem)'
          },
        }
      }
    },
  },
  plugins: [],
}

