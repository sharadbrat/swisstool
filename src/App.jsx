import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { Pages } from './pages';
import { StoreService } from './service';

import './App.scss';


function App() {
  return (
    <Provider store={StoreService.obtainStore()}>
      <ConnectedRouter history={StoreService.obtainHistory()}>
        <Pages/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
