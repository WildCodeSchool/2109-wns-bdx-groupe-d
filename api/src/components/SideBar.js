import React, { useState } from 'react';

import '../css/components/SideBar.css';

const SideBar = () => {
  const [displayMenu1, setDisplayMenu1] = useState(false);
  const [displayMenu2, setDisplayMenu2] = useState(false);

  return (
    <div className="side-bar-container">

      <div className="logo-container">
        LOGO
      </div>

      <form>
        <input placeholder="Search a project, issue or user"/>
      </form>

      <div className="side-bar-menu-container">
        <div
          className="side-bar-menu-title"
          onClick={() => setDisplayMenu1(!displayMenu1)}
        >
          Menu 1
        </div>

        {displayMenu1 &&

          <div className="side-bar-menu-subtitle-container">

            <div className="side-bar-menu-subtitle">
              Sous-menu 1
            </div>

            <div className="side-bar-menu-subtitle">
              Sous-menu 2
            </div>

            <div className="side-bar-menu-subtitle">
              Sous-menu 3
            </div>
            
          </div>
        }
        <div
          className="side-bar-menu-title"
          onClick={() => setDisplayMenu2(!displayMenu2)}
        >
          Menu 2
        </div>

        {displayMenu2 &&

          <div className="side-bar-menu-subtitle-container">

            <div className="side-bar-menu-subtitle">
              Sous-menu 1
            </div>

            <div className="side-bar-menu-subtitle">
              Sous-menu 2
            </div>
            
            <div className="side-bar-menu-subtitle">
              Sous-menu 3
            </div>
            
          </div>
        }
      </div>
    </div>
  );
};

export default SideBar;
