/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0D",
        primary: {
          50: "#efe6fd",
          100: "#ceb0fa",
          200: "#b78af7",
          300: "#9654f4",
          400: "#8133f1",
          500: "#6200ee",
          600: "#5900d9",
          700: "#4600a9",
          800: "#360083",
          900: "#290064",
        },
        secondary: {
          50: "#e6fbff",
          100: "#b1f2ff",
          200: "#8cecff",
          300: "#57e3ff",
          400: "#36ddff",
          500: "#04d5ff",
          600: "#04c2e8",
          700: "#0397b5",
          800: "#02758c",
          900: "#02596b",
        },
        blue: "#246BFD",
        neutral: {
          10: "#F9F5FF",
          40: "#AEABB2",
        },
        dark: "#1A1A1F",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("daisyui")],
};
