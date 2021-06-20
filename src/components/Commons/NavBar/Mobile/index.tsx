import React from "react"
import { RiHome3Line } from "@react-icons/all-files/ri/RiHome3Line"
import { RiHome3Fill } from "@react-icons/all-files/ri/RiHome3Fill"
import { RiUser4Line } from "@react-icons/all-files/ri/RiUser4Line"
import { RiUser4Fill } from "@react-icons/all-files/ri/RiUser4Fill"
import { RiStarLine } from "@react-icons/all-files/ri/RiStarLine"
import { RiStarFill } from "@react-icons/all-files/ri/RiStarFill"
// import { BsFolder } from "@react-icons/all-files/bs/BsFolder"
import { RiFileList3Line } from "@react-icons/all-files/ri/RiFileList3Line"
import { RiFileList3Fill } from "@react-icons/all-files/ri/RiFileList3Fill"
import NavLink from "@components/Commons/NavBar/Mobile/NavLink"

const NavBarMobile: React.FC = () => {
  return (
    <div className="navbar-mobile h-[68px] w-full">
      <div className="z-10 w-full fixed bottom-0 left-0 shadow-custom-shadow-2--light bg-custom-white-1--light">
        <div className="flex">
          <div className="flex-1">
            <NavLink
              IconComponent={RiHome3Line}
              IconComponentActive={RiHome3Fill}
              text="Home"
              to="/"
            />
          </div>
          <div className="flex-1">
            <NavLink
              IconComponent={RiUser4Line}
              IconComponentActive={RiUser4Fill}
              partiallyActive={true}
              text="About"
              to="/about"
            />
          </div>
          <div className="flex-1">
            <NavLink
              IconComponent={RiStarLine}
              IconComponentActive={RiStarFill}
              partiallyActive={true}
              text="Showcase"
              to="/showcase"
            />
          </div>
          <div className="flex-1">
            <NavLink
              IconComponent={RiFileList3Line}
              IconComponentActive={RiFileList3Fill}
              partiallyActive={true}
              text="Blog"
              to="/blog"
            />
          </div>
          {/* <div className="flex-1">
            <a
              className="text-sm font-inter-500 no-underline flex flex-col items-center pt-2 text-custom-gray-1--light relative hover:text-custom-primary-green"
              href="/assets/Faiq_Naufal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See Resume"
            >
              <div className="block lg:hidden text-xl">
                <BsFolder className="regular-icon" />
              </div>
              <span className="maxlg:my-1">Resume</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NavBarMobile
