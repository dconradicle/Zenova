import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import CursedData from './menuData';
import {
  HashLink as Link
} from 'react-router-hash-link';

const TopMenu = () => {
  const data = CursedData.map((CursedData) =>
  <>
  <NavDropdown key={CursedData.id.toString()} title={CursedData.name} id="basic-nav-dropdown">
    {CursedData.characters.map((char) =>
     <NavDropdown.Item><StyledLink to={"character#"+char}>{char}</StyledLink></NavDropdown.Item>
    )}
  </NavDropdown>
</>
);
  return(
    <StyledNavBar expand="lg" sticky="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {data}
      </Nav>
    </Navbar.Collapse>
  </StyledNavBar>
      );
    }
const StyledNavBar = styled(Navbar)`
  background: linear-gradient(to right, rgba(255,255,255,1), #0f3443);
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-style: solid;
`;

const StyledLink = styled(Link)`
  color: black
`;

const StyledZenova = styled(Link)`
  color: black;
  font-family: HeadCase-ljwV;
`;

export default TopMenu //PlayerHome
