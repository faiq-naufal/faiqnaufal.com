import React from "react"
import { graphql } from "gatsby"
import { getImage, getSrc } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import Seo from "@components/Commons/Seo"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"
import DetailNoteTemplate from "@components/Note/DetailNote/Template"

const DetailNotePage = ({ data }) => {
  const {
    body,
    slug,
    timeToRead,
    frontmatter: { author, date, title, tag, overview, featureImage },
  } = data.mdx

  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/note/${slug}`
  const heroImagePath = getSrc(featureImage)
  const heroImage = getImage(featureImage)
  const datePublished = date
  const dateModified = date

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: heroImagePath,
    genre: tag,
    keywords: tag,
    url: currentUrl,
    description: overview,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: author,
      url: siteUrl,
    },
    creator: {
      "@type": "Person",
      name: "Faiq Naufal",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Faiq Naufal",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${logo}`,
        width: "48",
        height: "48",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <Seo
        title={`📝 ${title} - Faiq Naufal`}
        description={overview}
        image={heroImagePath}
        currentUrl={currentUrl}
        schemaMarkup={schemaMarkup}
      />
      <DetailNoteTemplate
        heroImage={heroImage}
        tag={tag}
        title={title}
        author={author}
        dateModified={dateModified}
        timeToRead={timeToRead}
        overview={overview}
        body={body}
      />
    </>
  )
}

export default DetailNotePage

export const query = graphql`
  query NoteBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
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
`
