import { Action } from '../interface';

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

export class TodolistSetTodosAction extends Action {
  constructor(payload) {
    super(TODOLIST_SET_TODOS_ACTION, payload);
  }
}

export class TodolistAddTodoAction extends Action {
  constructor(payload) {
    super(TODOLIST_ADD_TODO_ACTION, payload);
  }
}

export class TodolistModifyTodoAction extends Action {
  constructor(payload) {
    super(TODOLIST_MODIFY_TODO_ACTION, payload);
  }
}

export class TodolistRemoveTodoAction extends Action {
  constructor(payload) {
    super(TODOLIST_REMOVE_TODO_ACTION, payload);
  }
}

