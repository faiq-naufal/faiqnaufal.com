import React from "react"
import Helmet from "react-helmet"
import Seo from "../components/Commons/Seo"
import useSiteMetaData from "../components/Hooks/useSiteMetaData"
import FaiqNaufalLogo from "../images/logo/faiq_naufal_logo.svg"
import TealChatLogo from "../images/logo/tealchat.svg"
import PokeCatchLogo from "../images/logo/pokecatch.svg"
import MovieQLogo from "../images/logo/movieq.png"
import ShowcaseTemplate from "../components/Showcase/Template"

const projectsData = [
  {
    name: "Faiq Naufal's Website",
    description: "My own personal website and the one you see right now",
    logo: FaiqNaufalLogo,
    githubLink: "https://github.com/faiq-naufal/faiqnaufal.com",
    websiteLink: "https://faiqnaufal.com",
    detailLink: "",
  },
  {
    name: "TealChat",
    description:
      "TealChat is an open-source and free simple chat room web application.",
    logo: TealChatLogo,
    githubLink: "https://github.com/faiq-naufal/tealchat",
    websiteLink: "https://tealchat.faiqnaufal.com",
    detailLink: "",
  },
  {
    name: "PokeCatch",
    description:
      "PokeCatch is catch and release pokemon game built with Next.js, Poke API, and GraphQL",
    logo: PokeCatchLogo,
    githubLink: "https://github.com/faiq-naufal/pokecatch",
    websiteLink: "https://pokecatch.faiqnaufal.com",
    detailLink: "",
  },
  {
    name: "MovieQ",
    description:
      "Website for searching and get movie information based on OMDb.",
    logo: MovieQLogo,
    githubLink: "https://github.com/faiq-naufal/MovieQ",
    websiteLink: "https://movieq.faiqnaufal.com",
    detailLink: "",
  },
]

const ShowcasePage = () => {
  const { siteUrl } = useSiteMetaData()
  const currentUrl = `${siteUrl}/showcase`
  const title = `🎨 Showcase - Faiq Naufal`
  const description = `A collection of portfolio showcase by Faiq Naufal. He likes to showcase his work to people around the world to see`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091725/assets_faiqnaufal/landing_page.png`
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "🎨 Showcase by Faiq Naufal",
    description: "A collection of portfolio showcase by Faiq Naufal",
    url: `${siteUrl}/showcase`,
    author: {
      "@type": "Person",
      name: "Faiq Naufal",
      url: siteUrl,
    },
    creator: {
      "@type": "Person",
      name: "Faiq Naufal",
      url: siteUrl,
    },
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
      <ShowcaseTemplate projectsData={projectsData} />
    </>
  )
}

export default ShowcasePage
