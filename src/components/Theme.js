import React, { useState, useEffect } from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import "typeface-inter"
import "typeface-merriweather"
import "normalize.css"
import { calculateScrollDistance } from "../utils/utils"

const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      * {
        margin: 0;
        padding: 0;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

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

      .Merriweather {
        font-family: "Merriweather", serif;
      }

      body {
        font-family: "Inter", "Helvetica Neue", "Arial", "sans-serif";
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

      button {
        border: none;
        outline: none;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    `}
  />
)

export default function Theme({ children }) {
  const [stateScrollPosition, setStateScrollPosition] = useState(0)

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setStateScrollPosition(() => calculateScrollDistance())
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ThemeProvider theme={{}}>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle />
      {/* <ProgressPage scroll={`${stateScrollPosition}%`} /> */}
      {children}
    </ThemeProvider>
  )
}
