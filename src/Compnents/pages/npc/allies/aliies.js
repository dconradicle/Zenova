import React from 'react';
import styled from 'styled-components';
import allied from './alliesData';
import { Container, Row, Col } from 'react-bootstrap';
import {Image, Placeholder} from 'cloudinary-react';

function Allies() {
    return(
            allied.map((allied) =>
    <StyledContainer>
        <a id={allied.name}></a>
        <Row>
            <StyledCol xl={4}> <StyledP>{allied.name}</StyledP><StyledImage src={allied.picture} loading="lazy" alt="error in loading the page"><Placeholder type="vectorize"></Placeholder> </StyledImage></StyledCol>

            <StyledCol> 
                <SectionBackground> {allied.story}</SectionBackground> 
            </StyledCol>
        </Row>
    </StyledContainer>
    
    ));

}
const SectionName = styled.a`
    text-align: center;
    padding: 0;
    color: black;
`;
const SectionBackground = styled.div`
    text-align: left;
    padding: 0;
    white-space: pre-wrap;
`;

const StyledImage = styled(Image)`
    display: inline;
    position: relative;
    width: 300px;
    height: 300px;
    align-content: center;
    padding: 0;
    image-resolution: 300dpi;
`;
const StyledCol = styled(Col)`
    height: 350px;
    overflow-y: auto;
`
const StyledContainer = styled(Container)`
  border-top: 0px;
  border-style: solid;
  border-color: grey;
`;
const StyledP = styled.p`
    text-align: center;
    padding: 0;
    font-family: VoiceInMyHead-J0xa;
`

export default Allies;