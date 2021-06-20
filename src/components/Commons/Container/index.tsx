import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="flex flex-1 flex-col max-w-[960px] mx-auto px-4 sm:px-6 xl:px-0">
    {children}
  </div>
)

export default Container
