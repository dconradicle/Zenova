import React from 'react';
import styled from 'styled-components';
import World from '../Maps/worldMap.jpg';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import {Image, Placeholder, Transformation} from 'cloudinary-react';
import {
    HashLink as Link
  } from 'react-router-hash-link';

const defaultMap = () => {
    return (
      <>
    <Nav defaultActiveKey="worldMap" className="flex-column">
      <Nav.Link><StyledLink to='/maps#world'>World</StyledLink></Nav.Link>
      <Nav.Link><StyledLink to='/maps#NocturnVally'>Nocturn Valley</StyledLink></Nav.Link>
    </Nav>
    <Container fluid>
      <Row>
        <Col><a id="world"></a>
        <Image cloudName="dvqj6m2qs" publicId="worldMap" loading="lazy" dpr="auto" responsive width="auto"  crop="scale" responsiveUseBreakpoints="true" ><Transformation crop="scale" />  <Placeholder type="pixelate" /></Image>
        </Col>
      </Row>
    </Container>
    </>
    );
}

const StyledLink = styled(Link)`
  color: black
`;
export default defaultMap;