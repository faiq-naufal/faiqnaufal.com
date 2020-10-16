import "./src/utils/reset.min.css"
import "./src/utils/global.css"
import "fontsource-inter/400-normal.css"
import "fontsource-inter/600-normal.css"
import "fontsource-inter/700-normal.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
