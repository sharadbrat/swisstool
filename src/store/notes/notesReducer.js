import { defaultNotesState } from '../defaultState';
import { notesActionTypes as $$ } from './notesActions';
import { actionResolverDecorator } from '../interface';

export function notesReducer(state = defaultNotesState, action) {
  switch (action.type) {
    case $$.NOTES_SET_NOTES_ACTION:
      return setNotesResolver(state, action.payload);
    case $$.NOTES_ADD_NOTE_ACTION:
      return addNoteResolver(state, action.payload);
    case $$.NOTES_MODIFY_NOTE_ACTION:
      return modifyNoteResolver(state, action.payload);
    case $$.NOTES_REMOVE_NOTE_ACTION:
      return removeNoteResolver(state, action.payload);
    default:
      return state;
  }
}

function setNotesResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    notes: p.notes
  }));
}

function addNoteResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    notes: [
      ...s.notes,
      p.note
    ]
  }));
}

function modifyNoteResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    state.notes[p.note.id] = p.note;
    return state;
  });
}

function removeNoteResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => {
    state.notes = state.notes.filter(el => el.id !== p.note.id);
    return state;
  });
}
