import React from 'react';
import styled from 'styled-components';

const _Home = () => ( //import body from api
    <StyledDiv>
    <Styledh1>Last time on Zenova</Styledh1>
    <p>hello last session</p>
    </StyledDiv>
); 

const StyledDiv = styled.div`
    text-align: center;
`
const Styledh1 =styled.h1`
 background: #34e89e;
`
export default _Home;