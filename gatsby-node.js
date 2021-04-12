const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions, getConfig, loaders, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        //preact config
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        // Must be below test-utils
      },
    },
  })

  const config = getConfig()

  //linaria config
  config.module.rules = [
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.js?$/)
    ),

    {
      ...loaders.js(),

      test: /\.js?$/,
      loader: "@linaria/webpack-loader",
      options: {
        sourceMap: stage.includes("develop"),
        displayName: stage.includes("develop"),
        babelOptions: {
          presets: ["babel-preset-gatsby"],
        },
      },
      exclude: /node_modules/,
    },
  ]

  actions.replaceWebpackConfig(config)
}
