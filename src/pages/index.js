import React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/core"
import { css } from "@emotion/core"

const IndexPage = () => (
  <Layout>
    <h1
      className="Merriweather"
      css={css`
        font-size: 4.5rem;
        text-transform: uppercase;
      `}
    >
      Faiq Naufal
    </h1>
    <strong>Web Enthusiast | Front End Web Developer | UI Crafter</strong>
    <p>
      Interested in crafting modern web with latest cutting-edge technology.
    </p>

    <button>Download Resume</button>
  </Layout>
)

export default IndexPage
