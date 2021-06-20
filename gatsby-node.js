const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  // webpack config
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // preact config
        // react: "preact/compat",
        // "react-dom/test-utils": "preact/test-utils",
        // "react-dom": "preact/compat",
        // path import aliases
        "@components": path.resolve(__dirname, "src/components"),
        "@contexts": path.resolve(__dirname, "src/contexts"),
        "@helpers": path.resolve(__dirname, "src/helpers"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },
  })
}
