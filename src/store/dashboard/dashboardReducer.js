import { defaultDashboardState } from '../defaultState';
import { dashboardActionTypes as $$ } from './dashboardActions';
import { actionResolverDecorator } from '../interface';

export function dashboardReducer(state = defaultDashboardState, action) {
  switch (action.type) {
    case $$.DASHBOARD_SET_NOTES_ACTION:
      return setNotesResolver(state, action.payload);
    case $$.DASHBOARD_SET_TODO_ITEMS_ACTION:
      return setTodoItemsResolver(state, action);
    default:
      return state
  }
}

function setNotesResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    notes: p.notes
  }));
}

function setTodoItemsResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    todoItems: p.todoItems
  }));
}
