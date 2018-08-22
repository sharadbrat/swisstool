import React from 'react';

import './Construction.scss';

function Construction() {
  return (
    <div className="construction">
      <img className="construction__image" src="/image/construction.svg"/>
      <h1 className="construction__title">Under construction</h1>
      <p className="construction__explanation">This page currently is under construction. We are working hard to implement this feature as soon as possible. Thank you for patience.</p>
    </div>
  );
}

export { Construction };
