// import { extendTheme } from "@chakra-ui/react"
// import { mode } from "@chakra-ui/theme-tools"

// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "light",
// }

// // setup light/dark mode component defaults
// const components = {
//   // Link: {
//   //   baseStyle: props => ({
//   //     color: mode("blue.500", "blue.300")(props),
//   //   }),
//   // },
//   Heading: {
//     baseStyle: props => ({
//       color: mode("blue.900", "blue.50")(props),
//       fontWeight: 700,
//     }),
//   },
// }

// // setup light/dark mode global defaults
// const styles = {
//   global: props => ({
//     "html, body, #___gatsby, #gatsby-focus-wrapper": {
//       display: "flex",
//       flex: 1,
//       flexDirection: "column",
//       minHeight: "100%",
//       minHeight: "calc(var(--vh, 1vh) * 100)" || "100%",
//       height: "auto",
//       // overflowX: "hidden",
//     },
//     body: {
//       bg: mode("gray.50", "gray.700")(props),
//       overflowY: "scroll",
//       fontSize: "1rem",
//     },
//     "::selection": {
//       background: "#0e8162",
//       color: "#fff",
//     },
//     "#nprogress .bar": {
//       height: "3px",
//     },
//   }),
// }

// //some additional stuff
// const additionalStyles = {
//   fonts: {
//     body: "'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'",
//     heading: "'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'",
//   },
// }

// export const theme = extendTheme({
//   config,
//   components,
//   styles,
//   ...additionalStyles,
// })
