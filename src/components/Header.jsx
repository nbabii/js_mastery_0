import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className='header'>
    <nav className='nav'>
      <ul className='nav-list'> 
        <li className='nav-item'><a href="#home" className='nav-link'>Home</a></li>
        <li className='nav-item'> <a href="#menu" className='nav-link'>Menu</a></li>
        <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
        <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;