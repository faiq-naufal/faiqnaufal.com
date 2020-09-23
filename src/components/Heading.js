import React from "react"
import styled from "@emotion/styled"

export default function Heading({ children, ...others }) {
  return <StyledHeading {...others}>{children}</StyledHeading>
}

const StyledHeading = styled.div`
  position: relative;
  margin-bottom: 20px;

  &::before {
    content: "";
    background-color: #373535;
    width: 100%;
    height: 4px;
    position: absolute;
    top: -20px;
    left: 0;
  }

  @media (min-width: 960px) {
    margin-bottom: 40px;

    &::before {
      width: 40%;
      top: -40px;
      height: 8px;
    }
  }

  @media (min-width: 1024px) {
    &::before {
      width: 50%;
    }
  }

  h1 {
    margin-top: 20px;
    padding-left: 40px;
    font-size: 2.25rem;
    line-height: 3rem;
    position: relative;
    color: #373535;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: #0e8162;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    @media (min-width: 960px) {
      font-size: 2.5rem;
      line-height: 3.25rem;
      margin-top: 40px;
      padding-left: 48px;

      &::before {
        width: 32px;
        height: 32px;
      }
    }
  }
`
