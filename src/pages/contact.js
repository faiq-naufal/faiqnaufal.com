import React from "react"
import styled from "@emotion/styled"
import { ReactComponent as IllustContact } from "../images/new_message.svg"

export default function contact() {
  return (
    <>
      <Section>
        <TopIllust>
          <div className="col-flex">
            <h1 className="Merriweather heading">
              Don't just stay there! Let’s exchange words
            </h1>
            <h2 className="subheading">
              Tell me something amazing or you can just hit me up! I would love
              to see your stories and thought
            </h2>
          </div>
          <div className="col-flex">
            <StyledIllustContact />
          </div>
        </TopIllust>
      </Section>
      <Section>
        <h1 className="Merriweather heading">
          Just a few inputs and your messages will be reaching out to me ~
        </h1>
      </Section>
      <Section>
        <h1 className="Merriweather heading">
          Or you can reach me at social media
        </h1>
        <h2 className="subheading">
          That way we can be connected and have an opportunity to communicate
          our thought better
        </h2>

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
      </Section>
    </>
  )
}

const Section = styled.div`
  margin-bottom: 80px;
  @media (min-width: 960px) {
    margin-bottom: 120px;
  }
`

const TopIllust = styled.div`
  max-width: 480px;
  margin: 0 auto;
  border-bottom: solid 4px #000;

  .col-flex {
    text-align: center;
  }

  @media (min-width: 960px) {
    max-width: unset;
    margin: 0;
    display: flex;

    .col-flex {
      flex: 1;
    }

    .col-flex:first-child {
      text-align: left;
    }

    .col-flex:last-child {
      text-align: right;
      padding-right: 80px;
    }
  }

  .heading {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 1.875rem;
    font-weight: 400;
    text-align: center;

    @media (min-width: 960px) {
      font-size: 2rem;
      line-height: 2.75rem;
      text-align: left;
    }
  }

  .subheading {
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 24px;

    @media (min-width: 960px) {
      text-align: left;
    }
  }
`

const StyledIllustContact = styled(IllustContact)`
  width: 100%;
  max-width: 240px;
  height: 100%;
  margin-bottom: -4px;
`

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
