import { StoreService } from '$service';
import { pomodoroSetTimeAction, pomodoroSetPomodorosAction, pomodoroSetTimerActive } from '$store';

export const POMODORO_TIME = 1000 * 60 * 25;

export const PomodoroService = (() => {
  let interval;

  return {
    startTimer: (dispatch, pomodoros) => {
      const store = StoreService.obtainStore();
      const state = store.getState();
      if (!state.pomodoro.isTimerActive) {
        dispatch(pomodoroSetTimeAction({ time: POMODORO_TIME - 1000 }));
        dispatch(pomodoroSetPomodorosAction({ pomodoros }));
        dispatch(pomodoroSetTimerActive({ isTimerActive: true }));

        interval = setInterval(() => {
          const time = store.getState().pomodoro.time - 1000;
          if (time === 0) {
            if (pomodoros === 1) {
              dispatch(pomodoroSetTimerActive({ isTimerActive: false }));
              dispatch(pomodoroSetTimeAction({time}));
              clearInterval(interval);
              // TODO: add notifications
            } else {
              dispatch(pomodoroSetTimeAction({ time: POMODORO_TIME}));
              dispatch(pomodoroSetPomodorosAction({ pomodoros: --pomodoros}));
            }
          } else {
            dispatch(pomodoroSetTimeAction({time}));
          }
        }, 1000);
      }
    },
    continueTimer: (dispatch) => {
      const store = StoreService.obtainStore();
      const state = store.getState();
      if (state.pomodoro.isTimerActive) {
        interval = setInterval(() => {
          const time = store.getState().pomodoro.time - 1000;
          const pomodoros = store.getState().pomodoro.pomodoros;
          if (time === 0) {
            if (pomodoros === 1) {
              dispatch(pomodoroSetTimerActive({ isTimerActive: false }));
              dispatch(pomodoroSetTimeAction({time}));
              clearInterval(interval);
              // TODO: add notifications
            } else {
              dispatch(pomodoroSetTimeAction({ time: POMODORO_TIME}));
              dispatch(pomodoroSetPomodorosAction({ pomodoros: pomodoros - 1}));
            }
          } else {
            dispatch(pomodoroSetTimeAction({time}));
          }
        }, 1000);
      }
    },
    stopTimer: (dispatch) => {
      dispatch(pomodoroSetTimerActive({ isTimerActive: false }));
      dispatch(pomodoroSetTimeAction({time: 0}));
      clearInterval(interval);
    }
  };
})();