import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section, { SectionTopBreak } from "../../components/Section"
import Heading from "../../components/Heading"
import TopIllust from "../../components/TopIllust"
import { ReactComponent as IllustDreaming } from "../../images/dream.svg"
import { BsPerson } from "react-icons/bs"
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai"

export default function Note() {
  const data = useStaticQuery(graphql`
    query ListNoteQuery {
      file(relativePath: { eq: "thumbnail/introducing-the-new-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 80, webpQuality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Heading>
        <h1>Note</h1>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustDreaming}>
          <h1>
            Collection of <strong>exposed thoughts</strong> of a dreamer
          </h1>
          <p>
            I write the things I find interesting just like others do. But not
            in the way others do
          </p>
        </TopIllust>
      </Section>
      <SectionTopBreak number="05" />
      <Section>
        <LatestNote>
          <h2>Explore</h2>
          <Link to="./introducing-the-new-website">
            <div className="card-latest">
              <div className="col-grid">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Introducing the new website"
                />
              </div>
              <div className="col-grid">
                <div className="content-wrapper">
                  <ul className="note-category">
                    <li>Website</li>
                  </ul>
                  <h3>Introducing the new website</h3>
                  <p className="time-to-read">
                    <AiOutlineFieldTime />
                    <span>~ 3 min to read</span>
                  </p>
                  <p className="summary">
                    Hello there, I'm excited to share you about my new website.
                    I had been holding the development for more than 1 year but
                    it's finally here.
                  </p>
                  <div className="author">
                    <p>
                      <BsPerson />
                      <span>Faiq Naufal</span>
                    </p>
                    <p>
                      <AiOutlineCalendar />
                      <span>22 Sep 2020</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </LatestNote>
      </Section>
      {/* list notes v */}
    </>
  )
}

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
    font-weight: 700;
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
        margin-bottom: 1.25rem;
        line-height: 2.5rem;
        font-size: 2rem;
      }
    }

    p {
      display: flex;
      align-items: center;

      svg {
        font-size: 1.5rem;
        color: #0e8162;
      }

      span {
        margin-left: 0.5rem;
      }
    }

    .time-to-read {
      color: #6f757b;
      font-weight: 300;
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
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }

    .summary {
      margin-top: 1.25rem;
      color: #4a5568;
      font-size: 1rem;

      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }

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
  }
`
