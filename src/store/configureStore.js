import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { StorageService } from '../service';

import { defaultState } from './defaultState';
import { notesReducer } from './notes';
import { todolistReducer } from './todolist';
import { dashboardReducer } from './dashboard';
import { globalReducer } from './global/globalReducer';
import { pomodoroReducer } from './pomodoro';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(history) {
  const reducers = combineReducers({
    notes: notesReducer,
    todolist: todolistReducer,
    dashboard: dashboardReducer,
    global: globalReducer,
    pomodoro: pomodoroReducer
  });

  const currentState = StorageService.loadState() || defaultState;

  const store = createStore(
    connectRouter(history)(reducers),
    currentState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
