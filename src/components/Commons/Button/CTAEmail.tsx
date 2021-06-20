import React from "react"

const label = "Email"
const name = "me"
const domain = "faiqnaufal"
const tld = "com"

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  event.stopPropagation()
  const target = event.currentTarget
  window.location.href = `mailto:${target.getAttribute(
    `data-name`
  )}@${target.getAttribute(`data-domain`)}.${target.getAttribute(`data-tld`)}`
  return false
}

interface CTAEmailProps {
  children: React.ReactNode
}

const CTAEmail: React.FC<CTAEmailProps> = ({ children }) => {
  return (
    <button
      className="h-10 lg:h-11 min-w-[180px] lg:min-w-[200px] bg-custom-black-1--light rounded-lg uppercase font-inter-700 text-center text-xs lg:text-sm tracking-wide-1 text-custom-white-2--light shadow-custom-shadow-black-btn--light outline-none hover:opacity-70 transition duration-200 inline-flex items-center justify-center"
      type="button"
      aria-label={label}
      data-name={name}
      data-domain={domain}
      data-tld={tld}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export { CTAEmail }

interface CTAEmailTextProps {
  children: React.ReactNode
}

export const CTAEmailText: React.FC<CTAEmailTextProps> = ({ children }) => {
  return (
    <button
      className="hover:underline"
      type="button"
      aria-label={label}
      data-name={name}
      data-domain={domain}
      data-tld={tld}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
