/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./styles/**/*.{*}",
    "./public/**/*.{*}",
  ],
  theme: {
    fontFamily: {
      roboto: ["roboto-slab"],
    },
  },
  plugins: [],
};
