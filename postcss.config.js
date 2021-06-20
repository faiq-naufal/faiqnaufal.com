// const cssnano = require("cssnano")
// const tailwindcss = require("tailwindcss")
// const autoprefixer = require("autoprefixer")
// const purgecss = require("@fullhuman/postcss-purgecss")({
//   content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
// })

// module.exports = {
//   plugins: [
//     tailwindcss,
//     autoprefixer,
//     ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : []),
//   ],
// }

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
