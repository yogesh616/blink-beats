/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(235, 255, 239)'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    }
  },
  plugins: [],
}

