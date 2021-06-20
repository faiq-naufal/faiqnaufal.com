// import React from "react"
import "./src/styles/global.css"
// import "@fontsource/inter/400.css"
// import "@fontsource/fraunces/400.css"
import "@fontsource/inter/variable.css"
import "@fontsource/fraunces/variable.css"
import "@fontsource/fraunces/variable-italic.css"

// import "@fontsource/inter/400.css"
// import "@fontsource/inter/500.css"
// import "@fontsource/inter/700.css"
// import "@fontsource/fraunces/600.css"
// import "@fontsource/fraunces/700.css"

// import { AppProvider } from "@contexts/AppContext"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "This website has been updated. Reload to display the latest version?"
  )
  if (answer === true) {
    window.location.reload()
  }
}

// export const wrapRootElement = ({ element }) => {
//   return <AppProvider>{element}</AppProvider>
// }
