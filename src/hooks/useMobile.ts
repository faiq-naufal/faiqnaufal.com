import useMediaQuery from "@hooks/useMediaQuery"

const useMobile = () => {
  const isMobile = useMediaQuery(
    "(max-width: 1199px) and (orientation: portrait), (max-width: 959px)"
  )

  return isMobile
}

export default useMobile
