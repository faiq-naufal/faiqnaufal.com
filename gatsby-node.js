exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: "preact/compat",
        react$: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom$": "preact/compat",
      },
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(new RegExp("/"))) {
    page.context.layout = "home"
    createPage(page)
  }
}
