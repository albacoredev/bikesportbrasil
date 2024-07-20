/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#CE3A3A",
        secondary: "#1f1f1f",
        background: "#121212",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#CE3A3A",
          ["primary-content"]: "white",
          secondary: "#1f1f1f",
          ["base-content"]: "white",
        },
      },
    ],
  },
};
