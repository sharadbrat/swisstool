import { defaultTodolistState } from '../defaultState';
import { todolistActionTypes as $$ } from './todolistActions';
import { actionResolverDecorator } from '../interface';

import { TODOLIST_ITEM_STATUS } from '../../utils';

export function todolistReducer(state = defaultTodolistState, action) {
  switch (action.type) {
    case $$.TODOLIST_SET_TODOS_ACTION:
      return setTodosResolver(state, action.payload);
    case $$.TODOLIST_ADD_TODO_ACTION:
      return addTodoResolver(state, action.payload);
    case $$.TODOLIST_MODIFY_TODO_ACTION:
      return modifyTodoResolver(state, action.payload);
    case $$.TODOLIST_FILTER_CHANGE_ACTION:
      return filterChangeResolver(state, action.payload);
    default:
      return state;
  }
}

function setTodosResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    todoItems: p.todoItems
  }));
}

function addTodoResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    let index = 0;

    if (s.todoItems && s.todoItems.length) {
      index = s.todoItems[s.todoItems.length - 1].id + 1;
    }

    s.todoItems.push({
      id: index,
      title: p.title,
      date: Date.now(),
      status: TODOLIST_ITEM_STATUS.CURRENT
    });

    return s;
  });
}

function modifyTodoResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    const title = p.title === '' ? 'New todo item' : (p.title ? p.title : s.todoItems[p.id].title);
    s.todoItems[p.id] = {
      ...s.todoItems[p.id],
      title: title,
      status: p.status || state.todoItems[p.id].status
    };
    return s;
  });
}

function filterChangeResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    if (s.mode === TODOLIST_ITEM_STATUS.DONE) {
      s.mode = TODOLIST_ITEM_STATUS.CURRENT;
    } else {
      s.mode = TODOLIST_ITEM_STATUS.DONE;
    }
    return s;
  });
}
