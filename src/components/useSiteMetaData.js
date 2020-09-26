import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetaData() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            siteName
            image
            lang
          }
        }
      }
    `
  )

  return site.siteMetadata
}
