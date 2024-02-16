/* eslint-disable no-unused-vars */
import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'

const NavbarComponent = () => {
  return (
    <div>
      <Navbar
        className=""
        color="dark"
        dark
      >
        <NavbarBrand href="/" data-testid="app-title">
          Tokolontong
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavbarComponent