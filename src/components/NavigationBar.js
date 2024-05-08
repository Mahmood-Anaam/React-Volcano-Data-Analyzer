// NavigationBar.js
import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom'; 

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Volcano App</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/volcano-list">Volcanos List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about-us">About Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
