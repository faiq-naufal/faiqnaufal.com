import { useContext } from "react"
import { AppContext } from "@contexts/AppContext"

const useAppContext = () => {
  const value = useContext(AppContext)
  return value
}

export default useAppContext
