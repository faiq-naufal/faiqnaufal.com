import React, { useEffect } from "react"
import lozad from "lozad"

interface LazyLoadProps {
  children: React.ReactNode
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children }) => {
  const { observe } = lozad()

  useEffect(() => {
    observe()
  }, [])

  return <div className="lozad">{children}</div>
}

export default LazyLoad
