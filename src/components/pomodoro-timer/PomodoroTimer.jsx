import React from 'react';

import { POMODORO_TIME } from '../../service';

import './PomodoroTimer.scss';

function PomodoroTimer({time, isActive}) {

  function getOverlayTranslate(t) {
    if (t) {
      return {
        maxHeight: `${((POMODORO_TIME - t) / POMODORO_TIME) * 100}%`
      };
    } else {
      return {maxHeight: 0};
    }
  }

  function prettyfyTime(t) {
    const secs = (t / 1000) % 60;
    const mins = Math.floor((t / 1000) / 60);
    return `${mins < 10 ? '0' + mins : mins} : ${secs < 10 ? '0' + secs : secs}`;
  }

  function getTimeClassName(flag) {
    return `pomodoro-timer__time${flag ? ' pomodoro-timer__time_active' : ''}`;
  }

  return (
    <div className="pomodoro-timer">
      <div className="pomodoro-timer__image">
        <div className="pomodoro-timer__image-overlay" style={getOverlayTranslate(time)}/>
      </div>
      <span className={getTimeClassName(isActive)}>{prettyfyTime(time)}</span>
    </div>

  );
}

export { PomodoroTimer };
