import React from "react"

interface HtmlProps {
  htmlAttributes: object
  headComponents: []
  bodyAttributes: object
  preBodyComponents: []
  body: string
  postBodyComponents: []
}

const Html: React.FC<HtmlProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div data-nosnippet>
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
          data-nosnippet
        />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default Html
