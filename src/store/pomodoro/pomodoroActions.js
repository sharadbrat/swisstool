const POMODORO_SET_TIME_ACTION = 'swisstool.pomodoro.set_time';
const POMODORO_SET_POMODOROS_ACTION = 'swisstool.pomodoro.set_pomodoros';
const POMODORO_SET_TIMER_ACTIVE_ACTION = 'swisstool.pomodoro.set_timer_active';

export const pomodoroActionTypes = {
  POMODORO_SET_TIME_ACTION,
  POMODORO_SET_POMODOROS_ACTION,
  POMODORO_SET_TIMER_ACTIVE_ACTION
};

export function pomodoroSetTimeAction(payload) {
  return {
    type: POMODORO_SET_TIME_ACTION,
    payload
  }
}

export function pomodoroSetPomodorosAction(payload) {
  return {
    type: POMODORO_SET_POMODOROS_ACTION,
    payload
  }
}

export function pomodoroSetTimerActive(payload) {
  return {
    type: POMODORO_SET_TIMER_ACTIVE_ACTION,
    payload
  }
}
