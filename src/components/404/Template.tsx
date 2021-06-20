import React from "react"
import CTALinkOutline from "@components/Commons/Button/CTALinkOutline"
import CTALinkSolid from "@components/Commons/Button/CTALinkSolid"
import Container from "@components/Commons/Container"

const NotFoundTemplate: React.FC = () => (
  <section className="my-20 flex-1 flex items-center justify-center text-center">
    <Container>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl sm:leading-snug lg:leading-snug tracking-wide-1 font-fraunces-700">
        Not Found
      </h1>
      <p className="mt-5 text-base sm:text-lg lg:text-xl tracking-wide-1 text-custom-gray-1--light">
        Sorry, there’s nothing that you can find on this url
      </p>
      <div className="mt-10 sm:flex sm:flex-row sm:items-center sm:justify-center">
        <div className="sm:order-3">
          <CTALinkSolid to="/blog">Browse blog</CTALinkSolid>
        </div>
        <div className="sm:order-2 my-3 sm:my-0 sm:mx-5 text-custom-black-1--light text-xs lg:text-sm uppercase font-inter-700">
          Or
        </div>
        <div className="sm:order-1">
          <CTALinkOutline to="/">Back to home</CTALinkOutline>
        </div>
      </div>
    </Container>
  </section>
)

export default NotFoundTemplate
