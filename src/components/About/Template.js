import React from "react"
import LazyLoad from "react-lazyload"
import Section, { SectionTopBreak } from "../../components/Commons/Section"
import Heading, { HeadingOne } from "../../components/Commons/Heading"
import TopIllust from "../../components/Commons/TopIllust"
import { ReactComponent as IllustAbout } from "../../images/note_taking.svg"
import { ReactComponent as Number02 } from "../../images/02.svg"
import { HiOutlineArrowRight } from "@react-icons/all-files/hi/HiOutlineArrowRight"
import Summary from "./Summary"
import CoreValues from "./CoreValues"
import Skills from "./Skills"
import Tools from "./Tools"

const AboutTemplate = () => {
  return (
    <>
      <Heading>
        <HeadingOne>About</HeadingOne>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustAbout}>
          <h1 className="font-bold text-gray-700 text-3xl leading-9 lg:text-4xl lg:leading-11">
            A place where{" "}
            <strong className="text-primaryGreen font-bold">
              the story begins
            </strong>
          </h1>
          <p className="text-gray-600 text-base lg:text-lg mt-5">
            Hello, I am{" "}
            <strong className="text-primaryGreen font-bold">Faiq Naufal</strong>
            . Software developer web platform based on Jakarta, Indonesia
            focused on front-end side, and fullstack capable
          </p>
          <a
            className="bg-none no-underline text-sm font-semibold text-center mt-5 mx-auto inline-flex items-center justify-center content-center rounded py-2 px-6 sm:min-w-[180px] border border-primaryGreen text-primaryGreen hover:bg-primaryGreen hover:text-white"
            href="/assets/Faiq_Naufal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See Resume"
          >
            <span className="mr-1">See Resume</span>{" "}
            <HiOutlineArrowRight size={16} />
          </a>
        </TopIllust>
      </Section>
      <SectionTopBreak TextNumber={() => <Number02 />} />
      <LazyLoad height={400} once>
        <Summary />
      </LazyLoad>
      <LazyLoad height={300} once>
        <CoreValues />
      </LazyLoad>
      <LazyLoad height={400} once>
        <Section>
          <div className="bg-gray-800 rounded text-white py-8 px-7 sm:p-10">
            <Skills />
            <hr className="my-20 border-t-2 border-white" />
            <Tools />
          </div>
        </Section>
      </LazyLoad>
    </>
  )
}

export default AboutTemplate
