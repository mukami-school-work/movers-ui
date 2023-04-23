/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#2f2e41",
        "primary-white": "#ebf5f3",
        "primary-brown": "#F5F2EB",
        "primary-green": "#08cf65",
        "primary-yellow": "#F7C94A",
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
      },
      grayscale: {
        50: "50%",
      },
    },
  },

  plugins: [require("flowbite/plugin"), require("preline/plugin")],
  corePlugins: { preflight: false },
};

