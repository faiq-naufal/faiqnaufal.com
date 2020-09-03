import React from "react"
import styled from "@emotion/styled"

export default function Footer({ children, ...others }) {
  return (
    <StyledFooter {...others}>
      <p>
        Made with{" "}
        <span role="img" aria-label="love">
          💕
        </span>{" "}
        by Faiq Naufal &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;

  p {
    width: 100%;
    font-size: 0.813rem;
    text-align: center;
    line-height: 1.125rem;

    @media (min-width: 960px) {
      text-align: right;
    }
  }
`
