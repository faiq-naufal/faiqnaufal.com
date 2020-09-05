require("typeface-inter")
require("typeface-merriweather")
require("normalize.css/normalize.css")

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
