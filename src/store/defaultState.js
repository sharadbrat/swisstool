import { TODOLIST_ITEM_STATUS } from '$utils';

export const defaultNotesState = {
  notes: [
    {
      id: '123',
      title: 'My favourite note',
      content: 'ooooh my good this is so coool ooooh my good this is so coool ooooh my good this is so coool'
    }
  ],
  currentNoteId: null
};

export const defaultTodolistState = {
  todoItems: [],
  mode: TODOLIST_ITEM_STATUS.CURRENT
};

export const defaultDashboardState = {
  notes: [],
  todoItems: []
};

export const defaultGlobalState = {
  isNavigationActive: false
};

export const defaultPomodoroState = {
  time: 0,
  pomodoros: 1,
  isTimerActive: false
};

export const defaultState = {
  notes: defaultNotesState,
  todolist: defaultTodolistState,
  dashboard: defaultDashboardState,
  global: defaultGlobalState,
  pomodoro: defaultPomodoroState
};
