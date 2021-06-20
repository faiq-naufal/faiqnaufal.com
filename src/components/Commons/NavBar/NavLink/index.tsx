import React from "react"
import { Link } from "gatsby"
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight"

const baseClassName = `
  group text-xs font-medium no-underline inline-flex relative
  maxlg:flex maxlg:flex-col maxlg:h-full maxlg:items-center maxlg:content-center maxlg:justify-center text-regular-gray--light
  lg:text-sm lg:mb-5
  hover:text-regular-green--light
`

interface NavLinkProps {
  IconComponent: React.ElementType
  IconComponentActive: React.ElementType
  partiallyActive?: boolean
  text: string
  to: string
}

const NavLink: React.FC<NavLinkProps> = ({
  IconComponent,
  IconComponentActive,
  partiallyActive = false,
  text,
  to,
}) => {
  const isActiveLink = ({ isCurrent }: { isCurrent: boolean }) => ({
    className: isCurrent ? `${baseClassName} active-link` : baseClassName,
  })

  const isPartiallyActiveLink = ({
    isPartiallyCurrent,
  }: {
    isPartiallyCurrent: boolean
  }) => ({
    className: isPartiallyCurrent
      ? `${baseClassName} active-link`
      : baseClassName,
  })

  return (
    <Link
      to={to}
      getProps={partiallyActive ? isPartiallyActiveLink : isActiveLink}
    >
      <div className="block lg:hidden text-xl">
        <IconComponentActive className="active-icon" />
        <IconComponent className="regular-icon" />
      </div>
      <span className="maxlg:my-1">{text}</span>
      <span className="active-line" />
      <FiChevronRight className="active-arrow" />
    </Link>
  )
}

export default NavLink
