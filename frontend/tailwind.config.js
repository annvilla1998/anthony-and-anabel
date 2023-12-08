module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  plugins: [
    require("daisyui"),
    require("postcss"),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  daisyui: {
    themes: ["retro", "winter"]
  }
}