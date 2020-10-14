const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

//create slug from file name
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
      trailingSlash: false,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            parent {
              ... on File {
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    switch (node.parent.sourceInstanceName) {
      case `notes`:
        createPage({
          component: path.resolve(`./src/components/layouts/SingleNote.js`),
          path: `/note${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
        break

      // case `showcases`:
      //   createPage({
      //     path: `/showcase${fields.slug}`,
      //     component: path.resolve(`./src/components/layouts/Showcases.js`),
      //     context: {
      //       slug: fields.slug,
      //     },
      //   })
      //   break
    }
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/$/)) {
    page.context.layout = "home"
    createPage(page)
  }
}

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
