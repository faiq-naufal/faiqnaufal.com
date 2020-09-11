import React from "react"
import Container from "@material-ui/core/Container"
import { styled } from "linaria/react"

const StyledContainer = styled(Container)`
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
  }
`

export default function CustomContainer({ children, ...others }) {
  return <StyledContainer {...others}>{children}</StyledContainer>
}
