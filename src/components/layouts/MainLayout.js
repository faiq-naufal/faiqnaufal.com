import React, { useEffect } from "react"
import styled from "@emotion/styled"
import BgHome from "../../images/bg_home.svg"
import Container from "../Container"
import Header from "../Header"
import Sidebar from "../Sidebar"
import Footer from "../Footer"

const setDocHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

const Layout = ({ children, location, pageContext }) => {
  useEffect(() => {
    window.addEventListener("resize", setDocHeight, true)
    window.addEventListener("orientationchange", setDocHeight, true)
    setDocHeight()

    return () => {
      window.removeEventListener("resize", setDocHeight, true)
      window.removeEventListener("orientationchange", setDocHeight, true)
    }
  }, [])

  if (location.pathname === "/offline-plugin-app-shell-fallback") return null

  return (
    <>
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

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Main>
        <Header className="header" />
        <Sidebar className="sidebar" />
        <div className="content">{children}</div>
        <Footer className="footer" />
      </Main>
    </Container>
  )
}

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
