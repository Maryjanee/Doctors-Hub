import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
  <nav>
    <div>
      <p className="logo">Doctors Hub</p>
      <ul className="d-flex">
        <li><NavLink to="/doctors" className="nav-links">All Doctors</NavLink></li>
        <li><NavLink to="/appointments" className="nav-links">Appointments</NavLink></li>
      </ul>
    </div>

  </nav>
);

export default NavBar;
