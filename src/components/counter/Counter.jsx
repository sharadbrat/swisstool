import React from 'react';

import './Counter.scss';

function getDecreaseButtonClass(value, min) {
  if (value > min) {
    return "counter__button counter__button_decrease";
  } else {
    return "counter__button counter__button_decrease counter__button_disabled";
  }
}

function getIncreaseButtonClass(value, max) {
  if (value < max) {
    return "counter__button counter__button_increase";
  } else {
    return "counter__button counter__button_increase counter__button_disabled";
  }
}

function Counter({ change, value, min = 0, max = 100 }) {
  if (min > max) {
    const temp = max;
    max = min;
    min = temp
  }

  return (
    <div className="counter">
      <button disabled={!(value > min)} className={getDecreaseButtonClass(value, min)} onClick={() => change(value - 1)}/>
      <span className="counter__number">{value}</span>
      <button disabled={!(value < max)} className={getIncreaseButtonClass(value, max)} onClick={() => change(value + 1)}/>
    </div>
  );
}

export { Counter };
