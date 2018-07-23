const NOTES_SET_NOTES_ACTION = 'swisstool.notes.set_notes';
const NOTES_ADD_NOTE_ACTION = 'swisstool.notes.add_note';
const NOTES_MODIFY_NOTE_ACTION = 'swisstool.notes.modify_node';
const NOTES_REMOVE_NOTE_ACTION = 'swisstool.notes.remove_node';

export const notesActionTypes = {
  NOTES_SET_NOTES_ACTION,
  NOTES_ADD_NOTE_ACTION,
  NOTES_MODIFY_NOTE_ACTION,
  NOTES_REMOVE_NOTE_ACTION
};

export function notesSetNotesAction(payload) {
  return {
    type: NOTES_SET_NOTES_ACTION,
    payload
  }
}

export function notesAddNoteAction(payload) {
  return {
    type: NOTES_ADD_NOTE_ACTION,
    payload
  }
}

export function notesModifyNoteAction(payload) {
  return {
    type: NOTES_MODIFY_NOTE_ACTION,
    payload
  }
}

export function notesRemoveNoteAction(payload) {
  return {
    type: NOTES_REMOVE_NOTE_ACTION,
    payload
  }
}
