import React from 'react';

import './PageHeader.scss'

export function PageHeader({ backButtonClick, children }) {
  return (
    <header>
      <button className="page-header-button" onClick={backButtonClick}/>
      <div className="page-header-content">
        {children}
      </div>
    </header>
  );
}
