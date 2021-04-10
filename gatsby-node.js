const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        //temporary workaround linaria break gatsby v3
        "@reach/router": path.dirname(
          require.resolve(`@gatsbyjs/reach-router/package.json`)
        ),
        //preact config
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        // Must be below test-utils
      },
    },
  })
}
