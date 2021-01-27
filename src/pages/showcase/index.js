import React from "react"
import styled from "@emotion/styled"
import Section, { SectionTopBreak } from "../../components/Section"
import Heading from "../../components/Heading"
import TopIllust from "../../components/TopIllust"
import { ReactComponent as IllustShowcase } from "../../images/landing_page.svg"
import { ReactComponent as Number03 } from "../../images/03.svg"
import FaiqNaufalLogo from "../../images/logo/faiq_naufal_logo.svg"
import TealChatLogo from "../../images/logo/tealchat.svg"
import PokeCatchLogo from "../../images/logo/pokecatch.svg"
import MovieQLogo from "../../images/logo/movieq.png"
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub"
import { IoIosGlobe } from "@react-icons/all-files/io/IoIosGlobe"
import Helmet from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Seo from "../../components/Seo"
import useSiteMetaData from "../../components/useSiteMetaData"

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

export default function Showcase() {
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
      <Heading>
        <h1>Showcase</h1>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustShowcase}>
          <h1>
            Collection of <strong>portfolio showcase</strong> from my work
          </h1>
          <p>
            Because making things and sharing the process are fun. I showcase my
            work for people around the world to see
          </p>
          {/* Learning showcase */}
        </TopIllust>
      </Section>
      <SectionTopBreak TextNumber={<Number03 />} />
      <Section>
        <Projects>
          <h2 className="heading">My Projects</h2>
          <ul className="list-grid">
            {projectsData.map(project => (
              <li className="col-grid">
                <div className="wrapper-card">
                  <div className="head">
                    <div className="logo">
                      <OutboundLink
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} Website`}
                        title="Go to website url"
                      >
                        <img src={project.logo} alt={project.name} />
                      </OutboundLink>
                    </div>
                  </div>
                  <div className="body">
                    <h3>
                      <OutboundLink
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} Website`}
                        title="Go to website url"
                      >
                        {project.name}
                      </OutboundLink>
                    </h3>
                    <p className="short-description">{project.description}</p>
                  </div>
                  <div className="footer">
                    <div className="external-links">
                      <div>
                        <OutboundLink
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} Github`}
                          title="Go to github url"
                        >
                          <GoMarkGithub />
                        </OutboundLink>
                      </div>
                      <div>
                        <OutboundLink
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} Website`}
                          title="Go to website url"
                        >
                          <IoIosGlobe />
                        </OutboundLink>
                      </div>
                    </div>
                    {/* <div className="detail">
                      <Link to="/">Detail</Link>
                    </div> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Projects>
      </Section>
    </>
  )
}

const Projects = styled.div`
  text-align: center;
  h2 {
    color: #373535;
    font-size: 2rem;
    margin-bottom: 24px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 960px) {
      font-size: 2.25rem;
    }
  }

  .list-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px 28px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      justify-content: center;
    }
  }

  .wrapper-card {
    text-align: left;
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 20px rgba(55, 53, 53, 0.04),
      0px 2px 6px rgba(55, 53, 53, 0.04), 0px 0px 1px rgba(55, 53, 53, 0.04);
    padding: 1.25rem;
    border-radius: 4px;
    background: #fff;

    .head {
      margin-bottom: 10px;

      .logo {
        margin-right: 8px;
        width: 48px;
        height: 48px;
        padding: 8px;
        box-shadow: 0px 10px 20px rgba(55, 53, 53, 0.04),
          0px 2px 6px rgba(55, 53, 53, 0.04), 0px 0px 1px rgba(55, 53, 53, 0.04);
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .body {
      margin-bottom: 1.5rem;

      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
        a {
          color: #373535;
          text-decoration: none;
        }
      }

      p {
        font-size: 0.875rem;
        color: #4a5568;
      }
    }

    .footer {
      display: flex;

      .external-links {
        display: flex;
        justify-content: flex-end;

        a {
          display: flex;
          margin-right: 8px;
          font-size: 1.375rem;
          color: #373535;
        }
      }

      .detail {
        font-weight: 600;
        flex: 1;
        text-align: right;
        a {
          color: #7b8390;
          text-decoration: none;
          &:hover {
            color: #0e8162;
            text-decoration: underline;
          }
        }
      }
    }
  }
  /* max-width: 600px;
  margin: 0 auto;
  text-align: center;
  
  
  
  
 

  h2 {
    color: #373535;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 24px;

    @media (min-width: 600px) {
      font-size: 2.25rem;
    }
  }

  .card {
    color: #4a5568;
    line-height: 1.75rem;
    letter-spacing: 0.2px;
  } */
`
