/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '2.75': '0.688rem',
        '12': '3rem',
        '128': '32rem',
        '75': '18.75rem',
        '150': '37.5rem',
        '25': '6.25rem',
        '50': '12.5rem',
        '100': '25rem',
        '37.5': '9.375rem',
        '62.5': '15.625rem',
        '65': '16.25rem',
      }
    },
  },
  plugins: [],
}

