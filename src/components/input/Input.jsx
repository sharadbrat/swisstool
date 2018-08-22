import React from 'react';

import './Input.scss';

function Input({ id, placeholder, type }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>{placeholder}</label>
      <input className="input__input" id={id} type={type}/>
    </div>
  );
}

export { Input };
