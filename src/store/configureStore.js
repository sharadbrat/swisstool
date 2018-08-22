import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { defaultState } from './defaultState';

import { notesReducer } from './notes';
import { todolistReducer } from './todolist';
import { dashboardReducer } from './dashboard';
import { globalReducer } from './global/globalReducer';
import { pomodoroReducer } from './pomodoro';

import { connectRouter, routerMiddleware } from 'connected-react-router'

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
    compose(
      applyMiddleware(routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
