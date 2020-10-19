import React from 'react';
import CurseMenu from '../../global/cursedMenu';
import CursedCharacters from './cursedPlayers';
import charData from './charData';
import ShipTerms from './shipTerms';
import npcData from './npcData';
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
            exact path ="/characters"
            render={props => {
              return(
                <CursedCharacters data={charData} />
              );
            }} 
            />
            <Route 
            exact path ="/Nautical"
            render={props => {
              return(
                <ShipTerms />
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
          */}
            <Route 
            exact path ="/npc"
            render={props => {
              return(
                <CursedCharacters data={npcData} />
              );
            }} 
        />
          </Switch>
        </Route>
      </Router>
    );
  }

export default CursedFree;