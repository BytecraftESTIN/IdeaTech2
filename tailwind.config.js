/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-30px)" },
          "50%": { transform: "translateX(30px)" },
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        clashDisplay: ["var(--font-clash-display)"],
      },
    },
  },
  plugins: [],
};
