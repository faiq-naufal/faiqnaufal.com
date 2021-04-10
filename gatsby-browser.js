import "./src/styles/global.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
