import { useStaticQuery, graphql } from "gatsby"

const useSiteMetaData = () => {
  const { site, file } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            logoPng
            author
            siteUrl
            siteName
            lang
          }
        }
        file(
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "logo/faiq_naufal_logo.svg" }
        ) {
          logo: publicURL
        }
      }
    `
  )

  return { ...site.siteMetadata, ...file }
}

export default useSiteMetaData
