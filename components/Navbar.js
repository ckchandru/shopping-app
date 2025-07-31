import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Chan.com</Link>
    <Link to="/cart" style={{ color: 'white' }}>Cart ({cartCount})</Link>
  </nav>
);

export default Navbar;
