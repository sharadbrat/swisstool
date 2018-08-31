import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { defaultState } from './defaultState';

import { notesReducer } from './notes';
import { todolistReducer } from './todolist';
import { dashboardReducer } from './dashboard';
import { globalReducer } from './global/globalReducer';
import { pomodoroReducer } from './pomodoro';

import { connectRouter, routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(history) {
  const reducers = combineReducers({
    notes: notesReducer,
    todolist: todolistReducer,
    dashboard: dashboardReducer,
    global: globalReducer,
    pomodoro: pomodoroReducer
  });

  return createStore(
    connectRouter(history)(reducers),
    defaultState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
}
