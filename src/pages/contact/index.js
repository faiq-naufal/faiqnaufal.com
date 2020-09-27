import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby-link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { object as YupObject, string as YupString } from "yup"
import { ReactComponent as IllustContact } from "../../images/notifications.svg"
import Section, { SectionTopBreak } from "../../components/Section"
import Heading from "../../components/Heading"
import TopIllust from "../../components/TopIllust"
import TextField from "../../components/TextField"
import { encodeFormData } from "../../utils/utils"
import Helmet from "react-helmet"
import Seo from "../../components/Seo"
import JsonLd from "../../components/JsonLd"
import useSiteMetaData from "../../components/useSiteMetaData"

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

  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/contact`
  const title = `✉️ Contact - Faiq Naufal`
  const description = `If you would like to work together or just want to get in touch with me just say hello 👋. The best way to reach me is by filling the contact form.`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601091712/assets_faiqnaufal/notifications.png`

  return (
    <>
      <Helmet>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <Seo
        title={title}
        description={description}
        image={thumbnail}
        currentUrl={currentUrl}
      />
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: siteUrl,
          name: "Faiq Naufal",
          description: "Faiq Naufal's Personal Website",
          mainEntity: {
            "@type": "Person",
            name: "Faiq Naufal",
            email: "contact@faiqnaufal.com",
            image: logo,
            jobTitle: "Web Developer",
            gender: "male",
            nationality: "Indonesia",
            sameAs: [
              "https://www.linkedin.com/in/faiqnaufal",
              "https://github.com/faiq-naufal",
            ],
          },
        }}
      </JsonLd>
      <Heading>
        <h1>Contact</h1>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustContact}>
          <h1>
            Don’t just stay there. <strong>Let’s exchange words!</strong>
          </h1>
          <p>
            Tell me something amazing or you can just hit me up! I would love to
            see your stories and thought. The best way to get in touch with me
            is to fill out the form below.
          </p>
        </TopIllust>
      </Section>
      <SectionTopBreak number="04" />
      <Section>
        <MessageWrapper>
          <h2 className="heading">Let's Talk</h2>
          <form
            id="contact-form"
            name="contact form"
            method="post"
            action="./mail-success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmitMessage)}
          >
            <h3 className="heading-form">Tell me anything!</h3>
            <p className="subtitle">
              Rest assured, I will not give your information to others. You will
              not get any spam email from here.
            </p>
            <input type="hidden" name="form-name" value="contact form" />
            <p hidden>
              <label>
                If you're human don’t fill this out:
                <input name="bot-field" inputRef={register} />
              </label>
            </p>
            <div className="subject">
              <label htmlFor="subject">Subject: </label>
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
            <p className="dear">Dear Faiq Naufal,</p>
            <div className="wrapper-text-field">
              <p>
                <label htmlFor="name">My name </label>is
              </p>
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
            <div className="wrapper-text-field">
              <p>
                <label htmlFor="email">My contact email </label>is
              </p>
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
            <div className="wrapper-text-field">
              <p>
                I have a<label htmlFor="message"> message </label>for you,
              </p>
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
            </div>
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
        </MessageWrapper>
      </Section>
      <Section>
        <SocialMedia>
          <div className="dark-side">
            <h2>Or you can reach me at social media</h2>
            <p>
              That way we can be connected and have an opportunity to
              communicate our thought better
            </p>
          </div>
          <div className="white-side">
            <ul>
              <li>
                <strong>Email</strong>
                <br />
                <EmailCrypt
                  className="social-media-link"
                  data-name="contact"
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
            </ul>
          </div>
        </SocialMedia>
      </Section>
    </>
  )
}

const MessageWrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  .heading {
    text-align: center;
    color: #373535;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 72px;

    @media (min-width: 600px) {
      font-size: 2.25rem;
    }
  }

  #contact-form {
    background-color: #fff;
    color: #4a5568;
    padding: 32px 20px;
    border-radius: 4px;
    box-shadow: 0px 27px 48px rgba(55, 53, 53, 0.04),
      0px 11.28px 20.0533px rgba(55, 53, 53, 0.0287542),
      0px 6.0308px 10.7214px rgba(55, 53, 53, 0.0238443),
      0px 3.38082px 6.01034px rgba(55, 53, 53, 0.02),
      0px 1.79553px 3.19205px rgba(55, 53, 53, 0.0161557),
      0px 0.747159px 1.32828px rgba(55, 53, 53, 0.0112458);
    position: relative;

    @media (min-width: 600px) {
      padding: 40px;
    }

    &::after {
      content: "";
      position: absolute;
      top: -48px;
      left: -48px;
      background-color: #0e8162;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 4px;
    }

    .heading-form {
      color: #373535;
      font-size: 1.125rem;
      margin-bottom: 4px;
      @media (min-width: 600px) {
        font-size: 1.25rem;
      }
    }

    .subtitle {
      line-height: 1.5rem;
      letter-spacing: 0.2px;
      margin-bottom: 20px;
    }

    label {
      font-weight: 600;
      color: #0e8162;
      cursor: pointer;
    }

    .subject {
      margin-bottom: 40px;
    }

    .dear {
      margin-bottom: 20px;
    }

    .wrapper-text-field {
      margin-bottom: 20px;
      p {
        margin-bottom: 4px;
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

const SocialMedia = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: 0px 16px 24px rgba(55, 53, 53, 0.06),
    0px 2px 6px rgba(55, 53, 53, 0.04), 0px 0px 1px rgba(55, 53, 53, 0.04);

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  h2 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 24px;

    @media (min-width: 960px) {
      font-size: 2.25rem;
    }
  }

  p {
    line-height: 1.5rem;
    letter-spacing: 0.2px;
  }

  .dark-side {
    background-color: #202020;
    color: #fff;
    padding: 32px 28px;
    min-height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 960px) {
      padding: 40px;
    }
  }

  .white-side {
    background-color: #fff;
    padding: 32px 28px;
    @media (min-width: 960px) {
      padding: 40px;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;

    li {
      border-bottom: solid 1px #373535;

      &:first-of-type strong {
        margin-top: 0;
      }

      strong {
        display: inline-flex;
        font-weight: 600;
        margin: 40px 0 20px 0;
        padding: 4px 8px;
        background-color: #202020;
        color: #fff;
        border-radius: 4px;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -28px;
          width: 12px;
          height: 0px;
          border: solid 1px #373535;
        }
      }

      a {
        text-decoration: none;
      }

      .social-media-link {
        display: inline-flex;
        color: #4a5568;
        margin-bottom: 20px;

        &:hover {
          color: #0e8162;
        }
      }
    }
  }
`

const EmailCrypt = styled.button`
  background: none;
  &::after {
    color: #4a5568;
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }

  &:hover&::after {
    color: #0e8162;
  }
`
