import React from "react"
import Container from "@components/Commons/Container"

const AboutTemplate: React.FC = () => {
  return (
    <>
      <section className="mt-20 text-center">
        <Container>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl sm:leading-snug lg:leading-tight tracking-wide-2 font-fraunces-700">
            Hello<span className="text-custom-primary-green">.</span>
          </h1>
        </Container>
      </section>
      <section className="mt-20 bg-custom-gray-3--light py-20">
        <Container>
          <div className="text-lg lg:text-xl leading-normal text-justify">
            <p className="mb-10">
              Born at Indonesia, I have been into technology since I was a kid
              and now surviving on the journey of life. It started at 2017 when
              my passion grew towards programming and app development. My work
              usually related with front-end development area because I have an
              interest in building beautiful, fast, fully accessible and modern
              looking product.
            </p>
            <p className="mb-10">
              Being a developer taught me a lot of things. I realized the need
              of continuous learning even after I graduated from university.
              Also, technical skills are not everything at work, soft skills are
              also important. Having a good connection and friends that support
              me are really important to make me stay inspired.
            </p>
            <p className="mb-10">
              Previously, I took two internships at different companies. The
              earlier one was at furniture company called{" "}
              <a
                className="underline font-inter-600 text-custom-primary-green hover:opacity-80"
                href="https://fabelio.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fabelio"
              >
                Fabelio
              </a>{" "}
              as a software developer where I was responsible to maintain and
              improving Fabelio’s website performance. Before that, I was front
              end developer at IT consultant company called{" "}
              <a
                className="underline font-inter-600 text-custom-primary-green hover:opacity-80"
                href="https://www.logique.co.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Logique"
              >
                Logique
              </a>{" "}
              building and creating user interface for Logique’s website and
              clients.
            </p>
            <p>
              Currently, I’m a JavaScript developer focusing on React.js stack
              for building modern websites and apps.
            </p>
          </div>
        </Container>
      </section>
      <section className="mt-20">
        <Container>
          <h2 className="text-center font-fraunces-700 text-6xl">
            Work Experiences
          </h2>
          <hr className="my-10 border-[#bababa]" />
          <article>
            <div>
              <p>Mar 2021 – Jun 2021</p>
              <h3>Software Developer Intern</h3>
              <h4>Fabelio</h4>
            </div>
            <div>
              <p className="mb-5">
                Since 2015, Fabelio has deliver variety of products and services
                to customer through online (website) and offline (showroom)
                aprroaches.
              </p>
              <p>I joined Fabelio at March 2021.</p>
            </div>
          </article>
          <hr className="my-10 border-[#bababa]" />
          <article>
            <div>
              <p>Feb 2019 – Feb 2020</p>
              <h3>Front-End Developer Intern</h3>
              <h4>Logique</h4>
            </div>
            <div>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi totam blanditiis temporibus. Numquam accusantium autem
                similique ut temporibus, inventore voluptate quidem nobis labore
                doloremque molestiae officia explicabo ipsa porro sapiente!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis magni, enim temporibus ad deserunt molestias
                voluptatibus illum placeat aliquid provident vel nam sequi ullam
                dolore consectetur quod deleniti quibusdam at.
              </p>
            </div>
          </article>
        </Container>
      </section>
      <section className="mt-20">
        <Container>
          <h2>Activities I usually do</h2>
          <div>
            <article>
              <h3>Building a website / web application</h3>
              <p></p>
            </article>
            <h3>Making a portfolio about things</h3>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutTemplate

// import React from "react"
// import LazyLoad from "react-lazyload"
// import Section from "@components/Commons/Section/Section"
// import SectionTopBreak from "@components/Commons/Section/SectionTopBreak"
// import Heading from "@components/Commons/Heading/Heading"
// import HeadingOne from "@components/Commons/Heading/HeadingOne"
// import TopIllust from "@components/Commons/TopIllust"
// import { ReactComponent as IllustAbout } from "@images/note_taking.svg"
// import { ReactComponent as Number02 } from "@images/02.svg"
// import { HiOutlineArrowRight } from "@react-icons/all-files/hi/HiOutlineArrowRight"
// import Summary from "./Summary"
// import CoreValues from "./CoreValues"
// import Skills from "./Skills"
// import Tools from "./Tools"

// const AboutTemplate = () => {
//   return (
//     <>
//       <Heading>
//         <HeadingOne>About</HeadingOne>
//       </Heading>
//       <Section>
//         <TopIllust Illustration={IllustAbout}>
//           <h1 className="font-bold text-gray-700 text-3xl leading-9 lg:text-4xl lg:leading-11">
//             A place where{" "}
//             <strong className="text-primaryGreen font-bold">
//               the story begins
//             </strong>
//           </h1>
//           <p className="text-gray-600 text-base lg:text-lg mt-5">
//             Hello, I am{" "}
//             <strong className="text-primaryGreen font-bold">Faiq Naufal</strong>
//             . Software developer web platform based on Jakarta, Indonesia
//             focused on front-end side, and fullstack capable
//           </p>
//           <a
//             className="bg-none no-underline text-sm font-semibold text-center mt-5 mx-auto inline-flex items-center justify-center content-center rounded py-2 px-6 sm:min-w-[180px] border border-primaryGreen text-primaryGreen hover:bg-primaryGreen hover:text-white"
//             href="/assets/Faiq_Naufal_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="See Resume"
//           >
//             <span className="mr-1">See Resume</span>{" "}
//             <HiOutlineArrowRight size={16} />
//           </a>
//         </TopIllust>
//       </Section>
//       <SectionTopBreak TextNumber={() => <Number02 />} />
//       <LazyLoad height={400} once>
//         <Summary />
//       </LazyLoad>
//       <LazyLoad height={300} once>
//         <CoreValues />
//       </LazyLoad>
//       <LazyLoad height={400} once>
//         <Section>
//           <div className="bg-gray-800 rounded text-white py-8 px-7 sm:p-10">
//             <Skills />
//             <hr className="my-20 border-t-2 border-white" />
//             <Tools />
//           </div>
//         </Section>
//       </LazyLoad>
//     </>
//   )
// }

// export default AboutTemplate
