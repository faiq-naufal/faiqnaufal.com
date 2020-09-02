import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import { BsBriefcase } from "react-icons/bs"
import logo from "../images/small-logo.png"
import bgHome from "../images/bg-home.png"

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #___gatsby,
      #gatsby-focus-wrapper {
        display: flex;
        flex: 1;
        flex-direction: column;
        min-height: 100%;
        height: auto;
      }
    `}
  />
)

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Background>
      <Container
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <Main>
          <Header className="header">
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
          </Header>
          <Sidebar className="sidebar">
            <Link to="/" activeClassName="active">
              <AiOutlineHome size={24} /> <span>Home</span>
            </Link>
            <Link to="/about" activeClassName="active">
              <AiOutlineInfoCircle size={24} /> <span>About</span>
            </Link>
            <Link to="/portfolio" activeClassName="active">
              <BsBriefcase size={24} /> <span>Portfolio</span>
            </Link>
            <Link to="/contact" activeClassName="active">
              <AiOutlineMail size={24} /> <span>Contact Me</span>
            </Link>
          </Sidebar>
          <ContentContainer className="content">
            <Content>
              <h1 className="Merriweather">Faiq Naufal</h1>
              <p className="job-alias">
                <strong> Web Enthusiast</strong>
                <strong>&nbsp;| Front End Web Developer |&nbsp;</strong>
                <strong> UI Crafter</strong>
              </p>

              <p className="heading-label">
                Passionate in crafting <strong>innovational</strong>,{" "}
                <strong>functional</strong>, <strong>quality-focused</strong>{" "}
                modern web with latest cutting-edge technology
              </p>
              <ButtonOutlined>Download Resume</ButtonOutlined>
            </Content>
          </ContentContainer>
          <Footer className="footer">
            <p>
              Made with{" "}
              <span role="img" aria-label="love">
                💕
              </span>{" "}
              by Faiq Naufal &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </Footer>
        </Main>
      </Container>
    </Background>
  </Layout>
)

export default IndexPage

const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;
  background: url(${bgHome});
  background-color: #fdfbfb;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

const Sidebar = styled.nav`
  a {
    font-size: 0.625rem;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    &:hover,
    &.active {
      font-weight: 600;

      color: #e24f41;

      span {
        color: #000;
      }
    }
  }

  @media (max-width: 959px) {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 56px;
    width: 100%;
    box-shadow: 0 -2px 4px 0 rgba(108, 114, 124, 0.16);
    background-color: #fff;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;

    a {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;

      span {
        display: block;
        margin-top: 8px;
      }
    }
  }

  @media (min-width: 960px) {
    padding-top: 48px;

    a {
      font-size: 0.875rem;
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      span {
        display: inline-block;
        margin-left: 8px;
      }

      &.active {
        &::before {
          content: "";
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: calc(100% + 4px);
          background-color: #e24f41;
        }
      }
    }
  }
`

const Main = styled.main`
  position: relative;
  padding-bottom: 56px;
  flex: 1;

  display: grid;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer"
    "sidebar sidebar sidebar";

  grid-template-columns: 1fr;
  grid-template-rows: 80px calc(100% - 136px) 56px 56px;

  @media (min-width: 960px) {
    padding-bottom: 0;
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
    grid-template-columns: 150px 1fr 150px;
    grid-column-gap: 24px;
  }

  .header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
  }
`

const ButtonOutlined = styled.button`
  background: none;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px;
  border: solid 2px #000;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: flex-end;
`

// const Footer = styled.footer`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-direction: flex-end;
// `

const ContentContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Content = styled.div`
  position: relative;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 24px;
    margin-bottom: 24px;

    @media (min-width: 600px) {
      font-size: 4.5rem;
    }
  }

  .job-alias {
    strong {
      font-weight: 500;
      font-size: 1.25rem;
      display: block;
    }

    strong:nth-of-type(1),
    strong:nth-of-type(3) {
      display: none;
    }

    @media (min-width: 600px) {
      strong,
      strong:nth-of-type(1),
      strong:nth-of-type(3) {
        font-size: 1.5rem;
      }
    }

    @media (min-width: 768px) {
      strong,
      strong:nth-of-type(1),
      strong:nth-of-type(3) {
        display: inline-block;
      }
    }
  }

  .heading-label {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    line-height: 1.5rem;
    letter-spacing: 0.25px;

    strong {
      font-weight: 600;
    }

    &::before {
      content: "- ";
    }

    &::after {
      content: " -";
    }
  }
`

const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;

  p {
    width: 100%;
    font-size: 0.813rem;
    text-align: center;
    line-height: 1.125rem;

    @media (min-width: 960px) {
      text-align: right;
    }
  }
`
