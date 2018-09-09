import { PomodoroService } from './pomodoroService';
import { StorageService } from './storageService';
import { ProgressiveWebAppService } from './progressiveWebAppService';

export const SetupService = (() => {
  function setupPomodoro(store) {
    PomodoroService.continueTimer(store.dispatch);
  }

  function setupStorage(store) {
    // Subscribe to store changes and save all the changes in localStorage
    store.subscribe(() => StorageService.saveState(store.getState()));
  }

  function setupPWA() {
    ProgressiveWebAppService.setupBeforeInstallDefferedPrompt();
  }

  return {
    setup: (store) => {
      setupPomodoro(store);
      setupStorage(store);
      setupPWA();
    }
  };
})();
