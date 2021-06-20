import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Container from "@components/Commons/Container"
import { CTAEmailText } from "@components/Commons/Button/CTAEmail"

const Footer: React.FC = () => (
  <footer className="bg-custom-black-2--light w-full text-sm lg:text-base text-custom-white-2--light py-5">
    <Container>
      <div className="sm:flex">
        <ul className="list-none flex flex-1 justify-center mb-5 sm:mb-0 sm:justify-end sm:order-2">
          <li className="flex items-center">
            <CTAEmailText>Email</CTAEmailText>
            <div className="h-6 mx-5 border border-custom-gray-4--light w-0" />
          </li>
          <li className="flex items-center">
            <OutboundLink
              className="hover:underline"
              href="https://github.com/faiq-naufal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              Github
            </OutboundLink>
            <div className="h-6 mx-5 border border-custom-gray-4--light w-0" />
          </li>
          <li className="flex items-center">
            <OutboundLink
              className="hover:underline"
              href="https://www.linkedin.com/in/faiqnaufal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              Linkedin
            </OutboundLink>
          </li>
        </ul>
        <p className="text-center sm:text-left sm:order-1">
          &copy; Faiq Naufal {new Date().getFullYear()} ·{" "}
          <a
            className="hover:underline"
            href="https://github.com/faiq-naufal/faiqnaufal.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source Code"
          >
            Source Code
          </a>
        </p>
      </div>
    </Container>
  </footer>
)

export default Footer
