module.exports = {
  content: [
    './src/**/*.{js}',
  ],
  plugins: [
    require("daisyui"),
    require("postcss"),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  daisyui: {
    themes: ["winter"]
  }
}