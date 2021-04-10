import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsPerson } from "@react-icons/all-files/bs/BsPerson"
import { AiOutlineFieldTime } from "@react-icons/all-files/ai/AiOutlineFieldTime"
import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar"
import Section from "../../Commons/Section"

const NoteList = ({ notes }) => (
  <Section>
    <div>
      <h2 className="font-bold text-gray-700 mb-6 text-3xl md:text-4xl ">
        Explore
      </h2>
      {notes.map(({ node }) => {
        const {
          id,
          slug,
          timeToRead,
          frontmatter: { author, date, title, tag, overview, featureImage },
        } = node
        const image = getImage(featureImage)

        return (
          <Link key={id} to={`/note/${slug}`} className="group no-underline">
            <div className="max-w-[30rem] mx-auto grid grid-cols-1 grid-rows-[1fr,minmax(1fr,auto)] bg-white rounded overflow-hidden shadow-lg md:max-w-none md:grid-cols-2 grid-cols-[auto]">
              <div className="col-grid">
                <GatsbyImage className="h-full" image={image} alt={title} />
              </div>
              <div className="col-grid">
                <div className="p-5 md:py-10 md:px-5 lg:p-10">
                  <ul className="flex flex-row flex-wrap">
                    <li className="bg-primaryGreen py-2 px-5 text-white rounded-3xl text-xs font-semibold uppercase">
                      {tag}
                    </li>
                  </ul>
                  <h3 className="group-hover:underline font-semibold text-gray-700 text-2xl leading-7 mt-5 mb-3 md:mb-2 md:leading-10 md:text-3xl">
                    {title}
                  </h3>
                  <p className="flex items-center text-gray-500 font-light text-sm">
                    <AiOutlineFieldTime
                      className="mr-1"
                      size={20}
                      color="#0e8162"
                    />
                    <span>~ {timeToRead} min to read</span>
                  </p>
                  <p className="flex items-center mt-3 md:mt-2 text-gray-600 text-base">
                    {overview}
                  </p>
                  <div className="mt-5 pt-5 border-t border-gray-200 grid grid-cols-2 text-gray-600 gap-x-2 text-sm">
                    <p className="flex items-center">
                      <BsPerson size={20} color="#0e8162" />
                      <span className="ml-2">{author}</span>
                    </p>
                    <p className="flex items-center justify-end">
                      <AiOutlineCalendar size={20} color="#0e8162" />
                      <span className="ml-2">{date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  </Section>
)

export default NoteList
