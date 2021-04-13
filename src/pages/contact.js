import React from "react"
import Helmet from "react-helmet"
import Seo from "@components/Commons/Seo"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"
import ContactTemplate from "@components/Contact/Template"

const ContactPage = () => {
  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/contact`
  const title = `✉️ Contact - Faiq Naufal`
  const description = `If you would like to work together or just want to get in touch with me just say hello 👋. The best way to reach me is by filling the contact form.`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091712/assets_faiqnaufal/notifications.png`
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
      <ContactTemplate />
    </>
  )
}

export default ContactPage
