import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Sidebar(){
    return (
    <Nav activeKey="/home" className="flex-column">
        <Nav.Link href="/Nautical Terms#ShipLocations">ShipLocations</Nav.Link>
        <Nav.Link href="/Nautical Terms#Navigation">Navigation</Nav.Link>
    </Nav>
    );
}
export default Sidebar;