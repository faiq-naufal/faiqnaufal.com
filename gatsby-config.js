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
    title: `Faiq Naufal - A Web Developer Focused in Front-End Development`,
    description: `I am Faiq Naufal. Web developer focused in front-end development. I craft beautiful website with latest cutting-edge front-end web technologies.`,
    keywords: `Faiq Naufal, Portfolio, CV, Resume, Personal Website, Front-End, Developer, Web Developer, Website, Software Engineer`,
    author: `Faiq Naufal`,
    siteUrl: siteUrl,
    siteName: "Faiq Naufal",
    lang: `en`,
  },
  plugins: [
    //SEO
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-133730197-2`,
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
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
            sitemap: `${siteUrl}/sitemap.xml`,
            host: siteUrl,
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
        minimum: 0.1,
        parent: `#gatsby-focus-wrapper`,
        trickleSpeed: 400,
        trickleRate: 0.2,
        showSpinner: false,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
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
        // headers: {
        //   "https://www.dev.faiqnaufal.com/*": [
        //     "X-Robots-Tag: noindex, nofollow",
        //   ],
        //   "https://dev-faiqnaufal.netlify.app/*": [
        //     "X-Robots-Tag: noindex, nofollow",
        //   ],
        // },
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
          purpose: `maskable`,
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
