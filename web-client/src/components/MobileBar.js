import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import burgerLogo from '../assets/images/burger-icon.svg';
import logo from '../images/wildmine-logo.svg';

const MobileBar = () => {
	const [currentLoc, setCurrentLoc] = useState(window.location.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  return <div>
    <img
      src={burgerLogo}
      alt="Ouvrir le menu"
      className='fixed z-50 left-4 top-4 cursor-pointer'
      onClick={() => setOpenMenu(!openMenu)}
    />

    {openMenu &&
      <div className='modal-background'>
        <div className="bg-grey_light rounded-b-2xl pt-4 flex flex-col px-8 py-4 fixed h-[50%] w-[50%] md:w-[40%]">

          <img
            src={logo}
            alt="Logo wildmine"
            className='w-[4rem] mx-auto'
          />

          <NavLink
            to="/"
            className={`text-black text-2xl font-bold mb-4 mt-4 ${currentLoc === '/' ? 'border-2 border-b-secondary_color' : ''}`}
            onClick={() => {
              setCurrentLoc('/');
              setOpenMenu(false);
            }}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/organization"
            className={`text-black text-2xl font-bold mb-4 ${currentLoc === '/organization' ? 'border-2 border-b-secondary_color' : ''}`}
            onClick={() => {
              setCurrentLoc('/organization');
              setOpenMenu(false);
            }}
          >
            Organisation
          </NavLink>

          <NavLink
            to="/projects"
            className={`text-black text-2xl font-bold mb-4 ${currentLoc === '/projects' ? 'border-2 border-b-secondary_color' : ''}`}
            onClick={() => {
              setCurrentLoc('/projects');
              setOpenMenu(false);
            }}
          >
            Projets
          </NavLink>

          <NavLink
            to="/issuesProject"
            className={`text-black text-2xl font-bold mb-4 ${currentLoc === '/issues' ? 'border-2 border-b-secondary_color' : ''}`}
            onClick={() => {
              setCurrentLoc('/issues');
              setOpenMenu(false);
            }}
          >
            Tickets
          </NavLink>
        </div>
      </div>
    }
  </div>;
};

export default MobileBar;