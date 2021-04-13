import React from "react"
import { Link } from "gatsby"
import { ReactComponent as Illust404 } from "@images/404_page_not_found.svg"

const NotFoundTemplate = () => {
  return (
    <section>
      <h1 className="leading-9 text-3xl font-semibold mx-auto mt-0 mb-12 sm:mb-14 max-w-3xl text-gray-700 sm:text-5xl sm:leading-12 sm:text-center">
        Awww... snap! You have found the edge of the universe
      </h1>
      <div className="border-b-4 border-gray-600">
        <Illust404
          title="404 Page Not Found"
          description="The 404 Page Not Found Illustration"
          className="w-full mx-auto h-full max-w-[240px] sm:max-w-[400px]"
        />
      </div>
      <p className="max-w-3xl mx-auto mt-12 font-normal text-2xl text-center text-gray-700 sm:mt-14 sm:text-3xl">
        The page you are looking for cannot be found
      </p>
      <p className="max-w-3xl mx-auto mt-12 text-gray-600 text-base leading-6 sm:text-center sm:mt-14">
        Do not worry as the detective will be sent to investigate further. While
        the investigation happens, why not check the other pages?
      </p>
      <hr className="my-6 sm:my-8" />
      <nav className="mb-12 sm:mb-14">
        <ul className="list-none pl-0 flex flex-col sm:flex-row">
          <li className="flex flex-1 items-center content-center mb-6 sm:justify-center sm:mb-0">
            <Link
              to="/"
              className="text-base text-gray-600 uppercase no-underline hover:text-primaryGreen sm:justify-center sm:text-xl"
            >
              Home
            </Link>
          </li>
          <li className="flex flex-1 items-center content-center mb-6 sm:justify-center sm:mb-0">
            <Link
              to="/about"
              className="text-base text-gray-600 uppercase no-underline hover:text-primaryGreen sm:justify-center sm:text-xl"
            >
              About
            </Link>
          </li>
          <li className="flex flex-1 items-center content-center mb-6 sm:justify-center sm:mb-0">
            <Link
              to="/showcase"
              className="text-base text-gray-600 uppercase no-underline hover:text-primaryGreen sm:justify-center sm:text-xl"
            >
              Showcase
            </Link>
          </li>
          <li className="flex flex-1 items-center content-center mb-6 sm:justify-center sm:mb-0">
            <Link
              to="/contact"
              className="text-base text-gray-600 uppercase no-underline hover:text-primaryGreen sm:justify-center sm:text-xl"
            >
              Contact
            </Link>
          </li>
          <li className="flex flex-1 items-center content-center sm:justify-center">
            <Link
              to="/note"
              className="text-base text-gray-600 uppercase no-underline hover:text-primaryGreen sm:justify-center sm:text-xl"
            >
              Note
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NotFoundTemplate
