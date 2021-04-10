import React from "react"
import { BsBook } from "@react-icons/all-files/bs/BsBook"
import { BsStar } from "@react-icons/all-files/bs/BsStar"
import { BsGrid } from "@react-icons/all-files/bs/BsGrid"
import Section from "../../Commons/Section"

const listValues = [
  {
    title: "Continuous learner",
    description:
      "I love learning something new. Technologies are developing and improving every day. In order to keep up the latest trend, I need to learn something new constantly. Not only technologies but life will change as we grow older. We need to adjust with the new people, culture, and habits",
    icon: BsBook,
  },
  {
    title: "Respect others",
    description:
      "I value people's time, and privacy. I think it is fine to give people more space for their time, and their privacy because I feel the same way when interacting with others",
    icon: BsStar,
  },
  {
    title: "Everyone is different",
    description:
      "People are different, the way they live, work, or learn are different. I cannot expect other people can do what I do with the same effort or vice versa. Think about others this way will improve my understanding with each other",
    icon: BsGrid,
  },
]

const CoreValues = () => (
  <Section>
    <div className="text-center">
      <h2 className="text-gray-700 font-bold text-3xl leading-8 mb-5 text-center relative inline-block mx-auto">
        Core Values
      </h2>
      <ul className="list-none pl-0 m-0 grid grid-cols-1 gap-5 lg:grid-cols-[repeat(auto-fit,minmax(320px,auto))] lg:justify-center">
        {listValues.map((value, index) => (
          <li key={`value-${index}`}>
            <div className="text-left w-full h-full p-5 bg-white text-gray-600 rounded shadow-md">
              <div className="grid grid-cols-[40px,1fr] gap-x-3 mb-4">
                <div className="flex items-center content-center justify-center w-10 h-10 rounded-full border border-primaryGreen text-primaryGreen text-xl">
                  <value.icon />
                </div>
                <div className="flex items-center content-center">
                  <h3 className="font-bold text-lg lg:text-xl text-gray-700">
                    {value.title}
                  </h3>
                </div>
              </div>
              <p>{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export default CoreValues
