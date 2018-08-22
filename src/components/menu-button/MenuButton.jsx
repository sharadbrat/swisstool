import React from 'react';

import './MenuButton.scss';

function MenuButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick}/>
  );
}

export { MenuButton };
