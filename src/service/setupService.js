import { PomodoroService } from './pomodoroService';

export const SetupService = (() => {
  function setupPomodoro(store) {
    PomodoroService.continueTimer(store.dispatch);
  }

  return {
    setup: (store) => {
      setupPomodoro(store);
    }
  };
})();
