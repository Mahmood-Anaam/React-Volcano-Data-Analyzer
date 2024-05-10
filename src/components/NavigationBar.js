// NavigationBar.js
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = async (event) => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Navbar color="dark" dark expand="md" style={{height:'8vh'}}>
      <NavbarBrand tag={Link} to="/">
        Volcano App
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/volcano-list">
              Volcanos List
            </NavLink>
          </NavItem>

          {localStorage.getItem("token") == null && (
            <>
              <NavItem>
                <NavLink tag={Link} to="/register">
                  Register
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/login">
                  Login
                </NavLink>
              </NavItem>
            </>
          )}

          {localStorage.getItem("token") && (
            <NavItem>
              <NavLink tag={Link} to="/" onClick={handleLogout}>
                Logout
              </NavLink>
            </NavItem>
          )}

          <NavItem>
            <NavLink tag={Link} to="/about-us">
              About Us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
