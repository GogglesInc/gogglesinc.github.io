import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: 'rgb(var(--text))',
          50: 'rgb(var(--text-50))',
          100: 'rgb(var(--text-100))',
          200: 'rgb(var(--text-200))',
          300: 'rgb(var(--text-300))',
          400: 'rgb(var(--text-400))',
          500: 'rgb(var(--text-500))',
          600: 'rgb(var(--text-600))',
          700: 'rgb(var(--text-700))',
          800: 'rgb(var(--text-800))',
          900: 'rgb(var(--text-900))'
        },
        background: {
          DEFAULT: 'rgb(var(--background))',
          50: 'rgb(var(--background-50))',
          100: 'rgb(var(--background-100))',
          200: 'rgb(var(--background-200))',
          300: 'rgb(var(--background-300))',
          400: 'rgb(var(--background-400))',
          500: 'rgb(var(--background-500))',
          600: 'rgb(var(--background-600))',
          700: 'rgb(var(--background-700))',
          800: 'rgb(var(--background-800))',
          900: 'rgb(var(--background-900))',
          950: 'rgb(var(--background-950))'
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          50: 'rgb(var(--primary-50))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
          950: 'rgb(var(--primary-950))'
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          50: 'rgb(var(--secondary-50))',
          100: 'rgb(var(--secondary-100))',
          200: 'rgb(var(--secondary-200))',
          300: 'rgb(var(--secondary-300))',
          400: 'rgb(var(--secondary-400))',
          500: 'rgb(var(--secondary-500))',
          600: 'rgb(var(--secondary-600))',
          700: 'rgb(var(--secondary-700))',
          800: 'rgb(var(--secondary-800))',
          900: 'rgb(var(--secondary-900))',
          950: 'rgb(var(--secondary-950))'
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          50: 'rgb(var(--accent-50))',
          100: 'rgb(var(--accent-100))',
          200: 'rgb(var(--accent-200))',
          300: 'rgb(var(--accent-300))',
          400: 'rgb(var(--accent-400))',
          500: 'rgb(var(--accent-500))',
          600: 'rgb(var(--accent-600))',
          700: 'rgb(var(--accent-700))',
          800: 'rgb(var(--accent-800))',
          900: 'rgb(var(--accent-900))',
          950: 'rgb(var(--accent-950))'
        }
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
