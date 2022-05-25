import React from 'react';
import './Header.css';
import logo from '../assets/Holberton_Logo.jpg';

function Header() {
  return (

      <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    );
}

export default Header;
