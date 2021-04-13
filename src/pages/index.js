import React from "react"
import Helmet from "react-helmet"
import Seo from "@components/Commons/Seo"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"
import HomeTemplate from "@components/Home/Template"

const HomePage = () => {
  const { siteUrl, logo } = useSiteMetaData()
  const title = `👋 Hi, I'm Faiq Naufal. You have found my personal website!`
  const description = `This is my personal website. A website fully dedicated to tell my personal info, showcase my work, and store my thought as a web developer from Indonesia.`
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
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Seo
        title={title}
        description={description}
        currentUrl={siteUrl}
        schemaMarkup={schemaMarkup}
      />
      <HomeTemplate />
    </>
  )
}

export default HomePage
