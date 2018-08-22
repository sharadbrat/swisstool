import React from 'react';

import { MenuButton } from '$components';

import './PageHeader.scss';

export function PageHeader({ backButtonClick, children }) {
  return (
    <header className="page-header">
      <MenuButton onClick={backButtonClick}/>
      <div className="page-header__content">
        {children}
      </div>
    </header>
  );
}
