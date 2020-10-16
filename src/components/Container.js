import React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 900px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    max-width: 1280px;
  }
`

export default function CustomContainer({ children, ...others }) {
  return <StyledContainer {...others}>{children}</StyledContainer>
}
