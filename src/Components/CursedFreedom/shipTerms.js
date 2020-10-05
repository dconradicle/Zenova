import React from 'react';
import styled from 'styled-components';
import {Image, Placeholder} from 'cloudinary-react';
import { Container, Row, Col } from 'react-bootstrap';
import ship from './npc_ship_image/boat_terms.jpg';
import Sidebar from './sideBar'
import {
    HashLink as Link
  } from 'react-router-hash-link';

function ShiptTerms() {
    return(
        <Container>
            <Row>
                <Col>
                <Sidebar />
                </Col>
                <Col>
                    <a id="Ship" />
                    <StyledImage src={ship} loading="lazy" alt="error in loading the page" />
                    <dl>
                        <a id="Navigation" />
                        <h4>Navigation</h4>
                        <dt>Forward</dt>
                        <DD>when you, as a person are moving to the front end of he boat</DD>
                        <dt>Aft</dt>
                        <DD>When you as a person are moving to the end of the boat</DD>
                        <dt>Underway</dt>
                        <DD>When a boat is moving</DD>
                        <dt>Ahead</dt>
                        <DD>boat moving forward</DD>
                        <dt>Astern</dt>
                        <DD>Refers to a boat moving tin a backwards position (reverse)</DD>
                        <dt>Dingy</dt>
                        <DD>small open boat usually used to travel from the ship to the docks</DD>
                    </dl>
                </Col>
                <Col>
                <p>These terms assume the observer to be at the back of the boat looking towards the front</p>
                    <dl>
                        <a id="ShipLocations" />
                        <h4>Ship locations</h4>
                        <dt>Bow:</dt>
                        <DD>Refers to the front end of the boat</DD>
                        <dt>Port</dt>
                        <DD>the entire left side of the boat</DD>
                        <dt>Port Bow</dt>
                        <DD>Refers to the front left of a boat</DD>
                        <dt>Port Quarter</dt>
                        <DD>Refers to the front left of a boat</DD>
                        <dt>Starboard</dt>
                        <DD>The entire Right side of the boat</DD>
                        <dt>Starboard Bow</dt>
                        <DD>Refers to the front right of a boat</DD>
                        <dt>Starboard Quarter</dt>
                        <DD>Refers to the rear right of the boat</DD>
                        <dt>Stern</dt>
                        <DD>Refers to the rear of the boat</DD>
                        <dt>Amidships</dt>
                        <DD>The center part of the boating Vessel</DD>
                        <dt>Topside</dt>
                        <DD>Moving from lower deck to an upper deck</DD>
                        <dt>Quarter Deck</dt>
                        <DD>the upper platform at the back of the boat where the wheel are located</DD>
                        <dt>Forecastle</dt>
                        <DD>The raised upper platform at the front of the boat</DD>
                    </dl>
                </Col>
                </Row>
                <Row>
                    
            </Row>
        </Container>
    );
};

const StyledImage = styled(Image)`
display: block;
margin-left: auto;
width: 80vh;
height: 80vh;
align-content: center;
padding: 10px;
image-resolution: 300dpi;
`;
const DD = styled.dd`
    padding-left: 20px;
`;

const StyledCol = styled(Col)`
`;

export default ShiptTerms;