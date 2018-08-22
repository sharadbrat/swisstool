import { createBrowserHistory } from 'history';
import { defaultState as defState, configureStore } from '$store';

export const StoreService = (() => {
  let store;
  const history = createBrowserHistory();
  const defaultState = defState;

  return {
    obtainStore: () => {
      if (!store) {
        store = configureStore(history);
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
