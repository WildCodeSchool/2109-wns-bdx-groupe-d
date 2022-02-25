import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { isLogged } from '../graphql/UserSession';

import '../css/components/TopBar.css';

const TopBar = () => {
  const { data } = useQuery(isLogged);

  const currentUser = data.isLogged;
  return (
    <nav className="topbar-container">

      <div className="logo-container">
        LOGO
      </div>

      <div className="topbar-menu-links-container">

          <NavLink to="/" className="topbar-menu-link">
            Accueil
          </NavLink>
          
          <NavLink to="/organization" className="topbar-menu-link">
            Organisation
          </NavLink>
          
          <NavLink to="/projects" className="topbar-menu-link">
            Projets
          </NavLink>
          
          <NavLink to="/issues" className="topbar-menu-link">
            Issues??
          </NavLink>
      </div>

      <div className="topbar-menu-settings">
        <NavLink to="/settings">
          {currentUser.first_name} {currentUser.last_name}
        </NavLink>
      </div>
    </nav>
  );
};

export default TopBar;
