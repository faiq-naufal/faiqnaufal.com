import React, { useState } from "react"
export const AppContext = React.createContext()

export default function AppProvider({ children }) {
  const [state, setState] = useState({})

  const toggleStateFocusInput = () => {
    setState(prev => ({
      ...prev,
      stateFocusInput: !prev.stateFocusInput,
    }))
  }

  return (
    <AppContext.Provider value={{ data: state, toggleStateFocusInput }}>
      {children}
    </AppContext.Provider>
  )
}
