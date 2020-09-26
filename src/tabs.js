import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import Noc from './Nocturn/nocturn';
import Home from './home';

const ZenTabs = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Home" title="Home" href="home">
                <Home />
            </Tab>
            <Tab eventKey="Nocturn" title="Nocturn">
                <Noc />
            </Tab>
            <Tab eventKey="Cursed" title="CursedFreedom">
                hello new campain
            </Tab>
        </Tabs>
    );
};

export default ZenTabs;
