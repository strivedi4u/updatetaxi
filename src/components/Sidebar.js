import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage sidebar collapse

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle between collapsed and expanded states
  };

  return (
    <div className={`templatemo-sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <header className="templatemo-site-header">
        <img src={logo} height="30" width="220" alt="Logo" />
      </header>


      <nav className="templatemo-left-nav">
        <ul>
          <li>
            
      <div className="mobile-menu-icon" style={{backgroundColor:'red'}} onClick={toggleSidebar}>
        <i className="fa fa-bars"><span className="nav-text">Tooggle</span></i>  
      </div>
            <a href="/">
              <i className="fa fa-home fa-fw"></i>
              <span className="nav-text">HomeedS</span>
            </a>
          </li>
          <li>
            <a href="/taxi" className="active">
              <i className="fa fa-bar-chart fa-fw"></i>
              <span className="nav-text">Book Ride</span>
            </a>
          </li>
          <li>
            <a href="/request">
              <i className="fa fa-database fa-fw"></i>
              <span className="nav-text">PendingRequest</span>
            </a>
          </li>
          <li>
            <a href="maps.html">
              <i className="fa fa-map-marker fa-fw"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="manage-users.html">
              <i className="fa fa-users fa-fw"></i>
              <span className="nav-text">Manage Users</span>
            </a>
          </li>
          <li>
            <a href="preferences.html">
              <i className="fa fa-sliders fa-fw"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="fa fa-eject fa-fw"></i>
              <span className="nav-text">Sign Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
