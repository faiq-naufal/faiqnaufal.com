// import React from "react"
// import { ChakraProvider, CSSReset } from "@chakra-ui/react"
// import { theme } from "./src/utils/theme"
import "./src/utils/global.css"
import "./src/utils/reset.min.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

// export const wrapRootElement = ({ element }) => {
//   return (
//     <ChakraProvider theme={theme}>
//       <CSSReset />
//       {element}
//     </ChakraProvider>
//   )
// }

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
