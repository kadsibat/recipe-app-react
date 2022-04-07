
import React, { useState } from 'react'
import { Menu, MenuLink, Nav,Hamburger, Logo} from "./NavbarStyles"
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  const [isopen, setIsOpen] = useState(false)
  return (
    <Nav >
      <Logo onClick={()=>setIsOpen(!isopen)} to="/">
        <i>{"<Sibel>"}</i>
        <span>recipe</span>
        </Logo>
        <Hamburger onClick={()=>setIsOpen(!isopen)}>
          {/* <span/>
          <span/>
          <span/> */}
          <GiHamburgerMenu/>
        </Hamburger>
      <Menu osman={!isopen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/githup">Githup</MenuLink>
        <MenuLink to="/">Logout</MenuLink>
        
      </Menu>
      {/* <div className="header">Recipe App</div>
      <div className="pages">
        <link>about</link>
        <link>about</link>
      </div> */}
    </Nav>
  )
}

export default Navbar