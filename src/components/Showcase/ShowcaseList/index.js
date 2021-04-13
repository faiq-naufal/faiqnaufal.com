import React from "react"
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub"
import { IoIosGlobe } from "@react-icons/all-files/io/IoIosGlobe"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Section from "@components/Commons/Section"

const ShowcaseList = ({ projectsData }) => (
  <Section>
    <div className="text-center">
      <h2 className="text-gray-700 font-bold text-3xl mb-6 text-center relative inline-block mx-auto lg:text-4xl">
        My Projects
      </h2>
      <ul className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:justify-center">
        {projectsData.map((project, index) => (
          <li key={`project-${index}`}>
            <div className="text-left w-full h-full p-5 rounded bg-white shadow-md">
              <div className="mb-3">
                <div className="mr-2 w-12 h-12 p-2 rounded-full shadow-lg">
                  <OutboundLink
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} Website`}
                    title="Go to website url"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={project.logo}
                      alt={project.name}
                    />
                  </OutboundLink>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl mb-1 font-bold">
                  <OutboundLink
                    className="text-gray-700 no-underline"
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} Website`}
                    title="Go to website url"
                  >
                    {project.name}
                  </OutboundLink>
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="flex">
                <div className="flex justify-end">
                  <div>
                    <OutboundLink
                      className="flex mr-2 text-xl text-gray-700"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} Github`}
                      title="Go to github url"
                    >
                      <GoMarkGithub />
                    </OutboundLink>
                  </div>
                  <div>
                    <OutboundLink
                      className="flex mr-2 text-xl text-gray-700"
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} Website`}
                      title="Go to website url"
                    >
                      <IoIosGlobe />
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export default ShowcaseList
