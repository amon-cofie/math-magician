import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'Home',
    },
    {
      id: uuidv4(),
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: uuidv4(),
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar-container">
      <h1 className="main-heading">Math Magicians</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li data-testid={link.text} key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
