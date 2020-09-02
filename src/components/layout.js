import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Theme from "./Theme"

const Layout = ({ children }) => {
  return (
    <Theme>
      {/* <Header /> */}
      {children}
      {/* <main></main> */}
      {/* <Footer /> */}
    </Theme>
  )
}

export default Layout
