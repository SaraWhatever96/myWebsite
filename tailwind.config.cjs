const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'nunito-sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          green: {
            DEFAULT: "hsl(var(--accent-green))",
            foreground: "hsl(var(--accent-green-foreground))",
          },
          rose: {
            DEFAULT: "hsl(var(--accent-rose))",
            foreground: "hsl(var(--accent-rose-foreground))",
          },
          blue: {
            DEFAULT: "hsl(var(--accent-blue))",
            foreground: "hsl(var(--accent-blue-foreground))",
          },
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'skill-blue': {
          DEFAULT: "hsl(var(--skill-blue))",
          foreground: "hsl(var(--skill-blue-foreground))",
        },
        'skill-purple': {
          DEFAULT: "hsl(var(--skill-purple))",
          foreground: "hsl(var(--skill-purple-foreground))",
        },
        'skill-sky': {
          DEFAULT: "hsl(var(--skill-sky))",
          foreground: "hsl(var(--skill-sky-foreground))",
        },
        'skill-green': {
          DEFAULT: "hsl(var(--skill-green))",
          foreground: "hsl(var(--skill-green-foreground))",
        },
        lilla: '#F3EDFD'
      },
      borderRadius: {
        'lg': '10px'
      },
      maxWidth: {
        prose: '85ch',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}