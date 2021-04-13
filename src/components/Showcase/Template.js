import React from "react"
import LazyLoad from "react-lazyload"
import Section, { SectionTopBreak } from "@components/Commons/Section"
import Heading, { HeadingOne } from "@components/Commons/Heading"
import TopIllust from "@components/Commons/TopIllust"
import { ReactComponent as IllustShowcase } from "@images/landing_page.svg"
import { ReactComponent as Number03 } from "@images/03.svg"
import ShowcaseList from "./ShowcaseList"

const ShowcaseTemplate = ({ projectsData }) => (
  <>
    <Heading>
      <HeadingOne>Showcase</HeadingOne>
    </Heading>
    <Section>
      <TopIllust Illustration={IllustShowcase}>
        <h1 className="font-bold text-gray-700 text-3xl leading-9 lg:text-4xl lg:leading-11">
          Collection of{" "}
          <strong className="text-primaryGreen font-bold">
            portfolio showcase
          </strong>{" "}
          from my work
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mt-4">
          Because making things and sharing the process are fun. I showcase my
          work for people around the world to see
        </p>
      </TopIllust>
    </Section>
    <SectionTopBreak TextNumber={() => <Number03 />} />
    <LazyLoad height={400} once>
      <ShowcaseList projectsData={projectsData} />
    </LazyLoad>
  </>
)

export default ShowcaseTemplate
