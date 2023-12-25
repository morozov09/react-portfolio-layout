import BtnDarkMode from "../btnDarkMode/BtnDardMode";
import NavBarStyles from "./navbar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  const ActiveLink = 'nav-list__link--active';
  const UnActiveLink = 'nav-list__link';


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarkMode/>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive}) => { return isActive ? ActiveLink : UnActiveLink }}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="projects" className={({isActive}) => { return isActive ? ActiveLink : UnActiveLink }}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="contacts" className={({isActive}) => { return isActive ? ActiveLink : UnActiveLink }}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
