import React from "react"
import Seo from "@components/Commons/Seo"
import NotFoundTemplate from "@components/404/Template"

const NotFoundPage: React.FC = () => {
  const title = `⛔ Page Not Found - Faiq Naufal`
  const description = `Sorry, there’s nothing that you can find on this url`

  return (
    <>
      <Seo title={title} description={description} />
      <NotFoundTemplate />
    </>
  )
}

export default NotFoundPage
