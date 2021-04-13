import React from "react"
import { Link } from "gatsby"
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { ReactComponent as Logo } from "@images/logo/faiq_naufal_logo_full.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Header = ({ children, ...others }) => {
  return (
    <header className="w-full flex items-center justify-end" {...others}>
      <div className="w-full py-5 flex ">
        <div className="flex-1">
          <Link className="flex lg:fixed lg:top-5" to="/" aria-label="Logo">
            <Logo
              title="Logo"
              description="Faiq Naufal Logo"
              className="h-10"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <OutboundLink
            className="group mr-4 flex items-center text-xl text-gray-600 text-opacity-70 no-underline hover:text-primaryGreen"
            href="https://github.com/faiq-naufal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <GoMarkGithub className="text-2xl lg:text-xl" />
            <span className="hidden font-semibold text-gray-600 text-opacity-80 group-hover:text-primaryGreen sm:flex sm:ml-2 sm:text-sm">
              Github
            </span>
          </OutboundLink>
          <OutboundLink
            className="group mr-4 flex items-center text-xl text-gray-600 text-opacity-70 no-underline hover:text-primaryGreen"
            href="https://www.linkedin.com/in/faiqnaufal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl lg:text-xl" />
            <span className="hidden font-semibold text-gray-600 text-opacity-80 group-hover:text-primaryGreen sm:flex  sm:ml-2 sm:text-sm">
              LinkedIn
            </span>
          </OutboundLink>
        </div>
      </div>
    </header>
  )
}

export default Header
