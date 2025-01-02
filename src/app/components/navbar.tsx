import Link from 'next/link';

import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/home">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
