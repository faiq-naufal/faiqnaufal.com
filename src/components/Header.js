import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import logo from "../images/small-logo.png"

const Header = ({ children, ...others }) => (
  <StyledHeader {...others}>
    <NavTop>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="social-media">
        <a
          href="https://github.com/faiq-naufal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <GoMarkGithub />
          <span>Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/faiqnaufal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
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
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;

  .logo {
    flex: 1;
    max-width: 56px;
    display: flex;
    align-items: center;

    a {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: auto;
      }
    }

    @media (min-width: 960px) {
      max-width: 64px;

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
      color: #757575;
      font-size: 1.5rem;
      text-decoration: none;

      &:not(:last-of-type) {
        margin-right: 16px;
      }

      span {
        display: none;
        color: #000;

        @media (min-width: 600px) {
          display: flex;
          margin-left: 8px;
          font-size: 1rem;
        }
      }
    }
  }
`
