import React from "react"
import { Link } from "gatsby"

interface CTALinkSolidProps {
  children: React.ReactNode
  to: string
}

const CTALinkSolid: React.FC<CTALinkSolidProps> = ({ children, to }) => {
  return (
    <Link
      className="h-10 lg:h-11 min-w-[180px] lg:min-w-[200px] bg-custom-black-1--light rounded-lg uppercase font-inter-700 text-center text-xs lg:text-sm tracking-wide-1 text-custom-white-2--light shadow-custom-shadow-black-btn--light outline-none hover:opacity-70 transition duration-200 no-underline inline-flex items-center justify-center"
      to={to}
    >
      {children}
    </Link>
  )
}

export default CTALinkSolid
