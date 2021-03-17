/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import menuBar from '../assets/menu.svg';
import '../styles/Navbar.scss';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <nav>
      <div className="d-flex flex-cl main-nav">
        <div className="d-flex justify-space-btw logo-menu">
          <h1 className="logo logo-pr">Doctors Hub</h1>
          <span className="menubar" onClick={handleClick} role="navigation" onKeyPress={() => {}}>
            <img src={menuBar} alt="menu-bar" />
          </span>
        </div>

        <ul className="d-flex flex-cl navbar__menu">
          <li>
            <NavLink to="/doctors" className="nav-links">
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" className="nav-links">
              Appointments
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar__menu-mobile" style={{ display: open ? 'block' : 'none' }}>
        <ul className="d-flex flex-cl">
          <li>
            <NavLink to="/doctors" className="nav-links">
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" className="nav-links">
              Appointments
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
