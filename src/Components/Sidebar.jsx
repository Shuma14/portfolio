import React from 'react';
import '../CSS/Sidebar.css';
import { NavLink } from 'react-router-dom';
import closeIcon from '../Assets/close.svg';

const Sidebar = ({ isVisible, onClose }) => {
  return (
    <>
      {isVisible && ( // Use the isVisible prop to control visibility
        <div className="sidebar">
          <ul>
            <li>
              <a onClick={onClose}>
                <img src={closeIcon} alt="Close Menu" className="closeButton" />
              </a>
            </li>
            <NavLink to="/skills" onClick={onClose}><li>Skills</li></NavLink>
            <NavLink to="/projects" onClick={onClose}><li>Projects</li></NavLink>
            <NavLink to="/experience" onClick={onClose}><li>Experience</li></NavLink>
            <NavLink to="/resume" onClick={onClose}><li>Resume</li></NavLink>
            <NavLink to="/contact" onClick={onClose}><li>Contact</li></NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
