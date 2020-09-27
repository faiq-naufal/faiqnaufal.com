import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { Redirect } from "@reach/router"
import { ReactComponent as IllustSuccess } from "../../images/achievement.svg"
import { RiArrowGoBackLine } from "react-icons/ri"
import StyledSection from "../../components/Section"
import { LinkOutlined } from "../../components/Button"
import Helmet from "react-helmet"
import Seo from "../../components/Seo"
import JsonLd from "../../components/JsonLd"
import useSiteMetaData from "../../components/useSiteMetaData"

const GlobalStyle = () => (
  <Global
    styles={css`
      @media (max-width: 959px) {
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    `}
  />
)

export default function MailSuccess({ location }) {
  const { showPage } = location.state || false

  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/contact/mail-success`
  const title = `✉️ Successfully Sending a Message - Faiq Naufal`
  const description = `Thank you so much for sending me a message. Your message has been successfully sent to me`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091725/assets_faiqnaufal/achievement.png`

  return !showPage ? (
    <Redirect noThrow to="/contact" />
  ) : (
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
            image: logo,
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
      <GlobalStyle />
      <Section>
        <div className="illust-container">
          <IllustSuccess title="Email successfully be sent" />
        </div>
        <p className="thanks maxw-600">
          Hey, thank you so much for sending me a message!&nbsp;
          <strong>You are awesome.</strong>
        </p>
        <p className="successful-message maxw-600">
          Your message has been successfully sent to me. Please give me a time
          to read and reply your message.
        </p>
        <div className="footer">
          <LinkOutlined to="/contact">
            <RiArrowGoBackLine /> &nbsp;Back to Contact
          </LinkOutlined>
        </div>
      </Section>
    </>
  )
}

const Section = styled(StyledSection)`
  .illust-container {
    text-align: center;

    svg {
      width: 100%;
      max-width: 200px;
      height: 100%;

      @media (min-width: 600px) {
        max-width: 280px;
      }
    }
  }

  .maxw-600 {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .thanks {
    margin-top: 20px;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5rem;
    color: #373535;

    strong {
      font-weight: 500;
      color: #0e8162;
    }

    @media (min-width: 600px) {
      margin-top: 40px;
      font-size: 1.5rem;
    }
  }

  .successful-message {
    margin-top: 20px;
    text-align: center;
    color: #4a5568;
    line-height: 1.25rem;
    font-size: 0.875rem;

    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }

  .footer {
    margin-top: 20px;
    text-align: center;

    @media (min-width: 600px) {
      margin-top: 40px;
    }
  }
`
