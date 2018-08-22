import React from 'react';
import { connect } from 'react-redux';

import { PomodoroTimer, Counter, QuestionButton } from '$components';
import { CommonPage } from '$pages';
import { PomodoroService } from '$service';
import { pomodoroSetPomodorosAction } from '$store';

import './Pomodoro.scss';


const mapStateToProps = state => {
  return {
    time: state.pomodoro.time,
    pomodoros: state.pomodoro.pomodoros,
    isActive: state.pomodoro.isTimerActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startTimer: pomodoros => PomodoroService.startTimer(dispatch, pomodoros),
    stopTimer: () => PomodoroService.stopTimer(dispatch),
    setPomodoros: pomodoros => {
      dispatch(pomodoroSetPomodorosAction({ pomodoros: pomodoros }))
    }
  };
};

function PomodoroComponent({time, pomodoros, startTimer, isActive, setPomodoros, stopTimer}) {

  function getControls() {
    return (
      <div className="pomodoro__header">
        <div className="pomodoro__heading">Pomodoro Technique</div>
        <QuestionButton title="What is pomodoro technique?">
          <section className="pomodoro__explanation">
            <p className="pomodoro__explanation__item">Pomodoro technique is a time management system, which teaches you to work with time, instead of struggling against it.</p>
            <p className="pomodoro__explanation__item">1. Choose a task you'd like to get done;</p>
            <p className="pomodoro__explanation__item">2. Estimate the effort for activities in pomodoros (each pomodoro is 25 minutes);</p>
            <p className="pomodoro__explanation__item">3. Work on the task until the last Pomodoro rings.</p>
            <a className="pomodoro__explanation__link" rel="noopener noreferrer" target="_blank" href="https://francescocirillo.com/pages/pomodoro-technique">Learn More about Pomodoro Technique</a>
          </section>
        </QuestionButton>
      </div>
    )
  }

  function getActionsClass() {
    if (isActive) {
      return 'pomodoro__actions pomodoro__actions_disabled';
    } else {
      return 'pomodoro__actions';
    }
  }

  function getStatsClass() {
    if (isActive) {
      return 'pomodoro__stats';
    } else {
      return 'pomodoro__stats pomodoro__stats_disabled';
    }
  }

  function getPomodorosStats(items) {
    let res = [];
    for (let i = 0; i < items; i++) {
      res.push(
        <div className="pomodoro__stats__item" key={i}/>
      )
    }
    return res;
  }

  return (
    <CommonPage controls={getControls()}>
      <section className="pomodoro">
        <PomodoroTimer time={time} pomodoros={pomodoros} isActive={isActive}/>
        <div className={getActionsClass()}>
          <span className="pomodoro__description">How many pomodoros do you take?</span>
          <div className="pomodoro__counter">
            <Counter change={setPomodoros} value={pomodoros} min={1} max={9}/>
          </div>
          <button className="pomodoro__start-button" onClick={() => startTimer(pomodoros)}>Start</button>
        </div>
        <div className={getStatsClass()}>
          <span className="pomodoro__stats__description">Pomodoros remaining:</span>
          <div className="pomodoro__stats__pomodoros">
            {getPomodorosStats(pomodoros)}
          </div>
          <button className="pomodoro__stats__stop-button" onClick={stopTimer}>Stop</button>
        </div>
      </section>
    </CommonPage>
  );
}

const Pomodoro = connect(mapStateToProps, mapDispatchToProps)(PomodoroComponent);

export { Pomodoro };
