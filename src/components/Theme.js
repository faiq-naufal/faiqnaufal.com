import React from "react"
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
      <GlobalStyle />
      {children}
    </>
  )
}
