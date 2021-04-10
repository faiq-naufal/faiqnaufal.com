import React from "react"
import { Link } from "gatsby"

const NavLinkWrapper = ({
  partiallyActive,
  className,
  children,
  ...others
}) => {
  const isActiveLink = ({ isCurrent }) => ({
    className: isCurrent ? `${className} active-link` : className,
  })
  const isPartiallyActiveLink = ({ isPartiallyCurrent }) => ({
    className: isPartiallyCurrent ? `${className} active-link` : className,
  })

  return (
    <Link
      getProps={partiallyActive ? isPartiallyActiveLink : isActiveLink}
      {...others}
    >
      {children}
    </Link>
  )
}

export default function NavLink({ children, ...others }) {
  return (
    <NavLinkWrapper
      className={`
      group text-xxs font-semibold no-underline relative text-gray-600 text-opacity-80 

      maxlg:flex maxlg:flex-1 maxlg:flex-col maxlg:h-full maxlg:items-center maxlg:justify-center maxlg:content-center 
      
      lg:text-sm lg:w-full lg:flex lg:items-center lg:mb-6 
      hover:text-primaryGreen hover:text-opacity-100
      `}
      {...others}
    >
      {children}
    </NavLinkWrapper>
  )
}
