import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Seo from "@components/Commons/Seo"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"
import BlogTemplate from "@components/Blog/Template"

export interface BlogInterface {
  node: {
    id: string
    slug: string
    timeToRead: number
    frontmatter: {
      title: string
      date: string
      tldr: string
    }
  }
}

export interface BlogPageProps {
  data: {
    allMdx: {
      edges: [BlogInterface]
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const { siteUrl } = useSiteMetaData()
  const currentUrl = `${siteUrl}/blog`
  const title = "📝 Blog - Faiq Naufal"
  const description =
    "A collection of blogs written by Faiq Naufal. A dreamer who shares some of his exposed thoughts and passions into writing"
  const thumbnailSEO =
    "https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091713/assets_faiqnaufal/dream.png"

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "📝 Blog by Faiq Naufal",
    description: "A collection of blogs written by Faiq Naufal",
    url: currentUrl,
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
      <BlogTemplate blogs={data.allMdx.edges} />
    </>
  )
}

export default BlogPage

export const query = graphql`
  query BlogListPage {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          slug
          timeToRead
          frontmatter {
            date(formatString: "DD MMM yyyy")
            title
            tldr
          }
        }
      }
    }
  }
`
