import { defaultPomodoroState } from '../defaultState';
import { pomodoroActionTypes as $$ } from './pomodoroActions';
import { actionResolverDecorator } from '../interface';

export function pomodoroReducer(state = defaultPomodoroState, action) {
  switch (action.type) {
    case $$.POMODORO_SET_TIME_ACTION:
      return setTimeResolver(state, action.payload);
    case $$.POMODORO_SET_POMODOROS_ACTION:
      return setPomodorosResolver(state, action.payload);
    case $$.POMODORO_SET_TIMER_ACTIVE_ACTION:
      return setTimerActiveResolver(state, action.payload);
    default:
      return state;
  }
}

function setTimeResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    time: p.time
  }));
}

function setPomodorosResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    pomodoros: p.pomodoros
  }));
}

function setTimerActiveResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    isTimerActive: p.isTimerActive
  }));
}