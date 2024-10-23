/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        geistMono: ["Geist Mono", "mono"],
      },
      colors: {
        light: "#FAFAFA",
        dark: "#212121",
      },
    },
  },
  plugins: [],
};
