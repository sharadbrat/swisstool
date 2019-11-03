import React from 'react';

import { MenuButton } from '../../components';

import './PageHeader.scss';

export function PageHeader({ backButtonClick, children }) {
  return (
    <div className="page-header">
      <header className="page-header__container">
        <MenuButton onClick={backButtonClick}/>
        <div className="page-header__content">
          {children}
        </div>
      </header>
    </div>
  );
}
