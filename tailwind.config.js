/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#d5d5d9",
          200: "#acabb3",
          300: "#82828d",
          400: "#595867",
          500: "#2f2e41",
          600: "#262534",
          700: "#1c1c27",
          800: "#13121a",
          900: "#09090d",
        },
        white: {
          100: "#fbfdfd",
          200: "#f7fbfa",
          300: "#f3f9f8",
          400: "#eff7f5",
          500: "#ebf5f3",
          600: "#F5F2EB",
          700: "#bcc4c2",
          800: "#8d9392",
          900: "#5e6261",
        },

        green: {
          100: "#cef5e0",
          200: "#9cecc1",
          300: "#6be2a3",
          400: "#39d984",
          500: "#08cf65",
          600: "#06a651",
          700: "#057c3d",
          800: "#035328",
          900: "#022914",
        },
      },
    },
  },
  plugins: [],
};
