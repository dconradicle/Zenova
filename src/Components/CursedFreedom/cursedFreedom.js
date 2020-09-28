import React from 'react';
import CurseMenu from '../../global/cursedMenu';
import CursedCharacters from './cursedPlayers';
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
          />*/}
              <Route 
            exact path ="/cursed"
            render={props => {
              return(
                <CursedCharacters />
              );
            }} 
            />{/*
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