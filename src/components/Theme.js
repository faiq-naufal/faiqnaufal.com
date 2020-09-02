import React, { useState, useEffect } from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import "typeface-inter"
import "typeface-merriweather"
import "normalize.css"
import ProgressPage from "./ProgressPage"
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
      <GlobalStyle />
      {/* <ProgressPage scroll={`${stateScrollPosition}%`} /> */}
      {children}
    </ThemeProvider>
  )
}
