import React from "react"
import Section from "@components/Commons/Section"

const Summary = () => (
  <Section>
    <div className="bg-white relative mt-32 py-8 px-7 rounded shadow-md sm:ml-12 sm:p-10">
      <div className="absolute -top-12 -left-12 bg-primaryGreen w-full h-full z-[-1] rounded"></div>
      <h2 className="text-gray-700 font-bold text-3xl leading-8 mb-5">
        Let’s know myself better
      </h2>
      <p className="text-gray-600 leading-6 tracking-[0.2px] mb-5">
        I am a fresh graduate from Binus University with a bachelor’s degree in
        Information System. I am from Jakarta, Indonesia. I have passion with
        technology especially web development area. My coding passion started in
        2017. Since then, I have been improving and polishing my coding skill. I
        am currently focusing on the front-end development side. My focus on the
        front-end is intended to create a bridge that can help and integrate the
        flow of communication between UI/UX designers and back-end developers.
        My interests in front-end include website optimization areas such as
        SEO, accessibility, and performance. Continuous learning and into modern
        web stack and technologies are what got me until this point
      </p>
      <p className="text-gray-600 leading-6 tracking-[0.2px]">
        In my spare time, I usually enjoy reading articles about people’s
        opinions and experience with the technology they use, learn about newest
        trends or stack, or do self-learning with building portfolio projects.
        Besides that, I have hobbies that I usually do such as listening to
        music, watching series, and playing games. An instrumental geek who
        really likes instrumental and orchestra music too much
      </p>
    </div>
  </Section>
)

export default Summary
