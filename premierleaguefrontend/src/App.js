import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import PlayerDetails from './components/Players/PlayerDetails';
import PlayerList from './components/Players/PlayerList';
import SearchBar from './components/Search/SearchBar';
import TeamDetails from './components/Teams/TeamDetails';
import TeamList from './components/Teams/TeamList';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navigation/>
        <Switch>
          <Route path = "/players" exact component = {PlayerList} />
          <Route path = "/players/:id" exact component = {PlayerDetails} />
          <Route path = "/teams" exact component = {TeamList} />
          <Route path = "/teams/:id" exact component = {TeamDetails} />
          <Route path = "/search" exact component = {SearchBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
