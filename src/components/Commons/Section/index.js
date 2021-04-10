import React from "react"

export default function Section({ children }) {
  return <section className="mb-20">{children}</section>
}

export const SectionTopBreak = ({ TextNumber }) => {
  return (
    <div className="flex justify-center text-center my-20 w-full relative h-24 lg:h-28">
      <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5  bg-gray-200 z-[-1]" />
      <TextNumber />
    </div>
  )
}
