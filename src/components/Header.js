// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span>({cartItemCount})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
