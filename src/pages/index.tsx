import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Seo from "@components/Commons/Seo"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"
import HomeTemplate from "@components/Home/Template"

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

export interface HomePageProps {
  data: {
    allMdx: {
      edges: [BlogInterface]
    }
  }
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { siteUrl, logo } = useSiteMetaData()
  const title = `👋 Hi, I'm Faiq Naufal. You have found my personal website!`
  const description = `This is my personal website. A website fully dedicated to tell my personal info, showcase my work, and store my thought as a web developer from Indonesia.`
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faiq Naufal",
    givenName: "Faiq",
    gender: "Male",
    image: `${siteUrl}${logo}`,
    url: siteUrl,
    jobTitle: "Web Developer",
    nationality: "Indonesia",
    description: "Web and Technology Enthusiast",
    sameAs: [
      "https://www.linkedin.com/in/faiqnaufal",
      "https://github.com/faiq-naufal",
    ],
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Seo
        title={title}
        description={description}
        currentUrl={siteUrl}
        schemaMarkup={schemaMarkup}
      />
      <HomeTemplate blogs={data.allMdx.edges} />
    </>
  )
}

export default HomePage

export const query = graphql`
  query BlogListHome {
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
            date
            title
            tldr
          }
        }
      }
    }
  }
`
