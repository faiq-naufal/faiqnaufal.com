import React from "react"
import { Link } from "gatsby"

interface CTALinkOutlineProps {
  children: React.ReactNode
  to: string
}

const CTALinkOutline: React.FC<CTALinkOutlineProps> = ({ children, to }) => {
  return (
    <Link
      className="h-10 lg:h-11 min-w-[180px] lg:min-w-[200px] rounded-lg uppercase font-inter-700 text-center text-xs lg:text-sm tracking-wide-1 shadow-custom-shadow-black-btn--light outline-none hover:opacity-70 transition duration-200 no-underline inline-flex items-center justify-center border border-custom-black-1--light text-custom-black-1--light"
      to={to}
    >
      {children}
    </Link>
  )
}

export default CTALinkOutline
