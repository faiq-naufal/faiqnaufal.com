import React from "react"
import { Helmet } from "react-helmet"
import { css } from "linaria"

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
      {children}
    </>
  )
}

export const globals = css`
  :global() {
    html {
      -webkit-box-sizing: border-box;
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
      -webkit-box-sizing: inherit;
      box-sizing: inherit;
    }

    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
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
      -moz-user-select: none;
      -o-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    *:focus {
      -webkit-tap-highlight-color: transparent;
      outline: none;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }

    ::-moz-selection {
      background: #e24f41;
      color: #fff;
    }

    ::selection {
      background: #e24f41;
      color: #fff;
    }

    button {
      border: none;
      outline: none;
      cursor: pointer;
    }

    button:focus {
      outline: none;
    }
  }
`
