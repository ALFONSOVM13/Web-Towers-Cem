/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#302c57",
          200: "#42599d",
          300: "#7d80b0",
        },
        secondary: {
          100: "#587526",
          200: "#759c32",
          300: "#879e66",
        },
        complementary: {
          100: "#9e9e9e",
          200: "#ffffff",
          300: "#000000",
        },
      },
      fontFamily: {
        nexa: ["Nexa", "sans-serif"],
        chopin: ["Chopin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
