import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import {
  HashLink as Link
} from 'react-router-hash-link';

const TopMenu = () => {
    return (
      <StyledNavBar expand="lg" sticky="top">
  {/*<Navbar.Brand><StyledZenova to='home'>Zenova</StyledZenova></Navbar.Brand>*/}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/*<Nav.Link><StyledLink to='/story'>Story</StyledLink></Nav.Link>*/}
      <NavDropdown title="Characters" id="basic-nav-dropdown">
        <NavDropdown.Item><StyledLink to="characters#Ander Stormwind">Ander Stormwind</StyledLink></NavDropdown.Item>
        <NavDropdown.Item><StyledLink to="characters#Leon Feathertorn">Leon Feathertorn</StyledLink></NavDropdown.Item>
        <NavDropdown.Item><StyledLink to="characters#Kaius Sicarius">Kaius Sicarius</StyledLink></NavDropdown.Item>
        <NavDropdown.Item><StyledLink to="characters#Flacara 'Thicktail' Fierar">Flacără "Thicktail" Fierar</StyledLink></NavDropdown.Item>
      </NavDropdown>
      {/*<Nav.Link><StyledLink to='/history'>History</StyledLink></Nav.Link>*/}
      <Nav.Link><StyledLink to='/npc'>NPC</StyledLink></Nav.Link>
      {/*<NavDropdown title="Factions" id="basic-nav-dropdown">
        <NavDropdown.Item>Hu Port</NavDropdown.Item>
        <NavDropdown.Item>Angels Of Hell</NavDropdown.Item>
        <NavDropdown.Item>Sevova</NavDropdown.Item>
    </NavDropdown>
      <NavDropdown title="Gods" id="basic-nav-dropdown">
        <NavDropdown.Item >Theosius Feywild</NavDropdown.Item>
        <NavDropdown.Item >Nocturn Shadowfell</NavDropdown.Item>
        <NavDropdown.Item >Eris Aqua</NavDropdown.Item>
        <NavDropdown.Item >Mars Hell</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Maps" id="basic-nav-dropdown">
        <NavDropdown.Item ><StyledLink to="maps#World">World</StyledLink></NavDropdown.Item>
        <NavDropdown.Item >Nocturn</NavDropdown.Item>
        <NavDropdown.Item >HaliDom</NavDropdown.Item>
      </NavDropdown>*/}
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
  color: black;
`;
const StyledZenova = styled(Link)`
  color: black;
  font-family: HeadCase-ljwV;
`;
  export default TopMenu //PlayerHome