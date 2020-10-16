import React from "react"
import styled from "@emotion/styled"

const Section = styled.section`
  margin-bottom: 80px;
`
export default Section

export const SectionTopBreak = ({ TextNumber }) => {
  return <StyledSectionTopBreak>{TextNumber}</StyledSectionTopBreak>
}

export const StyledSectionTopBreak = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 80px 0;
  width: 100%;
  position: relative;
  height: 95px;
  @media (min-width: 960px) {
    height: 120px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background-color: #e7e7e9;
    z-index: 2;
  }

  svg {
    height: 95px;
    @media (min-width: 960px) {
      height: 120px;
    }
  }
`
