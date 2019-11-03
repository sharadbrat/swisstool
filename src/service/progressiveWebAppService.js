import { StoreService } from '../service';
import { globalSetInstallPromptActiveAction } from '../store';

export const ProgressiveWebAppService = (() => {
  let installPrompt;

  const setInstallButtonActive = (active) => {
    const store = StoreService.obtainStore();
    store.dispatch(globalSetInstallPromptActiveAction({ isInstallButtonShown: active}));
  };

  return {
    setupBeforeInstallDefferedPrompt: () => {
      window.addEventListener('beforeinstallprompt', event => {
        installPrompt = event;
        setInstallButtonActive(true);
      });
    },
    showDefferedPrompt: () => {
      if (installPrompt) {
        installPrompt.prompt();
        installPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              setInstallButtonActive(false);
            } else {
              setInstallButtonActive(true);
            }
          });
      }
    }
  };
})();
