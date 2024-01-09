/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#fff",
          100: "#E6EFF5",
          200: "#F5F7FA",
          300: "#ffffffb3",
          400: "#F4F5F7",
        },
        primary: "#2D60FF",
        secondary: "#505887",
        text: {
          DEFAULT: "#343C6A",
          100: "#718EBF",
        },
        blue: {
          100: "#8BA3CB",
        },
        red: "#FF4B4A",
      },
    },
  },
  plugins: [],
};
