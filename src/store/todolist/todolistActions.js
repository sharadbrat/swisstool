const TODOLIST_SET_TODOS_ACTION = 'swisstool.todolist.set_todos';
const TODOLIST_ADD_TODO_ACTION = 'swisstool.todolist.add_todo_item';
const TODOLIST_MODIFY_TODO_ACTION = 'swisstool.todolist.modify_todo_item';
const TODOLIST_REMOVE_TODO_ACTION = 'swisstool.todolist.remove_todo_item';

export const todolistActionTypes = {
  TODOLIST_SET_TODOS_ACTION,
  TODOLIST_ADD_TODO_ACTION,
  TODOLIST_MODIFY_TODO_ACTION,
  TODOLIST_REMOVE_TODO_ACTION
};

export function todolistSetTodosAction(payload) {
  return {
    type: TODOLIST_SET_TODOS_ACTION,
    payload
  }
}

export function todolistAddTodoAction(payload) {
  return {
    type: TODOLIST_ADD_TODO_ACTION,
    payload
  }
}

export function todolistModifyTodoAction(payload) {
  return {
    type: TODOLIST_MODIFY_TODO_ACTION,
    payload
  }
}

export function todolistRemoveTodoAction(payload) {
  return {
    type: TODOLIST_REMOVE_TODO_ACTION,
    payload
  }
}

