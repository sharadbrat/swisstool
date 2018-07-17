import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Pages } from '$pages';

import { configureStore } from '$store';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
          <Router>
            <Pages/>
          </Router>
      </Provider>
    );
  }
}

export default App;
