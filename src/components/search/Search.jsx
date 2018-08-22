import React from 'react';

import './Search.scss';

function Search({ onSearch, placeholder }) {
  return (
    <div className="search">
      <input type="text" placeholder={placeholder} className="search-input" onInput={onSearch}/>
    </div>
  );
}

export { Search };
