import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby-link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { object as YupObject, string as YupString } from "yup"
import { ReactComponent as IllustContact } from "../../images/new_message.svg"
import TextField from "../../components/TextField"
import StyledSection from "../../components/Section"
import { encodeFormData } from "../../utils/utils"

let contactSchema = YupObject().shape({
  subject: YupString().required("Field must be filled"),
  name: YupString()
    .required("Field must be filled")
    .max(20, "Field cannot more than 20 characters"),
  email: YupString()
    .required("Field must be filled")
    .email("Invalid format email address"),
  message: YupString().required("Field must be filled"),
})

const onSubmitMessage = (data, e) => {
  const form = e.target

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({
      "form-name": form.getAttribute("name"),
      ...data,
    }),
  })
    .then(response => {
      navigate(form.getAttribute("action"), {
        state: {
          showPage: true,
        },
      })
    })
    .catch(error => {
      console.log(error)
    })
}

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const watchSenderName = watch("name")

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
            <div className="message-box-heading">
              <div>
                <h2 className="Tinos heading">
                  Just a few inputs and your messages will be flying to me ~
                </h2>
                <p className="paragraph-heading">
                  Rest assured, I will not give your information to others. You
                  will not get any spam email from here.
                </p>
              </div>
            </div>

            <div className="message-box-inner">
              <form
                name="contact form"
                method="post"
                action="./mail-success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmitMessage)}
              >
                <input type="hidden" name="form-name" value="contact form" />
                <p hidden>
                  <label>
                    If you're human don’t fill this out:
                    <input name="bot-field" inputRef={register} />
                  </label>
                </p>
                <p className="subject">
                  <label htmlFor="subject">Subject: </label>
                  <div className="wrapper-text-field">
                    <TextField
                      id="subject"
                      name="subject"
                      fullWidth
                      placeholder="Message subject here"
                      inputRef={register()}
                      error={!!errors.subject?.message}
                      helperText={errors.subject?.message}
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
                      name="name"
                      fullWidth
                      placeholder="Your name here"
                      inputRef={register()}
                      error={!!errors.name?.message}
                      helperText={errors.name?.message}
                    />
                  </div>
                  <span className="message-desktop">.&nbsp;</span>
                  <label htmlFor="email">My contact email </label>is
                  <span className="message-desktop">&nbsp;</span>
                  <div className="wrapper-text-field">
                    <TextField
                      id="email"
                      name="email"
                      fullWidth
                      placeholder="Your email here"
                      inputRef={register()}
                      error={!!errors.email?.message}
                      helperText={errors.email?.message}
                    />
                  </div>
                  <span className="message-desktop">.&nbsp;</span>
                  <span className="message-desktop">
                    I am contacting you because&nbsp;
                  </span>
                  I have a<label htmlFor="message"> message </label>for you,
                  <TextField
                    id="message"
                    name="message"
                    fullWidth
                    multiline
                    placeholder="Your message here"
                    inputRef={register()}
                    error={!!errors.message?.message}
                    helperText={errors.message?.message}
                  />
                </p>
                <div className="footer-message">
                  <div className="regards">
                    <span>Regards,</span>
                    <span>
                      {!!watchSenderName ? watchSenderName : `(Your Name)`}
                    </span>
                  </div>
                  <div className="send-message">
                    <FilledButton type="submit">Send Message</FilledButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </MessageWrapper>
      </Section>
      <Section>
        <SocialMediaGrid>
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
        </SocialMediaGrid>
      </Section>
    </>
  )
}

const Section = styled(StyledSection)`
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
  margin-bottom: 48px;
  p {
    line-height: 2rem;
  }

  .message-box-outer {
    @media (min-width: 600px) {
      padding: 40px;
      background-color: #fff;
      border: solid 4px #484848;
      border-top: solid 40px #484848;
    }
  }

  .message-box-heading {
    @media (min-width: 960px) {
      display: grid;
      grid-template-columns: 0.5fr;
    }
  }

  .message-box-inner {
    font-size: 0.875rem;
    background-color: #fff;
    padding: 40px 20px 40px 20px;
    border-radius: 4px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23484848FF' stroke-width='8' stroke-dasharray='12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

    @media (min-width: 600px) {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23484848FF' stroke-width='8' stroke-dasharray='20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      font-size: 1rem;
      padding: 40px 32px 40px 32px;
      max-width: 820px;
      margin-top: 16px;
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
    }

    .subject + p .wrapper-text-field {
      margin-bottom: 10px;

      @media (min-width: 960px) {
        margin-bottom: 0;
      }
    }

    .footer-message {
      margin-top: 48px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 1fr;
      grid-column-gap: 4px;

      .regards {
        span {
          display: block;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

          &:first-of-type {
            margin-bottom: 80px;
          }
        }
      }

      .send-message {
        text-align: right;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }
    }
  }
`

const FilledButton = styled.button`
  background-color: #0e8162;
  border-radius: 4px;
  color: #fff;
  padding: 8px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`

const SocialMediaGrid = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }
`

const SocialMediaList = styled.ul`
  list-style: none;
  li {
    border-bottom: solid 1px #484848;

    @media (min-width: 960px) {
      &:first-of-type strong {
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
        border: solid 1px #484848;
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
  &::after {
    color: #000;
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }

  &:hover&::after {
    color: #0e8162;
  }
`
