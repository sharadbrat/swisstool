import React from 'react';

import './Switch.scss';

function Switch({ change }) {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__checkbox" onClick={change}/>
      <span className="switch__slider"/>
    </label>
  );
}

export { Switch };
