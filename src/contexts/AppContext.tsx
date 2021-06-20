import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import useMobile from "@hooks/useMobile"

interface GlobalStateValue {
  isMobile: boolean
  theme: string
}

interface GlobalState {
  appState: GlobalStateValue
  setAppState: Dispatch<SetStateAction<GlobalStateValue>>
}

interface AppProviderProps {
  children: React.ReactNode
}

const initialStateValues = {
  isMobile: false,
  theme: "light",
}

const initialState = {
  appState: initialStateValues,
  setAppState: () => {},
}

export const AppContext = createContext<GlobalState>(initialState)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const isMobile = useMobile()
  const [appState, setAppState] = useState(initialStateValues)

  useEffect(() => {
    if (isMobile !== appState.isMobile) {
      setAppState(prevState => ({ ...prevState, isMobile }))
    }
  }, [isMobile])

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
