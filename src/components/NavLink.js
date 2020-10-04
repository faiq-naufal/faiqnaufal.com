import React from "react"
import { Link } from "gatsby"

const isActiveLink = ({ isCurrent }) => ({
  className: isCurrent ? "active" : "",
})
const isPartiallyActiveLink = ({ isPartiallyCurrent }) => ({
  className: isPartiallyCurrent ? "active" : "",
})

export default function NavLink({ partiallyActive, children, ...others }) {
  return (
    <Link
      getProps={partiallyActive ? isPartiallyActiveLink : isActiveLink}
      {...others}
    >
      {children}
    </Link>
  )
}
