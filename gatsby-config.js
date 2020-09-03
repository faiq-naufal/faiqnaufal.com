require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Faiq Naufal | Web Developer Specialized in Front-End Development`,
    description: `I am Faiq Naufal. Web Developer specialize in Front-End Development. I craft beautiful website with latest cutting-edge front-end web technologies.`,
    keyword: `Faiq Naufal, Portfolio, CV, Resume, Personal Website, Front-End, Developer, Web Developer, Website, Software Engineer`,
    author: `Faiq Naufal`,
    url: `https://www.faiqnaufal.com/`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faiq Naufal Website`,
        short_name: `Faiq Naufal`,
        description: `A personal website of Faiq Naufal. This website is considered as Faiq Naufal's portfolio`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/faiq-naufal-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `assets-faiqnaufal.com/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
