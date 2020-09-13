import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"
import { VscNote } from "react-icons/vsc"

export default function Sidebar({ children, ...others }) {
  const isActiveLink = ({ isCurrent }) => {
    return isCurrent ? { className: "active" } : {}
  }

  const isPartiallyActiveLink = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "active" } : {}
  }

  return (
    <StyledSidebar {...others}>
      <Link to="/" getProps={isActiveLink}>
        <AiOutlineHome size={24} /> <span>Home</span>
      </Link>
      <Link to="/about" getProps={isPartiallyActiveLink}>
        <AiOutlineInfoCircle size={24} /> <span>About</span>
      </Link>
      <Link to="/showcase" getProps={isPartiallyActiveLink}>
        <BsBriefcase size={24} /> <span>Showcase</span>
      </Link>
      <Link to="/contact" getProps={isPartiallyActiveLink}>
        <AiOutlineMail size={24} /> <span>Contact</span>
      </Link>
      <Link to="/note" getProps={isPartiallyActiveLink}>
        <VscNote size={24} /> <span>Note</span>
      </Link>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.nav`
  z-index: 10;

  a {
    font-size: 0.625rem;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    &:hover,
    &.active {
      font-weight: 600;

      color: #0e8162;

      span {
        color: #000;
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
    padding-top: 32px;

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
`
