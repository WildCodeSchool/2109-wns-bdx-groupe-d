import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/components/SideBar.css';
import issues from '../images/library.svg';
import settings from '../images/settings.svg';
import project from '../images/projects.svg';
import dashboard from '../images/dashboard.svg';
import organization from '../images/group.svg'

const SideBar = () => (
  <div className="sidebar-container">
    <div className="sidebar-menu-container">

      <div className="logo-container">
        LOGO
      </div>

      <div className="sidebar-menu-icon">
        <NavLink to="/">
          <img src={dashboard} alt="logo en attendant" title="Accéder à l'accueil" />
        </NavLink>
      </div>

      <div className="sidebar-menu-icon">
        <NavLink to="/organization">
          <img src={organization} alt="logo en attendant" title="Accéder aux projets" />
        </NavLink>
      </div>

      <div className="sidebar-menu-icon">
        <NavLink to="/projects">
          <img src={project} alt="logo en attendant" title="Accéder à vos projets" />
        </NavLink>
      </div>

      <div className="sidebar-menu-icon">
        <NavLink to="/issues">
          <img src={issues} alt="logo en attendant" title="Accéder à vos tickets" />
        </NavLink>
      </div>
    </div>

    <div className="sidebar-menu-settings">
      <NavLink to="/settings">
        <img src={settings} alt="logo en attendant" title="Accéder aux paramètres utilisateurs" />
      </NavLink>
    </div>
  </div>
);

export default SideBar;
