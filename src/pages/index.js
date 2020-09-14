import React from "react"
import styled from "@emotion/styled"
import emoji from "react-easy-emoji"
import { LinkOutlined } from "../components/Button"

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <Content>
          <h1 className="Tinos">Faiq Naufal</h1>
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
          <LinkOutlined to="/contact">
            <span>Let’s Talk! {emoji(`👋`)}</span>
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
    font-size: 2.75rem;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 40px;
    letter-spacing: -1px;

    @media (min-width: 600px) {
      font-size: 4.5rem;
      letter-spacing: 1px;
    }

    @media (min-width: 960px) {
      font-size: 5rem;
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
    margin-top: 20px;
    margin-bottom: 20px;
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
