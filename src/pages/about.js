import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Section, { SectionTopBreak } from "../components/Section"
import Heading from "../components/Heading"
import TopIllust from "../components/TopIllust"
import { ReactComponent as IllustAbout } from "../images/note_taking.svg"
import { ReactComponent as VsCode } from "../images/logo/visual-studio-code.svg"
import { ReactComponent as Git } from "../images/logo/git.svg"
import { ReactComponent as Figma } from "../images/logo/figma.svg"
import { ReactComponent as Netlify } from "../images/logo/netlify.svg"
import { ReactComponent as ZohoMail } from "../images/logo/zoho.svg"
import { ReactComponent as GoogleLighthouse } from "../images/logo/google-lighthouse.svg"
import { ReactComponent as GooglePageSpeedInsights } from "../images/logo/google-pagespeed-insights.svg"
import { ReactComponent as GoogleAnalytics } from "../images/logo/google-analytics.svg"
import { ReactComponent as Prettier } from "../images/logo/prettier.svg"
import { ReactComponent as NPM } from "../images/logo/npm.svg"
import { ReactComponent as ChromeDevTools } from "../images/logo/chrome-devtools.svg"
import { ReactComponent as Wappalyzer } from "../images/logo/wappalyzer.svg"
import { ReactComponent as Pocket } from "../images/logo/pocket.svg"
import { ReactComponent as LastPass } from "../images/logo/lastpass.svg"
import { ReactComponent as Trello } from "../images/logo/trello.svg"
import { ReactComponent as Hyper } from "../images/logo/hyper.svg"
import { ReactComponent as Number02 } from "../images/02.svg"
import { BsBook, BsStar, BsGrid } from "react-icons/bs"
import { HiOutlineArrowRight } from "react-icons/hi"
import Helmet from "react-helmet"
import Seo from "../components/Seo"
import useSiteMetaData from "../components/useSiteMetaData"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function About({ data }) {
  const { siteUrl, logo } = useSiteMetaData()
  const currentUrl = `${siteUrl}/about`
  const title = `😄 About - Faiq Naufal`
  const description = `See the information of Faiq Naufal here. A web developer and web enthusiast who likes and passionate with modern web technologies 🔥.`
  const thumbnail = `https://res.cloudinary.com/faiqnaufal/image/upload/q_auto:eco/v1601090819/assets_faiqnaufal/note_taking.png`
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faiq Naufal",
    givenName: "Faiq",
    gender: "Male",
    image: `${siteUrl}${logo}`,
    url: siteUrl,
    jobTitle: "Web Developer",
    nationality: "Indonesia",
    description: "Web and Technology Enthusiast",
    sameAs: [
      "https://www.linkedin.com/in/faiqnaufal",
      "https://github.com/faiq-naufal",
    ],
  }

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
        schemaMarkup={schemaMarkup}
      />
      <Heading>
        <h1>About</h1>
      </Heading>
      <Section>
        <TopIllust Illustration={IllustAbout}>
          <h1>
            A place where <strong>the story begins</strong>
          </h1>
          <p>
            Hello, I am <strong>Faiq Naufal</strong>. Software developer web
            platform based on Jakarta, Indonesia focused on front-end side, and
            fullstack capable
          </p>
          <a
            href={data.pdf.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See Resume"
            onClick={e => {
              trackCustomEvent({
                category: "Link",
                action: "Click",
                label: "Resume Link",
              })
            }}
          >
            <span>See Resume</span> <HiOutlineArrowRight size={16} />
          </a>
        </TopIllust>
      </Section>
      <SectionTopBreak TextNumber={<Number02 />} />
      <Section>
        <AboutMe>
          <h2>Let’s know myself better</h2>
          <p>
            I am a fresh graduate from Binus University with a bachelor’s degree
            in Information System. I am from Jakarta, Indonesia. I have passion
            with technology especially web development area. My coding passion
            started in 2017. Since then, I have been improving and polishing my
            coding skill. I am currently focusing on the front-end development
            side. My focus on the front-end is intended to create a bridge that
            can help and integrate the flow of communication between UI/UX
            designers and back-end developers. My interests in front-end include
            website optimization areas such as SEO, accessibility, and
            performance. Continuous learning and into modern web stack and
            technologies are what got me until this point
          </p>
          <p>
            In my spare time, I usually enjoy reading articles about people’s
            opinions and experience with the technology they use, learn about
            newest trends or stack, or do self-learning with building portfolio
            projects. Besides that, I have hobbies that I usually do such as
            listening to music, watching series, and playing games. An
            instrumental geek who really likes instrumental and orchestra music
            too much
          </p>
        </AboutMe>
      </Section>
      <Section>
        <CoreValues>
          <h2>Core Values</h2>
          <ul className="list-grid">
            <li className="col-grid">
              <div className="wrapper-card">
                <div className="header">
                  <div>
                    <BsBook />
                  </div>
                  <div>
                    <h3>Continuous learner</h3>
                  </div>
                </div>
                <p>
                  I love learning something new. Technologies are developing and
                  improving every day. In order to keep up the latest trend, I
                  need to learn something new constantly. Not only technologies
                  but life will change as we grow older. We need to adjust with
                  the new people, culture, and habits
                </p>
              </div>
            </li>
            <li className="col-grid">
              <div className="wrapper-card">
                <div className="header">
                  <div>
                    <BsStar />
                  </div>
                  <div>
                    <h3>Respect others</h3>
                  </div>
                </div>
                <p>
                  I value people's time, and privacy. I think it is fine to give
                  people more space for their time, and their privacy because I
                  feel the same way when interacting with others
                </p>
              </div>
            </li>
            <li className="col-grid">
              <div className="wrapper-card">
                <div className="header">
                  <div>
                    <BsGrid />
                  </div>
                  <div>
                    <h3>Everyone is different</h3>
                  </div>
                </div>
                <p>
                  People are different, the way they live, work, or learn are
                  different. I cannot expect other people can do what I do with
                  the same effort or vice versa. Think about others this way
                  will improve my understanding with each other
                </p>
              </div>
            </li>
          </ul>
        </CoreValues>
      </Section>
      <Section>
        <BlackSection>
          <div className="skills">
            <h2>Essential Skills that May Help You</h2>
            <ul className="list-grid">
              <li className="col-grid">
                <h3>Front End Development</h3>
                <p>
                  I have a responsibility to tackle down front-end problem, give
                  solution, create innovation and ensure business features work
                  properly as the user's needs
                </p>
              </li>
              <li className="col-grid">
                <h3>Responsive Web Design</h3>
                <p>
                  I create a responsive website that automatically scales its
                  content and elements to match device's screen size
                </p>
              </li>
              <li className="col-grid">
                <h3>Lighthouse Audit and Optimization</h3>
                <p>
                  Currently, I am learning how to do audit with Google
                  Lighthouse to optimize website based on five metric
                  optimization categories
                </p>
              </li>
              <li className="col-grid">
                <h3>Progressive Web App (PWA)</h3>
                <p>
                  Currently, I am learning to convert websites into PWA using
                  PWA-ready tools provided by Gatsby, Create React App, and Next
                  JS to make the website more accessible, has offline support,
                  and installable on mobile and desktop
                </p>
              </li>
              <li className="col-grid">
                <h3>HTML</h3>
                <p>
                  I write meaningful and semantic way HTML document markup to
                  give the browsers and search engines more information about
                  the page and its content
                </p>
              </li>
              <li className="col-grid">
                <h3>CSS</h3>
                <p>
                  I write CSS, the most popular way to style and create great
                  looking web pages. It controls all design-related aspects of
                  the website
                </p>
              </li>
              <li className="col-grid">
                <h3>Javascript</h3>
                <p>
                  I build an interactive, functional website using Javascript as
                  my primary programming language
                </p>
              </li>
              <li className="col-grid">
                <h3>React JS</h3>
                <p>
                  A javascript UI library to compose and form reusable UI
                  components and making reactive websites based on dynamically
                  data change
                </p>
              </li>
              <li className="col-grid">
                <h3>Styled Components</h3>
                <p>
                  I use CSS in JS library Styled Components to compose UI
                  components inside Javascript file. Styled Components makes
                  styling component-based UI easier especially when using React
                  JS
                </p>
              </li>
              <li className="col-grid">
                <h3>Emotion JS</h3>
                <p>
                  I used to use styled-components in the past but after I tried
                  Emotion I prefer Emotion which is the same CSS in JS library
                  and has similar API with Styled Components but with less
                  bundle size to improve performance
                </p>
              </li>
              <li className="col-grid">
                <h3>Gatsby</h3>
                <p>
                  I use Gatsby as a static site generator for React JS and
                  utilize Gatsby powerful features such as GraphQL and Gatsby
                  plugins
                </p>
              </li>
              <li className="col-grid">
                <h3>Next JS</h3>
                <p>
                  I use Next JS as React JS framework for building isomorphic
                  website and utilize server-side rendering feature on single
                  page application (SPA)
                </p>
              </li>
              <li className="col-grid">
                <h3>jQuery</h3>
                <p>
                  I use jQuery as a Javascript library for handling HTML DOM
                  manipulation, event handling, and Ajax
                </p>
              </li>
              <li className="col-grid">
                <h3>Material-UI</h3>
                <p>
                  I use Material-UI component for React JS project. Material-UI
                  is component-based UI kit for React based on material design
                </p>
              </li>
              <li className="col-grid">
                <h3>Bootstrap</h3>
                <p>
                  I can use Bootstrap, the most popular CSS and JS framework for
                  front-end development
                </p>
              </li>
              <li className="col-grid">
                <h3>Git</h3>
                <p>
                  I can use git commands to control project workflow and
                  collaborate with team members
                </p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="productivity-tools">
            <h2>The Productivity Tools that I Use</h2>
            <ul className="list-grid">
              <li className="col-grid">
                <span>
                  <VsCode />
                </span>
                <h3>VS Code</h3>
                <p>
                  My personal recommendation code editor. It has a lot of
                  plugins and features to help my development and making life
                  easier
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Figma />
                </span>
                <h3>Figma</h3>
                <p>
                  After tried Figma for once, it’s hard moving to another design
                  tool
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Git />
                </span>
                <h3>Git Version Control</h3>
                <p>
                  I use Git as my collaboration tool and a tool to control my
                  project workflow
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Netlify />
                </span>
                <h3>Netlify</h3>
                <p>
                  The best static hosting and automation for me. Deployment with
                  Netlify cannot be easier than ever using continuous
                  integration with Git provider
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <ZohoMail />
                </span>
                <h3>Zoho mail</h3>
                <p>Current email hosting service for my domain.</p>
              </li>
              <li className="col-grid">
                <span>
                  <GoogleLighthouse />
                </span>
                <h3>Google Lighthouse</h3>
                <p>
                  Tool provided by Google to measure and audit websites based on
                  five area categories
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <GooglePageSpeedInsights />
                </span>
                <h3>Google Pagespeed Insights</h3>
                <p>
                  Tool provided by Google to measure and score website
                  performance
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <GoogleAnalytics />
                </span>
                <h3>Google Analytics</h3>
                <p>
                  Tool provided by Google to track users and visitors of the
                  websites
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Prettier />
                </span>
                <h3>Prettier Code Formatter</h3>
                <p>
                  Automatic code formatter to clean messy code. By using this I
                  can work properly without worrying about messy code
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <NPM />
                </span>
                <h3>NPM</h3>
                <p>
                  My usual package manager to organize all dependencies of the
                  project
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <ChromeDevTools />{" "}
                </span>
                <h3>Chrome DevTools</h3>
                <p>
                  The best debugging tool ever for developing a web application!
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Wappalyzer />
                </span>
                <h3>Wappalyzer </h3>
                <p>
                  Tool to identify web technologies from other websites. I
                  always use this to find out what technologies other websites
                  are built
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Pocket />
                </span>
                <h3>Pocket </h3>
                <p>
                  Recommended bookmark or read-it-later management tool with a
                  great user interface
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <LastPass />
                </span>
                <h3>LastPass </h3>
                <p>
                  All in one password manager that securely stores all your
                  credentials
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Trello />
                </span>
                <h3>Trello</h3>
                <p>
                  Universal task management tool for anything. I use trello for
                  planning, tracking, and brainstorming tasks and projects
                </p>
              </li>
              <li className="col-grid">
                <span>
                  <Hyper />
                </span>
                <h3>Hyper Terminal</h3>
                <p>
                  The terminal I'm using right now. A cross-platform terminal
                  with a customizable theme and has a lot of plugins
                </p>
              </li>
            </ul>
          </div>
        </BlackSection>
      </Section>
    </>
  )
}

export const query = graphql`
  {
    pdf: file(
      sourceInstanceName: { eq: "files" }
      relativePath: { eq: "Faiq_Naufal_Resume.pdf" }
    ) {
      publicURL
    }
  }
`

const AboutMe = styled.div`
  background-color: #fff;
  position: relative;
  margin-top: 128px;
  padding: 32px 28px;
  border-radius: 4px;
  box-shadow: 0px -2px 312px rgba(55, 53, 53, 0.05),
    0px -0.602941px 94.0589px rgba(55, 53, 53, 0.0325794),
    0px -0.250431px 39.0672px rgba(55, 53, 53, 0.025),
    0px -0.090576px 14.1299px rgba(55, 53, 53, 0.0174206);

  &::before {
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

  @media (min-width: 600px) {
    margin-left: 48px;
    padding: 40px;
  }

  h2 {
    color: #373535;
    font-size: 2rem;
    margin-bottom: 24px;

    @media (min-width: 960px) {
      font-size: 2.25rem;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.5rem;
    letter-spacing: 0.2px;
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`

const CoreValues = styled.div`
  text-align: center;
  h2 {
    color: #373535;
    font-size: 2rem;
    margin-bottom: 24px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 960px) {
      font-size: 2.25rem;
    }
  }

  h3 {
    font-size: 1.125rem;
    color: #373535;

    @media (min-width: 960px) {
      font-size: 1.25rem;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media (min-width: 960px) {
      grid-template-columns: repeat(auto-fit, minmax(320px, auto));
      justify-content: center;
    }

    li {
      .wrapper-card {
        text-align: left;
        width: 100%;
        height: 100%;
        padding: 24px;
        background-color: #fff;
        box-shadow: 0px 10px 20px rgba(55, 53, 53, 0.04),
          0px 2px 6px rgba(55, 53, 53, 0.04), 0px 0px 1px rgba(55, 53, 53, 0.04);

        color: #4a5568;
        border-radius: 4px;

        .header {
          display: grid;
          grid-template-columns: 40px 1fr;
          grid-column-gap: 12px;
          margin-bottom: 20px;

          div {
            display: flex;
            align-items: center;
            align-content: center;
          }

          div:first-of-type {
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: solid 1px #0e8162;
            color: #0e8162;
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`

const BlackSection = styled.div`
  background-color: #202020;
  border-radius: 4px;
  color: #fff;
  padding: 32px 28px;

  @media (min-width: 600px) {
    padding: 40px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 24px;

    @media (min-width: 960px) {
      font-size: 2.25rem;
    }
  }

  hr {
    margin: 80px 0;
    border-top: solid 1px #fff;
  }

  p {
    line-height: 1.5rem;
    letter-spacing: 0.2px;
  }

  .list-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px 28px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, auto));
      justify-content: center;
    }

    .col-grid {
      span {
        display: inline-block;
        border-radius: 50%;
        background-color: #fff;
        width: 48px;
        height: 48px;
        padding: 10px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;

        svg {
          max-width: 28px;
          max-height: 24px;
          width: 100%;
        }
      }

      h3 {
        display: block;
        margin: 12px 0;
        font-size: 1.125rem;

        @media (min-width: 960px) {
          font-size: 1.25rem;
        }
      }
    }
  }

  .skills {
    li.col-grid {
      position: relative;

      h3 {
        margin-top: 0;
      }

      &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: -20px;
        width: 8px;
        height: 8px;
        background-color: #fff;
      }
    }
  }
`
