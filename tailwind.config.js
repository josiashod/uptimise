const COLORS = {
  primary: "#399AB3",
  "primary-l1": "#7BC3D5",
  "primary-l2": "#A8D1DC",
  "primary-l3": "#CCE4EA",
  "primary-l4": "#E8F4F8",
  "primry-d1": "#2E7B8F",
  "primary-d2": "#225C6B",
  "primary-d3": "#173E48",
  "primary-d4": "#0E282F",
  light: "#F7F9FA",
};

// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins"],
        secondary: ["Open Sans"],
      },
      colors: {
        custom: {
          light: COLORS.light,
          d: COLORS.primary,
          d1: COLORS["primry-d1"],
          d2: COLORS["primary-d2"],
          d3: COLORS["primary-d3"],
          d4: COLORS["primary-d4"],
          l1: COLORS["primary-l1"],
          l2: COLORS["primary-l2"],
          l3: COLORS["primary-l3"],
          l4: COLORS["primary-l4"],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
