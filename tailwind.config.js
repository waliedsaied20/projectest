/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,jms, tsx}"],
  theme: {
    extend: {},
    minHeight: {
      'custome': 'calc(100vh - 64)',
    }
  },
  plugins: [],
}

