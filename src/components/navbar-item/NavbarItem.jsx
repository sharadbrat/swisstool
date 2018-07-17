import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavbarItem.scss';

export function NavbarItem({ url, title }) {
  return (
    <NavLink to={url} activeClassName="navigation-bar__list__item_selected">
      <span className="navigation-bar__list__item">{title}</span>
    </NavLink>
  );
}
