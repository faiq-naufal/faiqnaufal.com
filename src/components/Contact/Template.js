import React from "react"
import LazyLoad from "react-lazyload"
import Section, { SectionTopBreak } from "@components/Commons/Section"
import Heading, { HeadingOne } from "@components/Commons/Heading"
import TopIllust from "@components/Commons/TopIllust"
import { ReactComponent as IllustContact } from "@images/notifications.svg"
import { ReactComponent as Number04 } from "@images/04.svg"
import Form from "./Form"
import SocialMedia from "./SocialMedia"

const ContactTemplate = () => (
  <>
    <Heading>
      <HeadingOne>Contact</HeadingOne>
    </Heading>
    <Section>
      <TopIllust Illustration={IllustContact}>
        <h1 className="font-bold text-gray-700 text-3xl leading-9 lg:text-4xl lg:leading-11">
          Don’t just stay there.{" "}
          <strong className="text-primaryGreen font-bold">
            Let’s exchange words!
          </strong>
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mt-4">
          Tell me something amazing or you can just hit me up! I would love to
          see your stories and thought. The best way to get in touch with me is
          to fill out the form below.
        </p>
      </TopIllust>
    </Section>
    <SectionTopBreak TextNumber={() => <Number04 />} />
    <LazyLoad height={400} once>
      <Form />
    </LazyLoad>
    <LazyLoad height={400} once>
      <SocialMedia />
    </LazyLoad>
  </>
)

export default ContactTemplate
