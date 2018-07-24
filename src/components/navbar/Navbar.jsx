import React from 'react';

import { Logo } from '$components'

import './Navbar.scss';

export function Navbar({ children }) {
  return (
    <React.Fragment>
      <h1 className="navigation-heading">Swisstool</h1>
      <Logo color="#F7F7FF" className="navigation-logo"/>
      <nav className="navigation-bar">
        <ul className="navigation-bar__list">
          {children}
        </ul>
      </nav>
    </React.Fragment>
  );
}
