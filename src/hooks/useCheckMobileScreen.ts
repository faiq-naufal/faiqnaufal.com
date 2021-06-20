import { useEffect, useState } from "react"

const useCheckMobileScreen = () => {
  const client = typeof window !== "undefined"

  const [width, setWidth] = useState<number>(client ? window.innerWidth : 0)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  return width <= 960
}

export default useCheckMobileScreen
