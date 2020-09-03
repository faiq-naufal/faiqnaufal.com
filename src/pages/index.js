import React from "react"
import styled from "@emotion/styled"
import { AiOutlineDownload } from "react-icons/ai"

const IndexPage = () => {
  return (
    <>
      <ContentWrapper>
        <Content>
          <h1 className="Merriweather">Faiq Naufal</h1>
          <p className="job-alias">
            <strong> Web Enthusiast</strong>
            <strong>&nbsp;| Front End Web Developer |&nbsp;</strong>
            <strong> UI Crafter</strong>
          </p>

          <p className="heading-label">
            Passionate in crafting <strong>innovational</strong>,{" "}
            <strong>functional</strong>, <strong>quality-focused</strong> modern
            web with latest cutting-edge technology
          </p>
          <ButtonOutlined>
            <span>Download Resume</span>
            <AiOutlineDownload size={24} />
          </ButtonOutlined>
        </Content>
      </ContentWrapper>
    </>
  )
}

export default IndexPage

const ButtonOutlined = styled.button`
  background: none;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  padding: 12px 24px;
  border: solid 2px #000;

  span {
    margin-right: 8px;
  }
`

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
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 24px;
    margin-bottom: 24px;

    @media (min-width: 600px) {
      font-size: 4.5rem;
    }
  }

  .job-alias {
    strong {
      font-weight: 500;
      font-size: 1.25rem;
      display: block;
    }

    strong:nth-of-type(1),
    strong:nth-of-type(3) {
      display: none;
    }

    @media (min-width: 600px) {
      strong,
      strong:nth-of-type(1),
      strong:nth-of-type(3) {
        font-size: 1.5rem;
      }
    }

    @media (min-width: 768px) {
      strong,
      strong:nth-of-type(1),
      strong:nth-of-type(3) {
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

    strong {
      font-weight: 600;
    }

    &::before {
      content: "- ";
    }

    &::after {
      content: " -";
    }
  }
`
