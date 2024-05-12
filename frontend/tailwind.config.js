/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "420px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      orbitron: ['"Orbitron"', "sans-serif"],
      "roboto-thin": ['"Roboto"', "sans-serif"],
      "roboto-bold": ['"Roboto"', "sans-serif"],
      mooli: ['"Mooli"', "sans-serif"],
      croissant: ['"Croissant One"', "serif"],
    },
    animation: {
      loopL: "loopTextLeft  4s linear infinite",
    },
    keyframes: {
      loopTextLeft: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    transitionProperty: {
      height: "height",
    },
  },
  plugins: [],
};
