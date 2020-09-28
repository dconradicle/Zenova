import React from 'react';
import CurseMenu from '../CursedFreedom/playermenu/cursedMenu';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

function CursedFree() {
    return (
      <Router>
      <CurseMenu />
        <Route>
          <Switch>
           {/*   <Route 
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
        /> */}
          </Switch>
        </Route>
      </Router>
    );
  }

export default CursedFree;