import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

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
