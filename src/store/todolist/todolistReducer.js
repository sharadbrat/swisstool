import { defaultTodolistState } from '../defaultState';
import { todolistActionTypes as $$ } from './todolistActions';
import { actionResolverDecorator } from '../interface';

export function todolistReducer(state = defaultTodolistState, action) {
  switch (action.type) {
    case $$.TODOLIST_SET_TODOS_ACTION:
      return setTodosResolver(state, action.payload);
    case $$.TODOLIST_ADD_TODO_ACTION:
      return addTodoResolver(state, action.payload);
    case $$.TODOLIST_MODIFY_TODO_ACTION:
      return modifyTodoResolver(state, action.payload);
    case $$.TODOLIST_REMOVE_TODO_ACTION:
      return removeTodoResolver(state, action.payload);
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
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    todoItems: [
      ...s.todoItems,
      p.item
    ]
  }));
}

function modifyTodoResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    state.todoItems[p.item.id] = p.item;
    return state;
  });
}

function removeTodoResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    state.todoItems = state.todoItems.filter(el => el.id !== p.item.id);
    return state;
  });
}
