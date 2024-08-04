/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '6px 6px 12px rgba(0, 0, 0, 0.5)',
        'none': 'none',
      },
      padding: {
        '9/16': '56.25%', // 16:9 aspect ratio
      },
      screens: {
        'customMd': '860px'
      },
      colors: {
        primary: {
          100: "#2C2E63",
          200: "#42599d",
          300: "#7B80B0",
        },
        secondary: {
          100: "#587526",
          200: "#759c32",
          300: "#879e66",
        },
        complementary: {
          100: "#dfdfdf",
          200: "#ffffff",
          300: "#000000",
          400: "#F3F3F3",
        },
        customGreen: '#5F9428',
      },
      fontFamily: {
        content: ["poppins", "sans-serif"],
        title: ["popins", "sans-serif"],
      },
    },
  },
  plugins: [
      
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          'text-shadow': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-2xl': {
          'text-shadow': '6px 6px 12px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        }
      }, ['responsive', 'hover']);
    }
  ],
}