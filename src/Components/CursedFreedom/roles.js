import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

function Roles(props) {
    return(
            <Container>
                {props.data.map((data) =>
                <PadRow>
                    <Col>
                    <a id={data.name}></a>
                    <Title>{data.name}</Title>
                    <Prerequisite>{data.Prerequisite}</Prerequisite>
                    {data.discription}</Col>
                    {data.abilities.map((abilities) =>
                    <>
                        <Col><Title>{abilities.ability}</Title>
                        <br />
                        {abilities.definition}</Col>
                    </>
                    )}
                </PadRow>
                )}
            </Container>
    );
}

const Title = styled.p`
    font-weight: bold;
`;
const Prerequisite = styled.p`
    font-style: italic;
`;

const PadRow = styled(Row)`
    padding: 10px;
    border-color: green;
    border-style: groove;
    border-top: 0px;
`;

export default Roles;