import React from "react"
import styled from "@emotion/styled"
import { ReactComponent as IllustContact } from "../images/new_message.svg"
import TextField from "../components/TextField"

export default function contact() {
  return (
    <>
      <Section>
        <TopIllust>
          <div className="col-grid">
            <h1 className="Tinos heading">
              Don’t just stay there. Let’s exchange words!
            </h1>
            <p className="paragraph-heading">
              Tell me something amazing or you can just hit me up! I would love
              to see your stories and thought
            </p>
          </div>
          <div className="col-grid">
            <StyledIllustContact />
          </div>
        </TopIllust>
      </Section>
      <Section>
        <MessageWrapper>
          <div className="message-box-outer">
            <h2 className="Tinos heading">
              Just a few inputs and your messages will be reaching out to me ~
            </h2>
            <div className="message-box-inner">
              <form action="post">
                <p className="subject">
                  <label htmlFor="subject">Subject: </label>
                  <div className="wrapper-text-field">
                    <TextField
                      id="subject"
                      fullWidth
                      placeholder="Message subject here"
                    />
                  </div>
                </p>
                <p>
                  Dear Faiq Naufal, <br className="message-desktop" />
                  <span className="message-desktop">
                    First of all, let me introduce myself.&nbsp;
                  </span>
                  <br className="message-mobile" />
                  <label htmlFor="name">My name </label>is
                  <span className="message-desktop">&nbsp;</span>
                  <div className="wrapper-text-field">
                    <TextField
                      id="name"
                      fullWidth
                      placeholder="Your name here"
                    />
                  </div>
                  <span className="message-desktop">.&nbsp;</span>
                  <label htmlFor="email">My contact email </label>is
                  <span className="message-desktop">&nbsp;</span>
                  <div className="wrapper-text-field">
                    <TextField
                      id="email"
                      fullWidth
                      placeholder="Your email here"
                    />
                  </div>
                  <span className="message-desktop">.&nbsp;</span>
                  <span className="message-desktop">
                    I am contacting you because&nbsp;
                  </span>
                  I have a<label htmlFor="message"> message </label>for you,
                  <TextField
                    id="message"
                    fullWidth
                    multiline
                    placeholder="Your message here"
                  />
                </p>
                <div className="footer-message">
                  <div>
                    <span>Regards,</span>
                    <span>Your Name</span>
                  </div>
                  <div>
                    <FilledButton type="submit">Send Message</FilledButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </MessageWrapper>
      </Section>
      <Section>
        <SocialMediaFlex>
          <div>
            <h2 className="Tinos heading">
              Or you can reach me at social media
            </h2>
            <p className="paragraph-heading">
              That way we can be connected and have an opportunity to
              communicate our thought better
            </p>
          </div>
          <div>
            <SocialMediaList>
              <li>
                <strong>Email</strong>
                <br />
                <EmailCrypt
                  className="social-media-link"
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
              </li>
              <li>
                <strong>LinkedIn</strong>
                <br />
                <a
                  href="https://www.linkedin.com/in/faiqnaufal"
                  className="social-media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  linkedin.com/in/faiqnaufal/
                </a>
              </li>
              <li>
                <strong>Github</strong>
                <br />
                <a
                  href="https://github.com/faiq-naufal"
                  className="social-media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  github.com/faiq-naufal
                </a>
              </li>
            </SocialMediaList>
          </div>
        </SocialMediaFlex>
      </Section>
    </>
  )
}

const Section = styled.section`
  margin-bottom: 80px;

  &:not(:last-of-type) {
    border-bottom: solid 4px #000;
  }

  .heading {
    margin-top: 0;
    margin-bottom: 24px;
    font-weight: 400;
  }

  h1.heading {
    font-size: 1.875rem;
    text-align: center;

    @media (min-width: 960px) {
      font-size: 2rem;
      line-height: 2.75rem;
      text-align: left;
    }
  }

  h1.heading + .paragraph-heading {
    text-align: center;
  }

  @media (min-width: 960px) {
    h1.heading + .paragraph-heading {
      text-align: left;
    }
  }

  h2.heading {
    font-size: 1.5rem;

    @media (min-width: 960px) {
      font-size: 1.875rem;
      line-height: 2.75rem;
    }
  }

  .paragraph-heading {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 24px;
    text-align: justify;
    text-justify: inter-word;

    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }
`

const TopIllust = styled.div`
  max-width: 480px;
  margin: 0 auto;

  .col-grid {
    text-align: center;
  }

  @media (min-width: 960px) {
    max-width: unset;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;

    .col-grid:last-child {
      text-align: right;
      padding-right: 80px;
    }
  }
`

const StyledIllustContact = styled(IllustContact)`
  width: 100%;
  max-width: 240px;
  height: 100%;
  margin-bottom: -4px;
`
const MessageWrapper = styled.div`
  /* margin-bottom: 60px; */
  margin-bottom: 48px;
  p {
    line-height: 1.875rem;
    letter-spacing: 0.2px;
  }

  .message-box-inner {
    font-size: 0.875rem;

    @media (min-width: 600px) {
      font-size: 1rem;
    }

    label {
      font-weight: 600;
      color: #0e8162;
      cursor: pointer;
    }

    .message-mobile {
      display: inline-block;

      @media (min-width: 960px) {
        display: none;
      }
    }

    .message-desktop {
      display: none;

      @media (min-width: 960px) {
        display: inline-block;
      }
    }

    .wrapper-text-field {
      @media (min-width: 960px) {
        display: inline-block;
      }
    }

    .subject {
      margin-bottom: 24px;
      /* margin-bottom: 1.875rem; */
    }

    .subject + p .wrapper-text-field {
      margin-bottom: 10px;

      @media (min-width: 960px) {
        margin-bottom: 0;
      }
    }

    .footer-message {
      margin-top: 48px;
      display: flex;

      > div {
        flex: 1;

        &:nth-of-type(1) {
          span {
            display: block;

            &:first-child {
              margin-bottom: 80px;
            }
          }
        }

        &:nth-of-type(2) {
          text-align: right;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
      }
    }
  }
`

const FilledButton = styled.button`
  background-color: #0e8162;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px 10px;
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  &:focus {
    outline: none;
  }
`

const SocialMediaFlex = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }
`

const SocialMediaList = styled.ul`
  list-style: none;
  li {
    border-bottom: solid 1px #000;

    @media (min-width: 960px) {
      &:first-child strong {
        margin-top: 0;
      }
    }

    strong {
      display: inline-flex;
      font-weight: 600;
      font-size: 0.875rem;
      margin-top: 40px;
      margin-bottom: 20px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -28px;
        width: 12px;
        height: 0px;
        border: solid 1px #000;
      }
    }

    a {
      text-decoration: none;
    }

    .social-media-link {
      display: inline-flex;
      font-size: 0.875rem;
      color: #000;
      margin-bottom: 20px;

      &:hover {
        color: #0e8162;
      }
    }

    @media (min-width: 600px) {
      strong,
      .social-media-link {
        font-size: 1rem;
      }
    }
  }
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

  &:hover&::after {
    color: #0e8162;
  }
`
