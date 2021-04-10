import React from "react"

export default function Footer({ children, ...others }) {
  return (
    <footer className="flex items-end pb-6" {...others}>
      <p className="w-full text-xs text-center leading-4 lg:text-right">
        Lovingly crafted{" "}
        <span role="img" aria-label="with love">
          💕
        </span>{" "}
        by Faiq Naufal
      </p>
    </footer>
  )
}
