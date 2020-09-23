import React from "react"
import styled from "@emotion/styled"
import Section, { SectionTopBreak } from "../../components/Section"
import Heading from "../../components/Heading"
import TopIllust from "../../components/TopIllust"
import { ReactComponent as IllustShowcase } from "../../images/landing_page.svg"

export default function Showcase() {
  return (
    <>
      <Heading>
        <h1>Showcase</h1>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustShowcase}>
          <h1>
            Collection of <strong>portfolio showcase</strong> from my work
          </h1>
          <p>
            Because making things and sharing the process are fun. I showcase my
            work for people around the world to see
          </p>
          {/* Learning showcase */}
        </TopIllust>
      </Section>
      <SectionTopBreak number="03" />
    </>
  )
}
