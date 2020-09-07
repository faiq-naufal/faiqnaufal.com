import React from "react"
import styled from "@emotion/styled"

export default function contact() {
  return (
    <SectionTop>
      <h1 className="Merriweather">Contact Me</h1>
      <div></div>
    </SectionTop>
  )
}

const SectionTop = styled.section`
  padding-left: 60px;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #000;
    position: relative;
    padding-left: 60px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -60px;
      transform: translateY(-50%);
      width: 60px;
      height: 12px;
      background-color: #000;
    }
  }
`
