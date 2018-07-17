import { combineReducers, createStore } from 'redux';
import { defaultState } from './defaultState';

import { notesReducer } from './notes';
import { todolistReducer } from './todolist';
import { dashboardReducer } from './dashboard';

export function configureStore(preloadedState = defaultState) {
  const reducers = combineReducers({
    notes: notesReducer,
    todolist: todolistReducer,
    dashboard: dashboardReducer
  });

  return createStore(reducers, preloadedState);
}
