/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xx: { min: "300px", max: "640px" },
      },
      colors: {
        "custom-background": "#D9D9D9",
        "text-color": "#636363",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
