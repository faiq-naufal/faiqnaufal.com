import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetaData from "@components/Hooks/useSiteMetaData"

interface SeoProps {
  title: string
  description?: string
  image?: string
  currentUrl?: string
  author?: string
  schemaMarkup?: object
  meta?: any
  children?: React.ReactNode
}

const Seo: React.FC<SeoProps> = ({
  title = "",
  description = "",
  image = "",
  currentUrl = "",
  author = "",
  schemaMarkup = {},
  meta = [],
  children = null,
}) => {
  const siteMetadata = useSiteMetaData()

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const metaUrl = currentUrl || siteMetadata.siteUrl
  const metaAuthor = author || siteMetadata.author
  const metaImage = image || siteMetadata.logoPng

  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.siteName,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:url`,
          content: metaUrl,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
      ].concat(meta)}
    >
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
      {children}
    </Helmet>
  )
}

export default Seo
