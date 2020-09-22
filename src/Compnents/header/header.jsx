import React from 'react';
import styled from 'styled-components';

function Header(){
    return (
        <StyledHeader>Zenova</StyledHeader>
    );
}
const StyledHeader = styled.div`
    text-align: center;
    font-size: 3em;
    font-family: HeadCase-ljwV;
    height: 95px;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-style: solid;
`;

export default Header;