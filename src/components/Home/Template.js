import React from "react"
import { LinkOutlined } from "@components/Commons/Button"

const HomeTemplate = () => {
  return (
    <section className="h-full flex justify-center flex-col">
      <div className="relative text-center">
        <h1 className="text-7xl font-bold mt-0 mb-6 leading-15 sm:text-9xl sm:mb-12 sm:leading-16 lg:text-10xl">
          Faiq Naufal
        </h1>
        <h2>
          <strong className="hidden md:inline-block font-semibold text-xl sm:text-2xl">
            Web Enthusiast
          </strong>
          <strong className="block md:inline-block font-semibold text-xl sm:text-2xl">
            &nbsp;| Front End Web Developer |&nbsp;
          </strong>
          <strong className="hidden md:inline-block font-semibold text-xl sm:text-2xl">
            UI Crafter
          </strong>
        </h2>

        <p
          style={{ letterSpacing: "0.25px" }}
          className="my-6 text-base font-normal italic leading-6"
        >
          - Passionate in crafting{" "}
          <strong className="text-primaryGreen font-semibold">
            innovational
          </strong>
          ,{" "}
          <strong className="text-primaryGreen font-semibold">
            functional
          </strong>
          ,{" "}
          <strong className="text-primaryGreen font-semibold">
            quality-focused
          </strong>{" "}
          modern web with latest cutting-edge technology -
        </p>
        <LinkOutlined to="/contact">
          <span>
            Let’s Talk!{" "}
            <span role="img" aria-label="hand waving">
              👋
            </span>{" "}
          </span>
        </LinkOutlined>
      </div>
    </section>
  )
}

export default HomeTemplate
