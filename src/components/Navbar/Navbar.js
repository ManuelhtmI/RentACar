import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Lister</Link>
        </li>
        <li>
          <Link to="/ajouter">Ajouter</Link>
        </li>
        <li>
          <Link to="/user">Compte</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
