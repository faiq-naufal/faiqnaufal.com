import React from "react"
import { css } from "@linaria/core"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Section from "../../Commons/Section"

const SocialMedia = () => (
  <Section>
    <div className="rounded overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-lg">
      <div className="bg-gray-900 text-white py-8 px-7 lg:p-10 min-h-[240px] flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 ">
          Or you can reach me at social media
        </h2>
        <p className="leading-6 tracking-[0.2px]">
          That way we can be connected and have an opportunity to communicate
          our thought better
        </p>
      </div>
      <div className="bg-white py-8 px-7 lg:p-10">
        <ul className="list-none m-0 pl-0">
          <li className="border-b border-gray-700 mt-0">
            <strong className="inline-flex font-semibold mb-5 py-1 px-2 bg-gray-900 text-white rounded relative">
              Email
              <span
                aria-hidden
                className="absolute top-1/2 -right-7 w-3 h-0 border border-gray-700 "
              >
                -
              </span>
            </strong>
            <br />
            <button
              className={`${encryptEmail} bg-none cursor-pointer inline-flex text-gray-600 mb-5 p-0 hover:text-primaryGreen`}
              aria-label="Email"
              data-name="me"
              data-domain="faiqnaufal"
              data-tld="com"
              onClick={event => {
                const target = event.currentTarget
                window.location.href = `mailto:${target.getAttribute(
                  `data-name`
                )}@${target.getAttribute(`data-domain`)}.${target.getAttribute(
                  `data-tld`
                )}`
                return false
              }}
            />
          </li>
          <li className="border-b border-gray-700">
            <strong className="inline-flex font-semibold mb-5 py-1 px-2 bg-gray-900 text-white rounded relative mt-10">
              LinkedIn
              <span
                aria-hidden
                className="absolute top-1/2 -right-7 w-3 h-0 border border-gray-700 "
              >
                -
              </span>
            </strong>
            <br />
            <OutboundLink
              href="https://www.linkedin.com/in/faiqnaufal"
              className="no-underline inline-flex text-gray-600 mb-5 p-0 hover:text-primaryGreen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              linkedin.com/in/faiqnaufal/
            </OutboundLink>
          </li>
          <li className="border-b border-gray-700">
            <strong className="inline-flex font-semibold mb-5 py-1 px-2 bg-gray-900 text-white rounded relative mt-10">
              Github
              <span
                aria-hidden
                className="absolute top-1/2 -right-7 w-3 h-0 border border-gray-700 "
              >
                -
              </span>
            </strong>
            <br />
            <OutboundLink
              href="https://github.com/faiq-naufal"
              className="no-underline inline-flex text-gray-600 mb-5 p-0 hover:text-primaryGreen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              github.com/faiq-naufal
            </OutboundLink>
          </li>
        </ul>
      </div>
    </div>
  </Section>
)

export default SocialMedia

const encryptEmail = css`
  &::after {
    color: #4a5568;
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }

  &:hover&::after {
    color: #0e8162;
  }
`
