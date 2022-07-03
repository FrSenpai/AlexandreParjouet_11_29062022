import React from 'react';
import './NavBar.css';
import logo from "../../assets/Logo_Kasa.png"
function NavBar() {
  return (
    <nav>
      <img src={logo}/>
      <ul className='navList'>
        <li className='active'>Accueil</li>
        <li>A Propos</li>
      </ul>
    </nav>
  );
}

export default NavBar;
