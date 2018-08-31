import React from 'react';

import './Switch.scss';

function Switch() {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__checkbox"/>
      <span className="switch__slider"/>
    </label>
  );
}

export { Switch };
