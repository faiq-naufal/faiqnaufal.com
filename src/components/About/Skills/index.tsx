import React from "react"

const listSkills = [
  {
    title: "Front End Development",
    description:
      "I have a responsibility to tackle down front-end problem, give solution, create innovation and ensure business features work properly as the user's needs",
  },
  {
    title: "Responsive Web Design",
    description:
      "I create a responsive website that automatically scales its content and elements to match device's screen size",
  },
  {
    title: "Lighthouse Audit and Optimization",
    description:
      "Currently, I am learning how to do audit with Google Lighthouse to optimize website based on five metric optimization categories",
  },
  {
    title: "Progressive Web App (PWA)",
    description:
      "Currently, I am learning to convert websites into PWA using PWA-ready tools provided by Gatsby, Create React App, and Next JS to make the website more accessible, has offline support, and installable on mobile and desktop",
  },
  {
    title: "HTML",
    description:
      "I write meaningful and semantic way HTML document markup to give the browsers and search engines more information about the page and its content",
  },
  {
    title: "CSS",
    description:
      "I write CSS, the most popular way to style and create great looking web pages. It controls all design-related aspects of the website",
  },
  {
    title: "Javascript",
    description:
      "I build an interactive, functional website using Javascript as my primary programming language",
  },
  {
    title: "React JS",
    description:
      "A javascript UI library to compose and form reusable UI components and making reactive websites based on dynamically data change",
  },
  {
    title: "Styled Components",
    description:
      "I use CSS in JS library Styled Components to compose UI components inside Javascript file. Styled Components makes styling component-based UI easier especially when using React JS",
  },
  {
    title: "Emotion JS",
    description:
      "I used to use styled-components in the past but after I tried Emotion I prefer Emotion which is the same CSS in JS library and has similar API with Styled Components but with less bundle size to improve performance",
  },
  {
    title: "Gatsby",
    description:
      "I use Gatsby as a static site generator for React JS and utilize Gatsby powerful features such as GraphQL and Gatsby plugins",
  },
  {
    title: "Next JS",
    description:
      "I use Next JS as React JS framework for building isomorphic website and utilize server-side rendering feature on single page application (SPA)",
  },
  {
    title: "Material-UI",
    description:
      "I use Material-UI component for React JS project. Material-UI is component-based UI kit for React based on material design",
  },
  {
    title: "Git",
    description:
      "I can use git commands to control project workflow and collaborate with team members",
  },
]

const Skills = () => (
  <div>
    <h2 className="font-bold text-3xl lg:text-4xl mb-6">
      Essential Skills that May Help You
    </h2>
    <ul className="grid grid-cols-1 gap-y-10 gap-x-7 sm:grid-cols-[repeat(auto-fit,minmax(280px,auto))] sm:justify-center">
      {listSkills.map((skill, index) => (
        <li key={`skill-${index}`} className="relative">
          <span className="absolute top-2.5 -left-5 w-2 h-2 bg-white" />
          <h3 className="font-bold block mb-3 text-lg lg:text-xl">
            {skill.title}
          </h3>
          <p className="leading-6 tracking-[0.2px]">{skill.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Skills
