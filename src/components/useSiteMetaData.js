import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetaData() {
  const { site, file } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
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
