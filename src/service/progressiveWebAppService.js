import { StoreService } from '$service';
import { globalSetInstallPromptActiveAction } from '$store';

export const ProgressiveWebAppService = (() => {
  let installPrompt;

  const setInstallButtonActive = (active) => {
    const store = StoreService.obtainStore();
    store.dispatch(globalSetInstallPromptActiveAction({ isInstallButtonShown: active}));
  };

  return {
    setupBeforeInstallDefferedPrompt: () => {
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        installPrompt = e;
        // Set install button active
        setInstallButtonActive(true);
      });
    },
    showDefferedPrompt: () => {
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
  };
})();
