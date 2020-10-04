import React from "react"
import styled from "@emotion/styled"
import Section, { SectionTopBreak } from "../../components/Section"
import Heading from "../../components/Heading"
import TopIllust from "../../components/TopIllust"
import { ReactComponent as IllustShowcase } from "../../images/landing_page.svg"
import Helmet from "react-helmet"
import Seo from "../../components/Seo"
import useSiteMetaData from "../../components/useSiteMetaData"

export default function Showcase() {
  const { siteUrl } = useSiteMetaData()
  const currentUrl = `${siteUrl}/showcase`
  const title = `🎨 Showcase - Faiq Naufal`
  const description = `A collection of portfolio showcase by Faiq Naufal. He likes to showcase his work to people around the world to see`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091725/assets_faiqnaufal/landing_page.png`
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "🎨 Showcase by Faiq Naufal",
    description: "A collection of portfolio showcase by Faiq Naufal",
    url: `${siteUrl}/showcase`,
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
        <h1>Showcase</h1>
      </Heading>
      <Section data-nosnippet>
        <TopIllust Illustration={IllustShowcase}>
          <h1>
            Collection of <strong>portfolio showcase</strong> from my work
          </h1>
          <p>
            Because making things and sharing the process are fun. I showcase my
            work for people around the world to see
          </p>
          {/* Learning showcase */}
        </TopIllust>
      </Section>
      <SectionTopBreak number="03" />
      <Section>
        <ComingSoon>
          <h2>Coming Soon</h2>
          <p className="card">
            I'm still working on this page. It will take a little more time to
            prepare all my projects to be published here. Soon this page will
            have links for every project I already worked on.
          </p>
        </ComingSoon>
      </Section>
    </>
  )
}

const ComingSoon = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 27px 48px rgba(55, 53, 53, 0.04),
    0px 11.28px 20.0533px rgba(55, 53, 53, 0.0287542),
    0px 6.0308px 10.7214px rgba(55, 53, 53, 0.0238443),
    0px 3.38082px 6.01034px rgba(55, 53, 53, 0.02),
    0px 1.79553px 3.19205px rgba(55, 53, 53, 0.0161557),
    0px 0.747159px 1.32828px rgba(55, 53, 53, 0.0112458);
  padding: 2.5rem 1.25rem;
  border-radius: 4px;
  @media (min-width: 600px) {
    padding: 2.5rem;
  }

  h2 {
    color: #373535;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 24px;

    @media (min-width: 600px) {
      font-size: 2.25rem;
    }
  }

  .card {
    color: #4a5568;
    line-height: 1.75rem;
    letter-spacing: 0.2px;
  }
`
