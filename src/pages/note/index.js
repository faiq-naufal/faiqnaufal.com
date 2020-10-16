import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Section, { SectionTopBreak } from "../../components/Section"
import Heading from "../../components/Heading"
import TopIllust from "../../components/TopIllust"
import { ReactComponent as IllustDreaming } from "../../images/dream.svg"
import { ReactComponent as Number05 } from "../../images/05.svg"
import { BsPerson } from "react-icons/bs"
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai"
import Helmet from "react-helmet"
import Seo from "../../components/Seo"
import useSiteMetaData from "../../components/useSiteMetaData"

export default function Note({ data }) {
  const { latestNote, restOfNotes } = data

  const { siteUrl } = useSiteMetaData()
  const currentUrl = `${siteUrl}/note`
  const title = `📝 Note - Faiq Naufal`
  const description = `A collection of blogs and notes written by Faiq Naufal. A dreamer who shares some of his exposed thoughts and passions into writing`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091713/assets_faiqnaufal/dream.png`
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
        image={thumbnail}
        currentUrl={currentUrl}
        schemaMarkup={schemaMarkup}
      />
      <Heading>
        <h1>Note</h1>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustDreaming}>
          <h1>
            Collection of <strong>exposed thoughts</strong> and{" "}
            <strong>passions</strong> of a dreamer
          </h1>
          <p>
            I write the thing I find interesting just like others do. But not in
            the way others do. Most of the times, it comes from my perspective
            and my opinion
          </p>
        </TopIllust>
      </Section>
      <SectionTopBreak TextNumber={<Number05 />} />
      <Section>
        <LatestNote>
          <h2>Explore</h2>
          {latestNote.nodes.map(latestNote => {
            const {
              title,
              tag,
              featureImage,
              overview,
              date,
            } = latestNote.frontmatter
            const { slug, readingTime } = latestNote.fields
            return (
              <Link key={latestNote.id} to={`.${slug}`}>
                <div className="card-latest">
                  <div className="col-grid">
                    <Img
                      fluid={featureImage.childImageSharp.fluid}
                      alt={title}
                    />
                  </div>
                  <div className="col-grid">
                    <div className="content-wrapper">
                      <ul className="note-tag">
                        <li>{tag}</li>
                      </ul>
                      <h3>{title}</h3>
                      <p className="time-to-read">
                        <AiOutlineFieldTime size={20} color="#0e8162" />
                        <span>
                          ~ {Math.round(readingTime.minutes)} min to read
                        </span>
                      </p>
                      <p className="overview">{overview}</p>
                      <div className="author">
                        <p>
                          <BsPerson size={20} color="#0e8162" />
                          <span>Faiq Naufal</span>
                        </p>
                        <p>
                          <AiOutlineCalendar size={20} color="#0e8162" />
                          <span>{date}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </LatestNote>
      </Section>
      {/* list of notes */}
      <Section>
        <div>
          {restOfNotes.nodes.map(note => {
            const {
              title,
              tag,
              featureImage,
              overview,
              date,
            } = note.frontmatter
            const { slug, readingTime } = note.fields
            return (
              <>
                <Link key={note.id} to={`.${slug}`}>
                  <div>{title}</div>
                  <div>{tag}</div>
                  <Img fluid={featureImage.childImageSharp.fluid} alt={title} />
                  <div>{overview}</div>
                  <div>{date}</div>
                  <div>{slug}</div>
                  <div>{readingTime.minutes}</div>
                </Link>
              </>
            )
          })}
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  {
    latestNote: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        id
        fields {
          slug
          readingTime {
            minutes
          }
        }
        frontmatter {
          title
          tag
          overview
          date(formatString: "DD MMM yyyy")
          featureImage {
            childImageSharp {
              fluid(maxWidth: 720, quality: 70, webpQuality: 70) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    restOfNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: 1
    ) {
      nodes {
        id
        fields {
          slug
          readingTime {
            minutes
          }
        }
        frontmatter {
          title
          tag
          overview
          date(formatString: "DD MMM yyyy")
          featureImage {
            childImageSharp {
              fluid(maxWidth: 720, quality: 70, webpQuality: 70) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

const LatestNote = styled.div`
  a {
    color: inherit;
    text-decoration: none;

    .content-wrapper * {
      text-decoration: none;
    }

    &:hover h3 {
      text-decoration: underline;
    }
  }
  h2 {
    margin-bottom: 1.5rem;
    color: #373535;
    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }

  .card-latest {
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr minmax(1fr, auto);
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 27px 48px rgba(55, 53, 53, 0.04),
      0px 11.28px 20.0533px rgba(55, 53, 53, 0.0287542),
      0px 6.0308px 10.7214px rgba(55, 53, 53, 0.0238443),
      0px 3.38082px 6.01034px rgba(55, 53, 53, 0.02),
      0px 1.79553px 3.19205px rgba(55, 53, 53, 0.0161557),
      0px 0.747159px 1.32828px rgba(55, 53, 53, 0.0112458);

    @media (min-width: 768px) {
      max-width: unset;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }

    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  .content-wrapper {
    padding: 1.25rem;

    @media (min-width: 768px) {
      padding: 2.5rem 1.25rem;
    }

    @media (min-width: 1024px) {
      padding: 2.5rem;
    }

    h3 {
      color: #373535;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.75rem;
      margin-top: 1.25rem;
      margin-bottom: 0.75rem;

      @media (min-width: 768px) {
        margin-bottom: 0.625rem;
        line-height: 2.5rem;
        font-size: 2rem;
      }
    }

    p {
      display: flex;
      align-items: center;

      span {
        margin-left: 0.5rem;
      }
    }

    .time-to-read {
      color: #6f757b;
      font-weight: 300;
      font-size: 0.875rem;
    }

    .author p:last-of-type {
      justify-content: flex-end;
    }

    .author {
      margin-top: 1.25rem;
      padding-top: 1.25rem;
      border-top: solid 1px #e2e2e2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      color: #4a5568;
      grid-column-gap: 8px;
      font-size: 0.875rem;
    }

    .overview {
      margin-top: 0.75rem;

      @media (min-width: 768px) {
        margin-top: 0.625rem;
      }

      color: #4a5568;
      font-size: 1rem;
    }

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
  }
`
