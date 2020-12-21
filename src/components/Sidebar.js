import React from "react"
import styled from "@emotion/styled"
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome"
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { BsBriefcase } from "@react-icons/all-files/bs/BsBriefcase"
import { VscNote } from "@react-icons/all-files/vsc/VscNote"
import NavLink from "./NavLink"

export default function Sidebar({ children, ...others }) {
  return (
    <StyledSidebar {...others}>
      <div className="wrapper-bar">
        <NavLink to="/">
          <AiOutlineHome size={24} /> <span>Home</span>
        </NavLink>
        <NavLink to="/about" partiallyActive={true}>
          <AiOutlineInfoCircle size={24} /> <span>About</span>
        </NavLink>
        <NavLink to="/showcase" partiallyActive={true}>
          <BsBriefcase size={24} /> <span>Showcase</span>
        </NavLink>
        <NavLink to="/contact" partiallyActive={true}>
          <AiOutlineMail size={24} /> <span>Contact</span>
        </NavLink>
        <NavLink to="/note" partiallyActive={true}>
          <VscNote size={24} /> <span>Note</span>
        </NavLink>
      </div>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.nav`
  @media (max-width: 959px) {
    z-index: 10;
  }

  .wrapper-bar {
    a {
      font-size: 0.625rem;
      font-weight: 600;
      text-decoration: none;
      position: relative;
      color: rgba(74, 85, 104, 0.85);

      &:hover,
      &.active {
        font-weight: 600;

        color: #0e8162;

        span {
          color: #373535;
        }
      }
    }

    @media (max-width: 959px) {
      display: flex;
      flex-direction: row;
      position: fixed;
      bottom: 0;
      left: 0;
      height: 56px;
      width: 100%;
      box-shadow: 0 -2px 4px 0 rgba(108, 114, 124, 0.16);
      background-color: #fff;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: nowrap;

      a {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;

        span {
          display: block;
          margin-top: 8px;
        }
      }
    }

    @media (min-width: 960px) {
      padding-top: 24px;
      position: fixed;
      top: 80px;

      a {
        font-size: 0.875rem;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        span {
          display: inline-block;
          margin-left: 8px;
        }

        &.active {
          &::before {
            content: "";
            position: absolute;
            left: -12px;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: calc(100% + 4px);
            background-color: #0e8162;
          }
        }
      }
    }
  }
`
