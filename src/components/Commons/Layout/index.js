import React, { useEffect } from "react"
import { css } from "@linaria/core"
import Container from "@components/Commons/Container"
import Header from "@components/Commons/Header"
import Navbar from "@components/Commons/NavBar"
import Footer from "@components/Commons/Footer"
import BgHome from "@images/bg_home.svg"

const setDocHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

const Layout = ({ children, location }) => {
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

  if (location.pathname === "/") {
    return (
      <div
        style={{ backgroundImage: `url(${BgHome})` }}
        className="flex-1 flex flex-col h-auto bg-cover bg-right bg-no-repeat lg:bg-center"
      >
        <MainLayout children={children} />
      </div>
    )
  }

  return <MainLayout children={children} />
}

export default Layout

const MainLayout = ({ children }) => {
  return (
    <Container>
      <main
        className={`${gridAreaTemplates} grid grid-cols-1 lg:grid-cols-[180px,1fr,150px] lg:gap-x-5 w-full relative flex-1`}
      >
        <Header style={{ gridArea: "header" }} />
        <Navbar style={{ gridArea: "navbar" }} />
        <div style={{ gridArea: "content" }}>{children}</div>
        <Footer style={{ gridArea: "footer" }} />
      </main>
    </Container>
  )
}

const gridAreaTemplates = css`
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer"
    "navbar navbar navbar";
  grid-template-rows: 80px calc(100% - 192px) 56px 56px;

  @media (min-width: 960px) {
    grid-template-areas:
      "header header header"
      "navbar content content"
      "footer footer footer";
    grid-template-rows: 80px calc(100% - 136px) 56px;
  }
`
