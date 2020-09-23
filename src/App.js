import React from 'react';
import styled from 'styled-components';
import Story from './Compnents/pages/story';
import Home from './Compnents/pages/home';
import './App.css';
import TopMenu from './Compnents/playermenu/playerMenu';
import Header from './Compnents/header/header';
import Characters from './Compnents/pages/characters';
import Maps from './Compnents/pages/maps';
import Npc from './Compnents/pages/npc/allies/aliies';
import Z from './Compnents/pages/npc/gods/gods';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


function App() {
  return (
    <StyledDiv>
    <Header />
    <Router>
    <TopMenu />
      <Route>
        <Switch>
          <Route 
          exact path ="/home"
          render={props => {
            return(
              <Home />
            );
          }}
            />
            <Route
            exact path ="/">
              <Redirect to="/home" />
            </Route>
            <Route 
          exact path ="/story"
          render={props => {
            return(
              <Story />
            );
          }} 
          />
            <Route 
          exact path ="/characters"
          render={props => {
            return(
              <Characters />
            );
          }} 
          />
           <Route 
          exact path ="/Maps"
          render={props => {
            return(
              <Maps />
            );
          }} 
          />
          <Route 
          exact path ="/npc"
          render={props => {
            return(
              <Npc />
            );
          }} 
          />
          <Route 
          exact path ="/z"
          render={props => {
            return(
              <Z />
            );
          }} 
          />
        </Switch>
      </Route>
    </Router>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    background: linear-gradient(to right, rgba(255,255,255,1), #0f3443);
    min-height: 100vh;
`;

export default App;
