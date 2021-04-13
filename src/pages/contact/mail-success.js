import React from "react"
import { Redirect } from "@reach/router"
import Helmet from "react-helmet"
import Seo from "@components/Commons/Seo"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"
import MailSuccessTemplate from "@components/Contact/MailSuccess/Template"

const MailSuccessPage = ({ location }) => {
  const { showPage } = location.state || false
  const { siteUrl } = useSiteMetaData()

  if (!showPage) return <Redirect noThrow to="/contact" />

  const currentUrl = `${siteUrl}/contact/mail-success`
  const title = `✉️ Successfully Sending a Message - Faiq Naufal`
  const description = `Thank you so much for sending me a message. Your message has been successfully sent to me`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091725/assets_faiqnaufal/achievement.png`

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
      >
        <meta name="robots" content="noindex" />
      </Seo>
      <MailSuccessTemplate />
    </>
  )
}

export default MailSuccessPage
