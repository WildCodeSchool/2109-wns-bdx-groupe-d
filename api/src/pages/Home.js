import React from 'react';

import '../css/pages/Home.css';
import SideBar from '../components/SideBar';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <SideBar />
      </header>
    </div>
  );
}

export default Home;