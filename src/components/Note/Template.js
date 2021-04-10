import React from "react"
import LazyLoad from "react-lazyload"
import Section, { SectionTopBreak } from "../../components/Commons/Section"
import Heading, { HeadingOne } from "../../components/Commons/Heading"
import TopIllust from "../../components/Commons/TopIllust"
import { ReactComponent as IllustDreaming } from "../../images/dream.svg"
import { ReactComponent as Number05 } from "../../images/05.svg"
import NoteList from "./NoteList"

const NoteTemplate = ({ notes }) => (
  <>
    <Heading>
      <HeadingOne>Note</HeadingOne>
    </Heading>
    <Section>
      <TopIllust Illustration={IllustDreaming}>
        <h1 className="font-bold text-gray-700 text-3xl leading-9 lg:text-4xl lg:leading-11">
          Collection of{" "}
          <strong className="text-primaryGreen font-bold">
            exposed thoughts
          </strong>{" "}
          and
          <strong className="text-primaryGreen font-bold"> passions</strong> of
          a dreamer
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mt-4">
          I write the thing I find interesting just like others do. But not in
          the way others do. Most of the times, it comes from my perspective and
          my opinion
        </p>
      </TopIllust>
    </Section>
    <SectionTopBreak TextNumber={() => <Number05 />} />
    <LazyLoad height={400} once>
      <NoteList notes={notes} />
    </LazyLoad>
  </>
)

export default NoteTemplate
