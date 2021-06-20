import React from "react"
import Container from "@components/Commons/Container"
import NavbarDesktop from "@components/Commons/NavBar/Desktop"
import { Link } from "gatsby"

const Header: React.FC = () => {
  return (
    <div className="h-20">
      <header className="fixed top-0 left-0 h-20 w-full">
        <div className="bg-custom-black-1--light h-4 w-full" />
        <div className="h-16 py-3 border-b border-[#dadada] bg-white bg-opacity-75  backdrop-saturate-150 backdrop-blur-lg">
          <Container>
            <div className="flex flex-1 justify-between items-center w-full">
              <div className="font-fraunces-600 text-3xl">
                <Link to="/">
                  faiq<span className="text-custom-primary-green">.</span>
                </Link>
              </div>
              <NavbarDesktop />
              {/* toggle theme */}
              <div>Toogle Dark</div>
            </div>
          </Container>
        </div>
      </header>
    </div>
  )
}

export default Header
