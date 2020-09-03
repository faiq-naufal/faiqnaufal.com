import React from "react"
import styled from "@emotion/styled"
import { graphql, StaticQuery } from "gatsby"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Theme from "./Theme"
import Container from "./Container"
import BackgroundImage from "gatsby-background-image"

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

const Layout = ({ children, pageContext }) => {
  if (pageContext.layout === "home") {
    console.log("layout 1")

    return (
      <StaticQuery
        query={graphql`
          query HomeQuery {
            bgHomeData: file(relativePath: { eq: "bg-home.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 2160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => (
          <Theme>
            <Background fluid={data.bgHomeData.childImageSharp.fluid}>
              <MainLayout children={children} />
            </Background>
          </Theme>
        )}
      />
    )
  }

  console.log("layout 2")

  return (
    <Theme>
      <MainLayout children={children} />
    </Theme>
  )
}

export default Layout

const Background = styled(BackgroundImage)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: #fdfbfb;
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
