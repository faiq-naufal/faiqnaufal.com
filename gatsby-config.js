require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.faiqnaufal.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Faiq Naufal | Web Developer Specialized in Front-End Development`,
    description: `I am Faiq Naufal. Web Developer specialize in Front-End Development. I craft beautiful website with latest cutting-edge front-end web technologies.`,
    keyword: `Faiq Naufal, Portfolio, CV, Resume, Personal Website, Front-End, Developer, Web Developer, Website, Software Engineer`,
    author: `Faiq Naufal`,
    siteUrl: siteUrl,
    lang: `en`,
  },
  plugins: [
    //SEO
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    //Theme & Layout
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0e8162`,
        showSpinner: false,
        minimum: 0.1,
      },
    },
    //File
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `assets_faiqnaufal/`,
      },
    },
    //Netlify
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "https://www.dev.faiqnaufal.com/*": [
            "X-Robots-Tag: noindex, nofollow",
          ],
          "https://dev-faiqnaufal.netlify.app/*": [
            "X-Robots-Tag: noindex, nofollow",
          ],
        },
      },
    },
    //Optimization
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-loadable-components-ssr`,
    `netlify-plugin-gatsby-cache`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dimensions: false,
        prettier: true,
        svgo: true,
        svgoConfig: {
          removeViewBox: true,
          cleanupIDs: true,
        },
      },
    },
    //PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faiq Naufal Website`,
        short_name: `Faiq Naufal`,
        description: `A personal website of Faiq Naufal`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `./src/images/logo/faiq_naufal_logo.svg`,
      },
    },
    // `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-offline`,
  ],
}
