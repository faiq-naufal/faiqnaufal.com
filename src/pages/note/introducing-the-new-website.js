import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "../../components/Section"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { BsPerson } from "react-icons/bs"
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai"
import Helmet from "react-helmet"
import Seo from "../../components/Seo"
import JsonLd from "../../components/JsonLd"
import useSiteMetaData from "../../components/useSiteMetaData"

export default function DetailNote({ location }) {
  const data = useStaticQuery(graphql`
    query DetailNoteQuery {
      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "thumbnail/introducing-the-new-website.jpg" }
      ) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, webpQuality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const { siteUrl } = useSiteMetaData()
  const currentUrl = `${siteUrl}/note/${location.pathname}`
  const title = `Introducing The New Website - Faiq Naufal`
  const description =
    "Hello there, I'm excited to share to you about my new website. I had been holding the development for more than 1 year but it's finally here."
  const thumbnail = data.thumbnail.publicURL

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
      />
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: siteUrl,
          name: "Faiq Naufal",
          description: "Faiq Naufal's Personal Website",
          mainEntity: {
            "@type": "Person",
            name: "Faiq Naufal",
            email: "contact@faiqnaufal.com",
            image: `${siteUrl}/faiq_naufal_logo.svg`,
            jobTitle: "Web Developer",
            gender: "male",
            nationality: "Indonesia",
            sameAs: [
              "https://www.linkedin.com/in/faiqnaufal",
              "https://github.com/faiq-naufal",
            ],
          },
        }}
      </JsonLd>
      <Section>
        <DetailContent>
          <div className="heading">
            <StyledLink to="/note">
              <HiOutlineArrowLeft size={24} /> <span>Go to note</span>
            </StyledLink>
            <ul className="note-category">
              <li>Website</li>
            </ul>
            <h1>{title}</h1>
            <div className="author">
              <p>
                <BsPerson />
                <span>Faiq Naufal</span>
              </p>
              <p>
                <AiOutlineCalendar />
                <span>22 Sep 2020</span>
              </p>
              <p>
                <AiOutlineFieldTime />
                <span>~ 3 min to read</span>
              </p>
            </div>
            <p className="summary">{description}</p>
          </div>
          <div className="thumbnail">
            <Img
              fluid={data.thumbnail.childImageSharp.fluid}
              alt="Introducing the new website"
            />
          </div>
          <div className="blog-content">
            <h2>Introduction</h2>
            <p>
              I'm very excited to present my new personal website. My old
              website was created at 2018. The website itself wasn't really
              scallable to put more contents. After some considerations, I
              thought I really needed to revamp the whole website. I wanted the
              new website to be faster, more accessible, SEO-friendly,
              minimalistic and fun. I originally planned to revamp the website
              on last year but I didn't have an inspiration and time to do it.
              This new website is intended to be my personal value for my
              professional career and hobby.
            </p>
            <h2>What's inside the website?</h2>
            <ul>
              <p>
                The website is broken down into five section of pages to
                separate and make each part is easier to navigate:
              </p>
              <li>
                <strong>Home</strong>
                <p>
                  The root and homepage of the website. This is the page that
                  welcomes you as you visit the website.
                </p>
              </li>
              <li>
                <strong>About</strong>
                <p>
                  A place where I tell about my info, background and my personal
                  core values. I also provide other useful info such as list of
                  my skills and my productivity tools.
                </p>
              </li>
              <li>
                <strong>Showcase</strong>
                <p>
                  A place where I put and showcase all my projects whether it is
                  my personal project, learning project or professional project.
                  Each project has detail page which provides the information
                  about the project itself. The detail page may provides
                  informations such as the technologies used, description /
                  background of the project, project screenshot, and how the
                  project is created.
                </p>
              </li>
              <li>
                <strong>Contact</strong>
                <p>
                  Welcome to contact page, a place where you can contact and
                  share stories with me. You can message me with subject
                  literally anything from here with the exception of spam or
                  marketing message of course.
                </p>
              </li>
              <li>
                <strong>Note</strong>
                <p>
                  Hey, right now you are on this section of website. A note page
                  is basically made up of my random thoughts and notes which I
                  like to share with everyone.
                </p>
              </li>
            </ul>
            <p>
              That's all folks. This is the first note from this website. I plan
              to write more next time whenever I have some thoughts to share.
              Anyway, thank you so much for reaching this far.
            </p>
          </div>
        </DetailContent>
      </Section>
    </>
  )
}

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

    .note-category {
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

    .summary {
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

        svg {
          font-size: 1.5rem;
          color: #0e8162;
        }

        span {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .thumbnail {
    margin: 2.5rem 0;
    border-radius: 4px;
    overflow: hidden;
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
