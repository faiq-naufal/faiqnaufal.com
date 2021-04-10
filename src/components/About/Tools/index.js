import React from "react"
import { ReactComponent as VsCode } from "../../../images/logo/visual-studio-code.svg"
import { ReactComponent as Git } from "../../../images/logo/git.svg"
import { ReactComponent as Figma } from "../../../images/logo/figma.svg"
import { ReactComponent as ZohoMail } from "../../../images/logo/zoho.svg"
import { ReactComponent as GoogleLighthouse } from "../../../images/logo/google-lighthouse.svg"
import { ReactComponent as GooglePageSpeedInsights } from "../../../images/logo/google-pagespeed-insights.svg"
import { ReactComponent as GoogleAnalytics } from "../../../images/logo/google-analytics.svg"
import { ReactComponent as Prettier } from "../../../images/logo/prettier.svg"
import { ReactComponent as Npm } from "../../../images/logo/npm.svg"
import { ReactComponent as ChromeDevTools } from "../../../images/logo/chrome-devtools.svg"
import { ReactComponent as Wappalyzer } from "../../../images/logo/wappalyzer.svg"
import { ReactComponent as Pocket } from "../../../images/logo/pocket.svg"
import { ReactComponent as LastPass } from "../../../images/logo/lastpass.svg"
import { ReactComponent as Trello } from "../../../images/logo/trello.svg"

const listTools = [
  {
    title: "VS Code",
    description:
      "My personal recommendation code editor. It has a lot of plugins and features to help my development and making life easier",
    icon: VsCode,
  },
  {
    title: "Figma",
    description:
      "After tried Figma for once, it’s hard moving to another design tool",
    icon: Figma,
  },
  {
    title: "Git Version Control",
    description:
      "I use Git as my collaboration tool and a tool to control my project workflow",
    icon: Git,
  },
  // {
  //   title: "Netlify",
  //   description:
  //     "The best static hosting and automation for me. Deployment with Netlify cannot be easier than ever using continuous integration with Git provider",
  //   icon: Netlify,
  // },
  {
    title: "Zoho mail",
    description: "Current email hosting service for my personal email domain.",
    icon: ZohoMail,
  },
  {
    title: "Google Lighthouse",
    description:
      "Tool provided by Google to measure and audit websites based on five area categories",
    icon: GoogleLighthouse,
  },
  {
    title: "Google Pagespeed Insights",
    description:
      "Tool provided by Google to measure and score website performance",
    icon: GooglePageSpeedInsights,
  },
  {
    title: "Google Analytics",
    description:
      "Tool provided by Google to track users and visitors of the websites",
    icon: GoogleAnalytics,
  },
  {
    title: "Prettier Code Formatter",
    description:
      "Automatic code formatter to clean messy code. By using this I can work properly without worrying about messy code",
    icon: Prettier,
  },
  {
    title: "NPM",
    description:
      "My usual package manager to organize all dependencies of the project",
    icon: Npm,
  },
  {
    title: "Chrome DevTools",
    description:
      "The best debugging tool ever for developing a web application!",
    icon: ChromeDevTools,
  },
  {
    title: "Wappalyzer",
    description:
      "Tool to identify web technologies from other websites. I always use this to find out what technologies other websites are built",
    icon: Wappalyzer,
  },
  {
    title: "Pocket",
    description:
      "Recommended bookmark or read-it-later management tool with a great user interface",
    icon: Pocket,
  },
  {
    title: "LastPass",
    description:
      "All in one password manager that securely stores all your credentials",
    icon: LastPass,
  },
  {
    title: "Trello",
    description:
      "Universal task management tool for anything. I use trello for planning, tracking, and brainstorming tasks and projects",
    icon: Trello,
  },
]

const Tools = () => (
  <div>
    <h2 className="font-bold text-3xl lg:text-4xl mb-6">
      The Productivity Tools that I Use
    </h2>
    <ul className="grid grid-cols-1 gap-y-10 gap-x-7 sm:grid-cols-[repeat(auto-fit,minmax(280px,auto))] sm:justify-center">
      {listTools.map((tool, index) => (
        <li key={`tool-${index}`}>
          <span className="rounded-full bg-white w-12 h-12 p-3 flex items-center content-center justify-center">
            {<tool.icon className="max-w-[28px] max-h-[24px] w-full" />}
          </span>
          <h3 className="font-bold block my-3 text-lg lg:text-xl">{tool.title}</h3>
          <p className="leading-6 tracking-[0.2px]">{tool.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Tools
