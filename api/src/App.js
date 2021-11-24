import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Settings from './pages/Settings.js';
import Dashboard from './pages/Dashboard.js';
import Organisation from './pages/Organisation.js';
import Issues from './pages/Issues.js';
import Projects from './pages/Projects.js';
import SideBar from './components/SideBar.js';

const App = () => (
  <div className="app-container">
    <SideBar/>
    <Switch>

      <Route exact path="/" >
        <Dashboard/>
      </Route>

      <Route path="/organisation" >
        <Organisation/>
      </Route>

      <Route path="/projects" >
        <Projects/>
      </Route>

      <Route path="/issues" >
        <Issues/>
      </Route>

      <Route path="/settings" >
        <Settings/>
      </Route>

    </Switch>
  </div>
);

export default App;