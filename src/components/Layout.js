import React from "react"
import styled from "@emotion/styled"
import BgHome from "../images/bg_home.svg"
import Theme from "./Theme"
import Container from "./Container"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children, pageContext }) => (
  <Theme>
    {pageContext.layout === "home" ? (
      <Background>
        <MainLayout children={children} />
      </Background>
    ) : (
      <MainLayout children={children} />
    )}
  </Theme>
)

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
  background-color: #fdfbfb;
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
    grid-template-columns: 150px 1fr 150px;
    grid-template-rows: 80px calc(100% - 136px) 56px;
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

    @media (min-width: 960px) {
      padding-top: 32px;
    }
  }

  .footer {
    grid-area: footer;
  }
`
