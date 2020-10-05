import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import Noc from '../Components/Nocturn/nocturn';
import Home from './home';
import CursedFreedom from '../Components/CursedFreedom/cursedFreedom';
import {
    HashLink as Link
  } from 'react-router-hash-link';

const ZenTabs = () => {
    return (
        <StyledTabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab eventKey="Home" title="Zenova" >
                 <Home />
            </Tab>
            <Tab eventKey="Nocturn" title="Nocturn">
                <Noc />
            </Tab>
            <Tab eventKey="Cursed" title="CursedFreedom"><CursedFreedom /></Tab>
        </StyledTabs>
    );
};

const StyledTabs = styled(Tabs)`
  color: black;
`;

export default ZenTabs;
