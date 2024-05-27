module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#a52924",
        secondaryCustom: "#F7AB0A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require('daisyui'),],
  daisyui: {
    themes: ["bumblebee",],
  },
};
