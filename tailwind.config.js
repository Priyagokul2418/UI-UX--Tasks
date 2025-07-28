/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EBF5FF',
          500: '#3B82F6',
          700: '#1D4ED8',
        },
        secondary: {
          100: '#F3F4F6',
          500: '#6B7280',
          700: '#374151',
        },
      },
    },
  },
  plugins: [],
}