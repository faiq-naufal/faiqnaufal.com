import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { Redirect } from "@reach/router"
import { ReactComponent as IllustSuccess } from "../../images/achievement.svg"
import { RiArrowGoBackLine } from "react-icons/ri"
import StyledSection from "../../components/Section"
import { LinkOutlined } from "../../components/Button"

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

  return !showPage ? (
    <Redirect noThrow to="/contact" />
  ) : (
    <>
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
    font-weight: 500;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5rem;

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
    color: #505050;
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