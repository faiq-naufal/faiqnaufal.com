import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { ReactComponent as IllustDreaming } from "../../images/dream.svg"
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

export default function Note() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <div className="maxw-600">
          <h1 className="Tinos">Keep dreaming! No inspiration yet.</h1>
          <div className="illust-container">
            <IllustDreaming title="Keep dreaming! No inspiration yet." />
          </div>
          <p className="amazing-stories">
            Amazing stories can take shape in many forms. Whether it is from
            self-experience or others. Those stories can be an inspiration for
            others. Mind to share yours?
          </p>
          <div className="footer">
            <LinkOutlined to="/contact">Tell a story</LinkOutlined>
          </div>
        </div>
      </Section>
    </>
  )
}

const Section = styled(StyledSection)`
  h1 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.25rem;
    margin-bottom: 24px;
    text-align: center;
  }

  .maxw-600 {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .illust-container {
    text-align: center;

    svg {
      width: 100%;
      max-width: 240px;
      height: 100%;

      @media (min-width: 600px) {
        max-width: 320px;
      }
    }
  }

  .amazing-stories,
  .footer {
    margin-top: 24px;
    text-align: center;
  }
`
