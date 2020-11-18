require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { NODE_ENV, TRACKING_ID } = process.env

module.exports = {
  siteMetadata: {
    title: `Faiq Naufal - A Web Developer Focused in Front-End Development`,
    description: `I am Faiq Naufal. Web developer focused in front-end development. I craft beautiful website with latest cutting-edge front-end web technologies.`,
    keywords: `Faiq Naufal, Portfolio, CV, Resume, Personal Website, Front-End, Developer, Web Developer, Website, Software Engineer, Software Developer`,
    logoPng: `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601447867/assets_faiqnaufal/faiq_naufal_logo.png`,
    author: `Faiq Naufal`,
    siteUrl: `https://faiqnaufal.com`,
    siteName: "Faiq Naufal",
    lang: `en`,
  },
  plugins: [
    //SEO
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: TRACKING_ID,
        head: true,
        defer: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/contact/mail-success`],
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://faiqnaufal.com`,
        sitemap: "https://faiqnaufal.com/sitemap.xml",
        resolveEnv: () => NODE_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
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
        component: require.resolve(`./src/components/layouts/MainLayout`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0e8162`,
        minimum: 0.1,
        parent: `#gatsby-focus-wrapper`,
        trickleSpeed: 400,
        trickleRate: 0.2,
        showSpinner: false,
      },
    },
    //File System
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/content/notes`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `showcases`,
    //     path: `${__dirname}/src/content/showcases`,
    //   },
    // },
    //Markdown, Transformer, and File
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 720,
              quality: 70,
              withWebp: true,
              tracedSVG: true,
            },
          },
        ],
      },
    },

    //Optimization
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-loadable-components-ssr`,
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
        name: `Faiq Naufal`,
        short_name: `Faiq Naufal`,
        description: `A personal website of Faiq Naufal`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0e8162`,
        display: `standalone`,
        icon: `./src/images/logo/faiq_naufal_logo.svg`,
        icon_options: {
          purpose: `maskable any`,
        },
      },
    },
    // `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/showcase/*`, `/note/*`],
      },
    },
  ],
}
