import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import BgHome from "../images/bg_home.svg"
import Container from "./Container"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

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
      .Inter {
        font-family: "Inter", sans-serif;
      }
      body {
        font-family: "Inter", "Helvetica Neue", "Arial", "sans-serif";
        overflow-y: scroll;
        background-color: #fdfbfb;
        font-size: 0.875rem;

        @media (min-width: 600px) {
          font-size: 1rem;
        }
      }
      img,
      button {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
      }
      *:focus {
        -webkit-tap-highlight-color: transparent;
        outline: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
      }
      ::selection {
        background: #0e8162;
        color: #fff;
      }
      button {
        border: none;
        outline: none;
        cursor: pointer;
      }

      #nprogress .bar {
        height: 4px;
      }
    `}
  />
)

const Layout = ({ children, location, pageContext }) => {
  if (location.pathname === "/offline-plugin-app-shell-fallback") return null

  return (
    <>
      <GlobalStyle />
      {pageContext.layout === "home" ? (
        <Background>
          <MainLayout children={children} />
        </Background>
      ) : (
        <MainLayout children={children} />
      )}
    </>
  )
}

export default Layout

const MainLayout = ({ children }) => (
  <StyledContainer>
    <Main>
      <Header className="header" />
      <Sidebar className="sidebar" />
      <div className="content">{children}</div>
      <Footer className="footer" />
    </Main>
  </StyledContainer>
)

const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;
  background-image: url(${BgHome});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  @media (min-width: 960px) {
    background-position: center center;
  }
`

const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  width: 100%;
  position: relative;
  flex: 1;

  display: grid;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer"
    "sidebar sidebar sidebar";

  grid-template-columns: 1fr;
  grid-template-rows: 80px calc(100% - 192px) 56px 56px;

  @media (min-width: 960px) {
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
    grid-template-columns: 180px 1fr 150px;
    grid-template-rows: 80px calc(100% - 136px) 56px;
    grid-column-gap: 20px;
  }

  .header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;

    @media (min-width: 960px) {
      padding-top: 24px;
    }
  }

  .footer {
    grid-area: footer;
  }
`
