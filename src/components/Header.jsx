import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className='header'>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li> <a href="#menu">Menu</a></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;