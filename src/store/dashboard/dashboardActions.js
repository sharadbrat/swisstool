import { Action } from '../interface';

const DASHBOARD_SET_NOTES_ACTION = 'swisstool.dashboard.set_notes';
const DASHBOARD_SET_TODO_ITEMS_ACTION = 'swisstool.dashboard.set_todo_items';

export const dashboardActionTypes = {
  DASHBOARD_SET_NOTES_ACTION,
  DASHBOARD_SET_TODO_ITEMS_ACTION
};

export class DashboardSetNotesAction extends Action {
  constructor(payload) {
    super(DASHBOARD_SET_NOTES_ACTION, payload);
  }
}

export class DashboardSetTodoItemsAction extends Action {
  constructor(payload) {
    super(DASHBOARD_SET_TODO_ITEMS_ACTION, payload);
  }
}
