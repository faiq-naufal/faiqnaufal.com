import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

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
        overflow-y: scroll;
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
        background: #e24f41;
        color: #fff;
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
  return (
    <>
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
      {children}
    </>
  )
}
