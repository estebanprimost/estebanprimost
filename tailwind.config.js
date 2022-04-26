const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather Sans', ...defaultTheme.fontFamily.sans],
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
