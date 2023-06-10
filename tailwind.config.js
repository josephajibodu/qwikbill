/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
