import { PomodoroService } from './pomodoroService';
import { StorageService } from './storageService';

export const SetupService = (() => {
  function setupPomodoro(store) {
    PomodoroService.continueTimer(store.dispatch);
  }

  function setupStorage(store) {
    // Subscribe to store changes and save all the changes in localStorage
    store.subscribe(() => StorageService.saveState(store.getState()));
  }

  return {
    setup: (store) => {
      setupPomodoro(store);
      setupStorage(store);
    }
  };
})();
