import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import {Image, Placeholder} from 'cloudinary-react';

function Players(props) {
    return(
        props.map((props) =>
<StyledContainer>
    <a id={props.name} />
    <Row>
        <StyledCol xl={4}> <StyledP>{props.name}</StyledP><StyledImage src={props.image} loading="lazy" alt="error in loading the page"><Placeholder type="vectorize"></Placeholder>  </StyledImage></StyledCol>

        <StyledCol> 
            <SectionBackground> {props.backstory}</SectionBackground> 
        </StyledCol>
    </Row>
</StyledContainer>

));

}
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
padding-top: 8px;
`
const StyledContainer = styled(Container)`
border-top: 0px;
border-style: solid;
border-color: grey;
padding-top: 15px;
padding-bottom: 15px;
`;
const StyledP = styled.p`
text-align: center;
padding: 0;
font-family: VoiceInMyHead-J0xa;
`

export default Players;
