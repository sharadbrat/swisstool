import React from 'react';

import './Navbar.scss';

export function Navbar({ children }) {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-bar__list">
        {children}
      </ul>
    </nav>
  );
}
