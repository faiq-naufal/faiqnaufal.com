import React from "react"
import { Link } from "gatsby"

export default function Button({ children }) {
  return <button>{children}</button>
}

export const LinkOutlined = ({ children, ...others }) => {
  return (
    <Link
      className="no-underline text-sm font-semibold mx-auto inline-flex items-center justify-center content-center rounded py-2.5 px-6 border border-primaryGreen text-primaryGreen min-w-[180px] hover:bg-primaryGreen hover:text-white sm:py-3"
      {...others}
    >
      {children}
    </Link>
  )
}
