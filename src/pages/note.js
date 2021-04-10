import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Seo from "../components/Commons/Seo"
import useSiteMetaData from "../components/Hooks/useSiteMetaData"
import NoteTemplate from "../components/Note/Template"

const NotePage = ({ data }) => {
  const notes = data.allMdx.edges
  const { siteUrl } = useSiteMetaData()
  const currentUrl = `${siteUrl}/note`
  const title = `📝 Note - Faiq Naufal`
  const description = `A collection of blogs and notes written by Faiq Naufal. A dreamer who shares some of his exposed thoughts and passions into writing`
  const thumbnailSEO = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091713/assets_faiqnaufal/dream.png`

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "📝 Note by Faiq Naufal",
    description: "A collection of blogs and notes written by Faiq Naufal",
    url: `${siteUrl}/note`,
    author: {
      "@type": "Person",
      name: "Faiq Naufal",
      url: siteUrl,
    },
    creator: {
      "@type": "Person",
      name: "Faiq Naufal",
      url: siteUrl,
    },
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <Seo
        title={title}
        description={description}
        image={thumbnailSEO}
        currentUrl={currentUrl}
        schemaMarkup={schemaMarkup}
      />
      <NoteTemplate notes={notes} />
    </>
  )
}

export default NotePage

export const query = graphql`
  query AllNotes {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          slug
          timeToRead
          frontmatter {
            author
            date(formatString: "DD MMM yyyy")
            title
            tag
            overview
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  quality: 70
                  webpOptions: { quality: 70 }
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
