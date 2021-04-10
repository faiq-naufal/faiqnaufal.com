import React from "react"
import Helmet from "react-helmet"
import Seo from "../components/Commons/Seo"
import useSiteMetaData from "../components/Hooks/useSiteMetaData"
import AboutTemplate from "../components/About/Template"

const AboutPage = () => {
  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/about`
  const title = `😄 About - Faiq Naufal`
  const description = `See the information of Faiq Naufal here. A web developer and web enthusiast who likes and passionate with modern web technologies 🔥.`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601090819/assets_faiqnaufal/note_taking.png`
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faiq Naufal",
    givenName: "Faiq",
    gender: "Male",
    image: `${siteUrl}${logo}`,
    url: siteUrl,
    jobTitle: "Web Developer",
    nationality: "Indonesia",
    description: "Web and Technology Enthusiast",
    sameAs: [
      "https://www.linkedin.com/in/faiqnaufal",
      "https://github.com/faiq-naufal",
    ],
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <Seo
        title={title}
        description={description}
        image={thumbnail}
        currentUrl={currentUrl}
        schemaMarkup={schemaMarkup}
      />
      <AboutTemplate />
    </>
  )
}

export default AboutPage
