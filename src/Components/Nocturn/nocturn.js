import React from 'react';
import Story from './Compnents/pages/story';
import TopMenu from './Compnents/playermenu/playerMenu';
import Characters from './Compnents/pages/characters';
import Maps from './Compnents/pages/maps';
import Npc from './Compnents/pages/npc/allies/aliies';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function Noc() {
    return (
      <Router>
      <TopMenu />
        <Route>
          <Switch>
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
          </Switch>
        </Route>
      </Router>
    );
  }
  
  export default Noc;