/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./_includes/**/*.html", "./_layouts/**/*.html", "./_posts/**/*.{html,md}", "./_projects/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
          'sans': ['Campor', 'Helvetica', 'sans-serif']
      }
  },
},
plugins: [
  require('@tailwindcss/typography'),
],
}
