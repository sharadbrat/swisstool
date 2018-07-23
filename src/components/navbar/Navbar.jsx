import React from 'react';

import './Navbar.scss';

export function Navbar({ children }) {
  return (
    <React.Fragment>
      <h1 className="navigation-heading">Swisstool</h1>
      <img className="navigation-logo" src="/image/logo.svg" alt="Swisstool logo"/>
      <nav className="navigation-bar">
        <ul className="navigation-bar__list">
          {children}
        </ul>
      </nav>
    </React.Fragment>
  );
}
