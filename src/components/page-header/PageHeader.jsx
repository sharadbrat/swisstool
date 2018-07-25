import React from 'react';

import { Back } from '$components';

import './PageHeader.scss';

export function PageHeader({ backButtonClick, children }) {
  return (
    <header className="page-header">
      <Back onClick={backButtonClick} color="#F7F7FF"/>
      <div className="page-header__content">
        {children}
      </div>
    </header>
  );
}
