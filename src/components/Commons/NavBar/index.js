import React from "react"
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome"
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { BsBriefcase } from "@react-icons/all-files/bs/BsBriefcase"
import { VscNote } from "@react-icons/all-files/vsc/VscNote"
import NavLink from "./NavLink"

export default function Navbar({ children, ...others }) {
  return (
    <div className="z-10 lg:z-0" {...others}>
      <div className="fixed maxlg:flex maxlg:flex-row maxlg:bottom-0 maxlg:left-0 maxlg:h-14 maxlg:w-full maxlg:shadow-shadowNavBar maxlg:bg-white maxlg:justify-between maxlg:items-start maxlg:flex-nowrap lg:pt-6 lg:top-20">
        <NavLink to="/">
          <AiOutlineHome size={24} />{" "}
          <span className="maxlg:block maxlg:mt-2 group-hover:text-gray-700 lg:inline-block lg:ml-2">
            Home
          </span>
        </NavLink>
        <NavLink to="/about" partiallyActive={true}>
          <AiOutlineInfoCircle size={24} />
          <span className="maxlg:block maxlg:mt-2 group-hover:text-gray-700 lg:inline-block lg:ml-2">
            About
          </span>
        </NavLink>
        <NavLink to="/showcase" partiallyActive={true}>
          <BsBriefcase size={24} />
          <span className="maxlg:block maxlg:mt-2 group-hover:text-gray-700 lg:inline-block lg:ml-2">
            Showcase
          </span>
        </NavLink>
        <NavLink to="/contact" partiallyActive={true}>
          <AiOutlineMail size={24} />
          <span className="maxlg:block maxlg:mt-2 group-hover:text-gray-700 lg:inline-block lg:ml-2">
            Contact
          </span>
        </NavLink>
        <NavLink to="/note" partiallyActive={true}>
          <VscNote size={24} />
          <span className="maxlg:block maxlg:mt-2 group-hover:text-gray-700 lg:inline-block lg:ml-2">
            Note
          </span>
        </NavLink>
      </div>
    </div>
  )
}
