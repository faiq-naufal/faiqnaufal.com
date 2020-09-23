import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "../../components/Section"
import { BsPerson } from "react-icons/bs"
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai"

export default function DetailNote() {
  const data = useStaticQuery(graphql`
    query DetailNoteQuery {
      file(relativePath: { eq: "thumbnail/introducing-the-new-website.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section>
      <DetailContent>
        <div className="heading">
          <ul className="post-category">
            <li>Website</li>
          </ul>
          <h1>Introducing the new website</h1>
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
          <p className="summary">
            Hello there, I'm excited to share you about my new website. I had
            been holding the development for more than 1 year but it's finally
            here.
          </p>
        </div>
        <div className="thumbnail">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Introducing the new website"
          />
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            natus, ipsum vel rem sed nam illo iste ut sequi nisi placeat quis
            ducimus? Nisi, voluptas odio? Est quam quia saepe.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            natus, ipsum vel rem sed nam illo iste ut sequi nisi placeat quis
            ducimus? Nisi, voluptas odio? Est quam quia saepe.
          </p>
        </div>
      </DetailContent>
    </Section>
  )
}

const DetailContent = styled.div`
  .heading {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;

    .post-category {
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

      @media (min-width: 768px) {
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

      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }

    .author {
      display: flex;
      flex-flow: row wrap;
      color: #4a5568;
      font-size: 0.875rem;
      font-weight: 500;

      @media (min-width: 768px) {
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
  /* max-width: 600px;
  background-color: #fff;

  .thumbnail {
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    @media (min-width: 600px) {
      margin-bottom: 2rem;
    }
  }

  

  

  .summary {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    color: #4a5568;
    font-size: 1rem;
    border-bottom: solid 1px #e2e2e2;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      font-size: 1.25rem;
    }
  } */
`
