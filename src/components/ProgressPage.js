import React, { useState, useEffect } from "react"
import { styled } from "linaria/react"
import { calculateScrollDistance } from "../utils/utils"

export default function ProgressPage() {
  const [stateScrollPosition, setStateScrollPosition] = useState(0)

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setStateScrollPosition(() => calculateScrollDistance())
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <Progress scroll={`${stateScrollPosition}%`} />
}

const Progress = styled.div`
  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    #e24f41 ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 5px;
  z-index: 5;
`
