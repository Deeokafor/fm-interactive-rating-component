/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'ir-orange': 'hsl(25, 97%, 53%)',
        'ir-light-grey': 'hsl(217, 12%, 63%)',
        'ir-medium-grey': 'hsl(216, 12%, 54%)',
        'ir-dark-blue': 'hsl(213, 19%, 18%)',
        'ir-very-dark-blue': 'hsl(216, 12%, 8%)',
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
