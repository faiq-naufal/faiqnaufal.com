import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from "../components/Seo"
import Image from "gatsby-image"

const NotFoundPage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      file(name: { eq: "assets-faiqnaufal.com/illust_404_page" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  console.log(queryData)

  return (
    <>
      <SEO title="404: Not found" />
      <h1>Awww... snap! You have found the limit of this website</h1>
      {/* <Image src={queryData.} /> */}
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage
