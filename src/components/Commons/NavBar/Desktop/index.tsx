import React from "react"
import { Link } from "gatsby"

const NavbarDesktop: React.FC = () => {
  return (
    <ul className="navbar-desktop list-none ml-15 flex-1">
      <li className="mr-10 flex items-center">
        <Link to="/about">About</Link>
      </li>
      <li className="mr-10 flex items-center">
        <Link to="/showcase">Showcase</Link>
      </li>
      <li className="mr-10 flex items-center">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="mr-10 flex items-center">
        <a
          className="no-underline text-sm text-center font-inter-500 inline-flex items-center justify-center content-center rounded py-2 px-5 border border-custom-primary-green text-custom-primary-green "
          href="/assets/Faiq_Naufal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume"
        >
          View Resume
        </a>
      </li>
    </ul>
  )
}

export default NavbarDesktop
