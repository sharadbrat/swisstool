import { createBrowserHistory } from 'history';

import { defaultState as defState, configureStore } from '$store';

import { SetupService } from './setupService';

export const StoreService = (() => {
  let store;
  const history = createBrowserHistory();
  const defaultState = defState;

  return {
    obtainStore: () => {
      if (!store) {
        store = configureStore(history);
        SetupService.setup(store);
      }
      return store;
    },
    obtainDefaultState: () => {
      return defaultState;
    },
    obtainHistory: () => {
      return history;
    }
  };
})();
