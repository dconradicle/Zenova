import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
    HashLink as Link
  } from 'react-router-hash-link';

function SideMenu(props) {
    console.log(JSON.stringify(props));
    return (
            <Container>
                <Row>
                    <Col>
                        <Nav className="flex-column">
                            <Nav.Item><Link to={"#" + props.name}>{props.name}</Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
    );
};

export default SideMenu;