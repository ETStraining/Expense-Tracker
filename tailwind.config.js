/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        georgia: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}