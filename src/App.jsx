import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { Pages } from '$pages';
import { configureStore } from '$store';

import './App.scss';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={configureStore(history)}>
      <ConnectedRouter history={history}>
        <Pages/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
