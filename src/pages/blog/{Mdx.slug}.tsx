import React from "react"

const DetailBlogPage: React.FC = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}

export default DetailBlogPage

// import React from 'react'
// import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
// import Seo from '@components/Commons/Seo'
// import useSiteMetaData from '@components/Hooks/useSiteMetaData'
// import DetailNoteTemplate from '@components/Note/DetailNote/Template'

// const DetailNotePage = ({ data }) => {
//   const {
//     body,
//     slug,
//     timeToRead,
//     frontmatter: { author, date, title, tags, tldr }
//   } = data.mdx

//   const { siteUrl, logo } = useSiteMetaData()
//   const currentUrl = `${siteUrl}/note/${slug}`
//   const datePublished = date
//   const dateModified = date

//   const schemaMarkup = {
//     '@context': 'https://schema.org',
//     '@type': 'BlogPosting',
//     headline: title,
//     image: `${siteUrl}${logo}`,
//     genre: tags,
//     keywords: tags,
//     url: currentUrl,
//     description: tldr,
//     datePublished: datePublished,
//     dateModified: dateModified,
//     author: {
//       '@type': 'Person',
//       name: author,
//       url: siteUrl
//     },
//     creator: {
//       '@type': 'Person',
//       name: 'Faiq Naufal',
//       url: siteUrl
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Faiq Naufal',
//       url: siteUrl,
//       logo: {
//         '@type': 'ImageObject',
//         url: `${siteUrl}${logo}`,
//         width: '48',
//         height: '48'
//       }
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': currentUrl
//     }
//   }

//   return (
//     <>
//       <Helmet>
//         <link rel='canonical' href={currentUrl} />
//       </Helmet>
//       <Seo
//         title={`📝 ${title} - Faiq Naufal`}
//         description={tldr}
//         currentUrl={currentUrl}
//         schemaMarkup={schemaMarkup}
//       />
//       <DetailNoteTemplate
//         tags={tags}
//         title={title}
//         author={author}
//         dateModified={dateModified}
//         timeToRead={timeToRead}
//         tldr={tldr}
//         body={body}
//       />
//     </>
//   )
// }

// export default DetailNotePage

// export const query = graphql`
//   query NoteBySlug($slug: String!) {
//     mdx(slug: { eq: $slug }) {
//       body
//       slug
//       timeToRead
//       frontmatter {
//         author
//         date(formatString: "DD MMM yyyy")
//         title
//         tags
//         tldr
//       }
//     }
//   }
// `
