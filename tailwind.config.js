module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
