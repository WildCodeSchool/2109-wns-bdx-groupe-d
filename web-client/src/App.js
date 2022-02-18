import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Settings from './pages/Settings.js';
import Dashboard from './pages/Dashboard.js';
import Organization from './pages/Organization.js';
import Issues from './pages/Issues.js';
import Projects from './pages/Projects.js';
import TopBar from './components/TopBar.js';

import './css/tailwind.css';

const App = () => (
  <div className="app-container">
    <TopBar/>
    <Switch>

      <Route exact path="/" >
        <Dashboard/>
      </Route>

      <Route path="/organization" >
        <Organization/>
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