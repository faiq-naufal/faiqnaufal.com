import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "../../components/Section"

export default function DetailNote() {
  const data = useStaticQuery(graphql`
    query DetailNote {
      file(relativePath: { eq: "thumbnail/introducing-the-new-website.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <div></div>
}
