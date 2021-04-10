import React from "react"

export default function Container({ children, ...others }) {
  return (
    <div
      className="flex-1 flex flex-col justify-center items-center w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 xl:max-w-7xl"
      {...others}
    >
      {children}
    </div>
  )
}
