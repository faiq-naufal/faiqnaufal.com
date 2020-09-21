import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import { BiSitemap } from "react-icons/bi"
import { ReactComponent as Logo } from "../images/logo/faiq_naufal_logo.svg"

const Header = ({ children, ...others }) => (
  <StyledHeader {...others}>
    <NavTop>
      <div className="logo">
        <Link to="/" aria-label="Logo">
          <Logo title="Logo" stroke="#000" description="Faiq Naufal Logo" />
        </Link>
      </div>
      <div className="social-media">
        <a
          href="https://github.com/faiq-naufal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="mr-16"
        >
          <GoMarkGithub />
          <span>Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/faiqnaufal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="mr-16"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sitemap"
        >
          <BiSitemap />
          <span>Sitemap</span>
        </a>
      </div>
    </NavTop>
  </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: flex-end;
`

const NavTop = styled.nav`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;

  .logo {
    flex: 1;
    max-width: 40px;
    display: flex;

    a {
      width: 40px;
      height: 40px;

      svg {
        /* fix svg stroke bug */
        path[d="M8 8h496v496H8z"] {
          stroke-width: 16;
        }
      }
    }

    @media (min-width: 960px) {
      max-width: 48px;
      position: fixed;
      top: 20px;

      a {
        width: 48px;
        height: 48px;
      }
    }
  }

  .social-media {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      display: flex;
      align-items: center;
      color: rgba(74, 85, 104, 0.7);
      font-size: 1.25rem;
      text-decoration: none;

      &:hover,
      &:hover span {
        color: #0e8162;
      }

      &.mr-16 {
        margin-right: 16px;
      }

      span {
        display: none;
        font-weight: 500;
        color: rgba(74, 85, 104, 0.85);

        @media (min-width: 600px) {
          display: flex;
          margin-left: 8px;
          font-size: 0.875rem;
        }
      }
    }
  }
`
