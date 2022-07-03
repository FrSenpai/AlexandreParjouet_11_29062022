import React from 'react';
import './NavBar.css';
import logo from "../../assets/Logo_Kasa.png"
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Logo Kasa"/>
      <ul className='navList'>
        <li><Link className='primaryColor active' to="Home">Accueil</Link></li>
        <li>A Propos</li>
      </ul>
    </nav>
  );
}

export default NavBar;
