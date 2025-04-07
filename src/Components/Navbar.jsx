import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { NavLink } from 'react-router-dom';
import menuIcon from '../Assets/menu.svg';
import Sidebar from './Sidebar'; 

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => {
    setIsSidebarVisible(true); 
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false); 
  };

  return (
    <div className='navbar'>
      <NavLink to='/'>
        <h1 className='logo'>Marc<span>Roldan</span></h1>
      </NavLink>
     
      
      <ul>
        <NavLink to='/skills'><li>Skills</li></NavLink>
        <NavLink to='/projects'><li>Projects</li></NavLink>
        <NavLink to='/experience'><li>Experience</li></NavLink>
        <NavLink to='/resume'><li>Resume</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>

       
      </ul>

      <li>
          <a onClick={showSidebar}>
            <img src={menuIcon} alt="Menu" className='menuButton' />
          </a>
        </li>

      {/* Render Sidebar */}
      <Sidebar isVisible={isSidebarVisible} onClose={hideSidebar} />
    </div>
  );
};

export default Navbar;
