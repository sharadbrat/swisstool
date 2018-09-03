const LOCAL_STORAGE_STATE_KEY = 'state';

export const StorageService = (()=> {
  return {
    loadState: () => {
      try {
        const state = localStorage.getItem('state');

        if (state === null) {
          return;
        }

        return JSON.parse(state);
      } catch (e) {
        // log the error and return undefined
        console.error(e);
      }
    },
    saveState: (state) => {
      try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_STATE_KEY, serializedState);
      } catch (e) {
        // log the error and return undefined
        console.error(e);
      }
    }
  };
})();
