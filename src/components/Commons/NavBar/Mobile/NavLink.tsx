import React from "react"
import { Link } from "gatsby"

interface NavLinkProps {
  IconComponent: React.ElementType
  IconComponentActive: React.ElementType
  partiallyActive?: boolean
  text: string
  to: string
}

const baseClassName = `text-xs font-inter-600 no-underline flex flex-col items-center pt-2 text-custom-gray-1--light relative hover:text-custom-primary-green`

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
      <div className="block text-2xl">
        <IconComponentActive className="active-icon mb-1" />
        <IconComponent className="regular-icon mb-1" />
      </div>
      <p className="mb-2">{text}</p>
      <span className="active-line" />
    </Link>
  )
}

export default NavLink
