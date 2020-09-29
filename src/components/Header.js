import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import { ReactComponent as Logo } from "../images/logo/faiq_naufal_logo_full.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Header = ({ children, ...others }) => (
  <StyledHeader {...others}>
    <NavTop>
      <div className="logo">
        <Link to="/" aria-label="Logo">
          <Logo title="Logo" description="Faiq Naufal Logo" />
        </Link>
      </div>
      <div className="social-media">
        <OutboundLink
          href="https://github.com/faiq-naufal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="mr-16"
        >
          <GoMarkGithub />
          <span>Github</span>
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/in/faiqnaufal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="mr-16"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </OutboundLink>
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

    a {
      display: flex;
    }

    svg {
      height: 40px;
    }

    @media (min-width: 960px) {
      position: fixed;
      top: 20px;
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

      svg {
        font-size: 1.5rem;
        @media (min-width: 960px) {
          font-size: 1.25rem;
        }
      }

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
