import React from 'react';
import './NavBar.css';
import '../../App.css';
import logo from "../../assets/Logo_Kasa.png"
import { Link, NavLink, } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <Link className='primaryColor logo' to={"home"}><img src={logo} alt="Logo Kasa" /></Link>
      
      <ul className='navList'>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'primaryColor active' : 'primaryColor unactive'} to="home">Accueil</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
            isActive ? 'primaryColor active' : 'primaryColor unactive'
          } to="About">A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
