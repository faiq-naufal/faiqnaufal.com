import React from "react"
import { css } from "@linaria/core"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { HiOutlineArrowLeft } from "@react-icons/all-files/hi/HiOutlineArrowLeft"
import { BsPerson } from "@react-icons/all-files/bs/BsPerson"
import { AiOutlineFieldTime } from "@react-icons/all-files/ai/AiOutlineFieldTime"
import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar"
import Section from "@components/Commons/Section"

const DetailNoteTemplate = props => {
  const {
    heroImage,
    tag,
    title,
    author,
    dateModified,
    timeToRead,
    overview,
    body,
  } = props

  return (
    <Section>
      <div className="max-w-xl my-0 mx-auto">
        <Link
          to="/note"
          className="inline-flex items-center no-underline text-gray-500 font-semibold mb-4 sm:mb-10 hover:no-underline hover:text-gray-700"
        >
          <HiOutlineArrowLeft size={24} />{" "}
          <span className="ml-1 flex items-center">Go to note</span>
        </Link>
        <ul className="flex flex-row flex-wrap">
          <li className="bg-primaryGreen text-white py-1.5 px-5 rounded-3xl text-xs font-semibold uppercase">
            {tag}
          </li>
        </ul>
        <h1 className="text-gray-700 font-bold text-3xl my-6 sm:my-10 sm:text-5xl">
          {title}
        </h1>
        <div className="flex flex-row flex-wrap text-gray-600 text-sm sm:text-base font-semibold">
          <p className="flex items-center mr-5 mb-5">
            <BsPerson size={24} color="#0e8162" />
            <span className="ml-2">{author}</span>
          </p>
          <p className="flex items-center mr-5 mb-5">
            <AiOutlineCalendar size={24} color="#0e8162" />
            <span className="ml-2">{dateModified}</span>
          </p>
          <p className="flex items-center mr-5 mb-5">
            <AiOutlineFieldTime size={24} color="#0e8162" />
            <span className="ml-2">~ {timeToRead} min to read</span>
          </p>
        </div>
        <p className="pt-5 text-base sm:text-xl text-gray-600 border-t border-gray-200">
          {overview}
        </p>
      </div>
      <div className="my-10 mx-auto rounded-md overflow-hidden max-w-3xl">
        <GatsbyImage image={heroImage} alt={title} />
      </div>
      <div className={blogContentStyles}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Section>
  )
}

export default DetailNoteTemplate

const blogContentStyles = css`
  background-color: #fff;
  border-radius: 4px;
  color: #4a5568;
  box-shadow: 0px 27px 48px rgba(55, 53, 53, 0.04),
    0px 11.28px 20.0533px rgba(55, 53, 53, 0.0287542),
    0px 6.0308px 10.7214px rgba(55, 53, 53, 0.0238443),
    0px 3.38082px 6.01034px rgba(55, 53, 53, 0.02),
    0px 1.79553px 3.19205px rgba(55, 53, 53, 0.0161557),
    0px 0.747159px 1.32828px rgba(55, 53, 53, 0.0112458);
  padding: 2.5rem 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0.2px;

  @media (min-width: 600px) {
    padding: 2.5rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #373535;

    @media (min-width: 600px) {
      font-size: 2rem;
    }

    &:not(:first-of-type) {
      margin-top: 2.5rem;
    }
  }

  strong {
    color: #373535;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;

    p {
      margin-bottom: 1.25rem;
    }

    li {
      position: relative;

      &:before {
        content: "";
        width: 4px;
        height: 4px;
        background-color: #373535;
        position: absolute;
        top: 12px;
        left: -12px;

        @media (min-width: 600px) {
          top: 12px;
          left: -14px;
        }
      }
    }
  }

  p {
    &:not(:last-of-type) {
      margin-bottom: 1.25rem;
    }
  }
`
