import React from "react"
import { styled } from "linaria/react"

export default function contact() {
  return (
    <>
      <SectionTop>
        <h1 className="Merriweather">
          Don't just stay there Let’s exchange words
        </h1>
        <p>
          Tell me something amazing or you can just hit me up! I would love to
          see your stories and thought
        </p>
      </SectionTop>
      <section>
        <h1 className="Merriweather">
          Just a few inputs and your messages will be reaching out to me ~
        </h1>
      </section>
      <section>
        <h1 className="Merriweather">Or you can reach me at social media</h1>
        <p>
          That way we can be connected and have an opportunity to communicate
          our thought better
        </p>

        <nav>
          <ul>
            <li>
              <strong>Email</strong>
              <EmailCrypt
                data-name="faiq"
                data-domain="faiqnaufal"
                data-tld="com"
                onClick={event => {
                  window.location.href = `mailto:${event.currentTarget.getAttribute(
                    `data-name`
                  )}@${event.currentTarget.getAttribute(
                    `data-domain`
                  )}.${event.currentTarget.getAttribute(`data-tld`)}`
                  return false
                }}
              />
              <hr />
            </li>
            <li>
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/faiqnaufal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                linkedin.com/in/faiqnaufal/
              </a>
              <hr />
            </li>
            <li>
              <strong>Github</strong>
              <a
                href="https://github.com/faiq-naufal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                github.com/faiq-naufal
              </a>
              <hr />
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

const EmailCrypt = styled.button`
  background: none;
  outline: none;
  border: none;
  &::after {
    color: #000;
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }

  &:focus {
    outline: none;
  }
`

const SectionTop = styled.section``
