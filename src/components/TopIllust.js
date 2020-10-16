import React from "react"
import styled from "@emotion/styled"

export default function TopIllust({ Illustration, children, ...others }) {
  return (
    <StyledTopIllust {...others}>
      <div className="col-grid illust">
        <Illustration />
      </div>
      <div className="col-grid">
        <div className="top-card">{children}</div>
      </div>
    </StyledTopIllust>
  )
}

const StyledTopIllust = styled.div`
  max-width: 480px;
  margin: 0 auto;

  @media (min-width: 960px) {
    max-width: unset;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-column-gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }

  .col-grid:first-of-type {
    text-align: center;
  }

  .illust {
    svg {
      width: 100%;
      height: 100%;
      max-width: 240px;
      max-height: 240px;

      @media (min-width: 960px) {
        max-width: 360px;
        max-height: 360px;
      }
    }
  }

  .top-card {
    background: #ffffff;
    box-shadow: 0px 38px 101px rgba(55, 53, 53, 0.07),
      0px 15.8755px 42.1954px rgba(55, 53, 53, 0.0503198),
      0px 8.4878px 22.5597px rgba(55, 53, 53, 0.0417275),
      0px 4.75819px 12.6468px rgba(55, 53, 53, 0.035),
      0px 2.52704px 6.7166px rgba(55, 53, 53, 0.0282725),
      0px 1.05156px 2.79493px rgba(55, 53, 53, 0.0196802);
    border-radius: 4px;
    padding: 32px 28px;

    @media (max-width: 959px) {
      margin-top: 20px;
    }

    @media (min-width: 1024px) {
      padding: 40px;
    }

    h1 {
      color: #373535;
      font-size: 2.25rem;
      line-height: 3rem;

      strong {
        color: #0e8162;
      }

      @media (min-width: 960px) {
        font-size: 2.5rem;
        line-height: 3.25rem;
      }
    }

    p {
      font-weight: 400;
      color: #4a5568;
      font-size: 1.25rem;
      margin-top: 24px;
      strong {
        color: #0e8162;
      }
    }

    a {
      background: none;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      text-align: center;
      margin-top: 24px;
      margin-right: auto;
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      border-radius: 4px;
      padding: 12px 32px;
      border: solid 1px #0e8162;
      color: #0e8162;
      min-width: 170px;

      span {
        margin-right: 4px;
      }

      &:hover {
        background-color: #0e8162;
        color: #fff;
      }
    }
  }
`
