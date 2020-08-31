export const getDocumentHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
}

export const calculateScrollDistance = () => {
  const scrollTop = window.pageYOffset
  const windowHeight = window.innerHeight
  const documentHeight = getDocumentHeight()

  const totalDocumentScrollLength = documentHeight - windowHeight
  const scrollPosition = Math.floor(
    (scrollTop / totalDocumentScrollLength) * 100
  )

  return scrollPosition
}
