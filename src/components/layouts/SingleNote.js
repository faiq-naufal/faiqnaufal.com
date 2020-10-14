import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "../Section"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { BsPerson } from "react-icons/bs"
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai"
import Helmet from "react-helmet"
import Seo from "../Seo"
import useSiteMetaData from "../useSiteMetaData"

export default function DetailNote({ data, location }) {
  const {
    title,
    tag,
    overview,
    date,
    featureImage,
  } = data.markdownRemark.frontmatter
  const { slug, readingTime } = data.markdownRemark.fields

  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/note${slug}`
  const thumbnail = featureImage.publicURL
  const datePublished = date
  const dateModified = date

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: `${siteUrl}${thumbnail}`,
    genre: tag,
    keywords: tag,
    url: currentUrl,
    description: overview,
    datePublished: datePublished,
    dateModified: dateModified,
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
        image={thumbnail}
        currentUrl={currentUrl}
        schemaMarkup={schemaMarkup}
      />
      <Section>
        <DetailContent>
          <div className="heading">
            <StyledLink to="/note">
              <HiOutlineArrowLeft size={24} /> <span>Go to note</span>
            </StyledLink>
            <ul className="note-tag">
              <li>{tag}</li>
            </ul>
            <h1>{title}</h1>
            <div className="author">
              <p>
                <BsPerson size={24} color="#0e8162" />
                <span>Faiq Naufal</span>
              </p>
              <p>
                <AiOutlineCalendar size={24} color="#0e8162" />
                <span>{dateModified}</span>
              </p>
              <p>
                <AiOutlineFieldTime size={24} color="#0e8162" />
                <span>~ {Math.round(readingTime.minutes)} min to read</span>
              </p>
            </div>
            <p className="overview">{overview}</p>
          </div>
          <div className="thumbnail">
            <Img fluid={featureImage.childImageSharp.fluid} alt={title} />
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></div>
        </DetailContent>
      </Section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tag
        overview
        date(formatString: "DD MMM yyyy")
        featureImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 720, quality: 70, webpQuality: 70) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
      html
    }
  }
`

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: rgba(74, 85, 104, 0.85);
  font-weight: 500;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    margin-bottom: 2.5rem;
  }

  &:hover {
    text-decoration: underline;
    color: #373535;
  }
  span {
    margin-left: 0.25rem;
    display: flex;
    align-items: center;
  }
`

const DetailContent = styled.div`
  .heading {
    max-width: 600px;
    margin: 0 auto;

    .note-tag {
      display: flex;
      flex-flow: row wrap;

      li {
        background-color: #0e8162;
        color: #fff;
        padding: 0.375rem 1.25rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }

    h1 {
      color: #373535;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.25rem;
      margin: 1.5rem 0;

      @media (min-width: 600px) {
        margin: 2.5rem 0;
        line-height: 3.5rem;
        font-size: 3rem;
      }
    }

    .overview {
      padding-top: 1.25rem;
      color: #4a5568;
      font-size: 1rem;
      border-top: solid 1px #e2e2e2;

      @media (min-width: 600px) {
        font-size: 1.25rem;
      }
    }

    .author {
      display: flex;
      flex-flow: row wrap;
      color: #4a5568;
      font-size: 0.875rem;
      font-weight: 500;

      @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        font-size: 1rem;
      }

      p {
        display: flex;
        align-items: center;
        margin-right: 1.25rem;
        margin-bottom: 1.25rem;

        span {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .thumbnail {
    margin: 2.5rem auto;
    border-radius: 4px;
    overflow: hidden;
    max-width: 720px;
  }

  .blog-content {
    background-color: #fff;
    border-radius: 4px;
    color: #4a5568;
    box-shadow: 0px 27px 48px rgba(55, 53, 53, 0.04),
      0px 11.28px 20.0533px rgba(55, 53, 53, 0.0287542),
      0px 6.0308px 10.7214px rgba(55, 53, 53, 0.0238443),
      0px 3.38082px 6.01034px rgba(55, 53, 53, 0.02),
      0px 1.79553px 3.19205px rgba(55, 53, 53, 0.0161557),
      0px 0.747159px 1.32828px rgba(55, 53, 53, 0.0112458);
    padding: 2.5rem 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.2px;

    @media (min-width: 600px) {
      padding: 2.5rem;
    }

    h2 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      color: #373535;

      @media (min-width: 600px) {
        font-size: 2rem;
      }

      &:not(:first-of-type) {
        margin-top: 2.5rem;
      }
    }

    strong {
      color: #373535;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;

      p {
        margin-bottom: 1.25rem;
      }

      li {
        position: relative;

        &:before {
          content: "";
          width: 4px;
          height: 4px;
          background-color: #373535;
          position: absolute;
          top: 12px;
          left: -12px;

          @media (min-width: 600px) {
            top: 12px;
            left: -14px;
          }
        }
      }
    }

    p {
      &:not(:last-of-type) {
        margin-bottom: 1.25rem;
      }
    }
  }
`
