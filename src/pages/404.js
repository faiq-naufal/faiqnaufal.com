import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { Link } from "gatsby"
import SEO from "../components/Seo"
import { ReactComponent as Illust404 } from "../images/404_page_not_found.svg"

const GlobalStyle = () => (
  <Global
    styles={css`
      @media (max-width: 959px) {
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    `}
  />
)

export default function NotFoundPage() {
  const title = `404 Error Page Not Found - Faiq Naufal`
  const description = `Sorry, the page you are looking for cannot be found`

  return (
    <>
      <SEO title={title} description={description} />
      <GlobalStyle />
      <Section>
        <h1>Awww... snap! You have found the edge of the universe</h1>
        <div className="illust-container">
          <Illust404
            title="404 Page Not Found"
            description="The 404 Page Not Found Illustration"
          />
        </div>
        <p className="maxw-720 page-not-found">
          The page you are looking for cannot be found
        </p>
        <p className="maxw-720 dont-worry">
          Do not worry as the detective will be sent to investigate further.
          While the investigation happens, why not check the other pages?
        </p>
        <hr />
        <NavLink>
          <ul>
            <li className="need-mb">
              <Link to="/">Home</Link>
            </li>
            <li className="need-mb">
              <Link to="/about">About</Link>
            </li>
            <li className="need-mb">
              <Link to="/showcase">Showcase</Link>
            </li>
            <li className="need-mb">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/note">Note</Link>
            </li>
          </ul>
        </NavLink>
      </Section>
    </>
  )
}

const Section = styled.section`
  h1 {
    font-weight: 700;
    line-height: 2.25rem;
    font-size: 1.875rem;
    margin: 0 auto 48px auto;
    max-width: 720px;
    color: #373535;

    @media (min-width: 600px) {
      font-size: 2.5rem;
      line-height: 3rem;
      text-align: center;
      margin: 0 auto 60px auto;
    }
  }
  .illust-container {
    text-align: center;
    border-bottom: solid 4px #484848;
    svg {
      width: 100%;
      max-width: 240px;
      height: 100%;

      @media (min-width: 600px) {
        max-width: 400px;
      }
    }
  }

  .maxw-720 {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }

  .page-not-found {
    margin-top: 48px;
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    color: #373535;

    @media (min-width: 600px) {
      margin-top: 60px;
      font-size: 2rem;
    }
  }

  .dont-worry {
    margin-top: 48px;
    color: #4a5568;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (min-width: 600px) {
      text-align: center;
      margin-top: 60px;
    }
  }

  .dont-worry + hr {
    margin: 24px 0;

    @media (min-width: 600px) {
      margin: 30px 0;
    }
  }
`

const NavLink = styled.nav`
  margin-bottom: 48px;

  @media (min-width: 600px) {
    margin-bottom: 60px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }

    li {
      flex: 1;
      display: flex;
      align-items: center;
      align-content: center;

      &.need-mb {
        margin-bottom: 24px;
      }

      @media (min-width: 600px) {
        justify-content: center;

        &.need-mb {
          margin-bottom: 0;
        }
      }

      a {
        font-size: 1rem;
        color: #4a5568;
        text-transform: uppercase;
        text-decoration: underline;

        &:hover {
          color: #0e8162;
        }

        @media (min-width: 600px) {
          justify-content: center;
        }

        @media (min-width: 600px) {
          font-size: 1.25rem;
        }
      }
    }
  }
`
