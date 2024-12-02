/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8c52ff",
        secondary: "#5d30b8",
      },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}

