/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        lato: ["'Lato'", "sans-serif"],
      },
      animation: {
        hi: "rotate 1.5s linear infinite ",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotateZ(0deg)" },
          "25%": { transform: "rotateZ(15deg)" },
          "50%": { transform: "rotateZ(45deg)" },
          "75%": { transform: "rotateZ(15deg)" },
          "100%": { transform: "rotateZ(0deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
