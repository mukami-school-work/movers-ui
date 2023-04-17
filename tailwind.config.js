/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#2f2e41",
        "primary-white": "#ebf5f3",
        "primary-brown": "#F5F2EB",
        "primary-green": "#08cf65",
        "primary-yellow": "#F7C94A",
      },
      grayscale: {
        50: "50%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

