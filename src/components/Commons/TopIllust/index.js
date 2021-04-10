import React from "react"

export default function TopIllust({ Illustration, children, ...others }) {
  return (
    <div
      className="max-w-[30rem] mx-auto lg:max-w-none lg:m-0 lg:grid grid-cols-[1fr,1.5fr] lg:gap-x-5 xl:grid-cols-2 gap-x-10 "
      {...others}
    >
      <div className="text-center">
        <Illustration className="w-full h-full mx-auto max-w-[15rem] max-h-[15rem] lg:max-w-[20rem] lg:max-h-[20rem]" />
      </div>
      <div>
        <div className="bg-white shadow-lg rounded py-8 px-7 mt-5 lg:mt-0 xl:p-10">
          {children}
        </div>
      </div>
    </div>
  )
}
