
import React from 'react'
import {Header, Menu, MenuLink, Nav} from "./NavbarStyles"

const Navbar = () => {
  return (
    <Nav >
      <Header>Recipe App</Header>
      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        
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