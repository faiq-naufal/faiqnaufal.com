import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import SEO from "../components/Seo"
import SVG from "react-inlinesvg"
import illust404 from "../images/404_page_not_found.svg"

const NotFoundPage = () => {
  return (
    <Section>
      <SEO title="404: Not found" />
      <h1 className="Merriweather">
        Awww... snap! You have found the edge of this website
      </h1>
      <div className="illust-container">
        {/* <img src={illust404} alt="404 Page Not Found" /> */}
        <SVG
          src={illust404}
          title="404"
          description="The 404 Page Not Found Illustration"
          loader={<span>Loading...</span>}
        />
      </div>
      <p>The page you are looking for cannot be found</p>
      <p>
        Do not worry as the detective will be sent to investigate further. While
        the investigation happens, why not check the other pages?
      </p>
      <NavLink>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/showcase">Showcase</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/note">Note</Link>
          </li>
        </ul>
      </NavLink>
    </Section>
  )
}

export default NotFoundPage

const Section = styled.section`
  .illust-container {
    max-width: 500px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`

const NavLink = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }

    li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;

      &:not(::last-child) {
        margin-bottom: 24px;
      }

      a {
        font-size: 1.25rem;
        color: #000;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
  }
`
