import React from "react"
import styled from "@emotion/styled"
import Emoji from "a11y-react-emoji"
import { LinkOutlined } from "../components/Button"
import Helmet from "react-helmet"
import Seo from "../components/Seo"
import useSiteMetaData from "../components/useSiteMetaData"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Home() {
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
      <ContentWrapper>
        <Content>
          <h1>Faiq Naufal</h1>
          <h2 className="job-alias">
            <strong className="odd"> Web Enthusiast</strong>
            <strong>&nbsp;| Front End Web Developer |&nbsp;</strong>
            <strong className="odd"> UI Crafter</strong>
          </h2>

          <p className="heading-label">
            Passionate in crafting <strong>innovational</strong>,{" "}
            <strong>functional</strong>, <strong>quality-focused</strong> modern
            web with latest cutting-edge technology
          </p>
          <LinkOutlined
            to="/contact"
            onClick={e => {
              trackCustomEvent({
                category: "Link",
                action: "Click",
                label: "Home to Contact Link",
              })
            }}
          >
            <span>
              Let’s Talk! <Emoji symbol="👋" />
            </span>
          </LinkOutlined>
        </Content>
      </ContentWrapper>
    </>
  )
}

const ContentWrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Content = styled.div`
  position: relative;
  text-align: center;

  h1 {
    font-size: 3.25rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 24px;
    line-height: 3.75rem;

    @media (min-width: 600px) {
      font-size: 5rem;
      letter-spacing: 1px;
      margin-bottom: 48px;
      line-height: 4rem;
    }

    @media (min-width: 960px) {
      font-size: 5.5rem;
    }
  }

  h2.job-alias {
    strong {
      font-weight: 500;
      font-size: 1.25rem;
      display: block;
    }

    strong.odd {
      display: none;
    }

    @media (min-width: 600px) {
      strong {
        font-size: 1.5rem;
      }
    }

    @media (min-width: 768px) {
      strong,
      strong.odd {
        display: inline-block;
      }
    }
  }

  .heading-label {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    line-height: 1.5rem;
    letter-spacing: 0.25px;

    @media (min-width: 600px) {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    strong {
      font-weight: 600;
      color: #0e8162;
    }

    &::before {
      content: "- ";
    }

    &::after {
      content: " -";
    }
  }
`
