import "typeface-inter"
import "typeface-tinos"
import "./src/utils/reset.min.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
