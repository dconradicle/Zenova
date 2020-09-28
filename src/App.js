import React from 'react';
import './App.css';
import Tab from './global/tabs';
import Header from './header/header';
import styled from 'styled-components';



function App() {
  return (
    <StyledDiv>
      <Header />
      <Tab />
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
      background: linear-gradient(to right, rgba(255,255,255,1), #0f3443);
      min-height: 100vh;
  `;

export default App;
