import React from "react"

export default function Heading({ children, ...others }) {
  return (
    <div className="relative mb-5 lg:mb-10 " {...others}>
      <span className="absolute bg-gray-700 w-full h-1 -top-5 left-0 lg:w-2/5 lg:-top-10 lg:h-2 xl:w-1/2" />
      {children}
    </div>
  )
}

export const HeadingOne = ({ children, ...others }) => {
  return (
    <h1
      className="mt-5 pl-10 text-4xl leading-snug relative font-bold text-gray-700 lg:leading-normal lg:mt-10"
      {...others}
    >
      <span className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primaryGreen w-6 h-6 rounded-full lg:w-7 lg:h-7" />
      {children}
    </h1>
  )
}
