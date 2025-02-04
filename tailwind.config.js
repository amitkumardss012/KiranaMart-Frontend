/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './public/**/*.html', 
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

