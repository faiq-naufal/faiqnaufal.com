import React from "react"
import styled from "@emotion/styled"
import Emoji from "a11y-react-emoji"

export default function Footer({ children, ...others }) {
  return (
    <StyledFooter {...others}>
      <p>
        Lovingly crafted <Emoji symbol="💕" label="love" /> by Faiq Naufal
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  padding-bottom: 24px;

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
