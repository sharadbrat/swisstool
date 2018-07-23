const DASHBOARD_SET_NOTES_ACTION = 'swisstool.dashboard.set_notes';
const DASHBOARD_SET_TODO_ITEMS_ACTION = 'swisstool.dashboard.set_todo_items';

export const dashboardActionTypes = {
  DASHBOARD_SET_NOTES_ACTION,
  DASHBOARD_SET_TODO_ITEMS_ACTION
};

export function dashboardSetNotesAction(payload) {
  return {
    type: DASHBOARD_SET_NOTES_ACTION,
    payload
  }
}

export function dashboardSetTodoItemsAction(payload) {
  return {
    type: DASHBOARD_SET_TODO_ITEMS_ACTION,
    payload
  }
}
