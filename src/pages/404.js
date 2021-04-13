import React from "react"
import Seo from "@components/Commons/Seo"
import NotFoundTemplate from "@components/404/Template"

const NotFoundPage = () => {
  const title = `⛔ 404 Error Page Not Found - Faiq Naufal`
  const description = `Sorry, the page you are looking for cannot be found`

  return (
    <>
      <Seo title={title} description={description} />
      <NotFoundTemplate />
    </>
  )
}

export default NotFoundPage
