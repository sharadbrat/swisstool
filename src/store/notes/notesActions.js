import { Action } from '../interface';

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

export class NotesSetNotesAction extends Action {
  constructor(payload) {
    super(NOTES_SET_NOTES_ACTION, payload);
  }
}

export class NotesAddNoteAction extends Action {
  constructor(payload) {
    super(NOTES_ADD_NOTE_ACTION, payload);
  }
}

export class NotesModifyNoteAction extends Action {
  constructor(payload) {
    super(NOTES_MODIFY_NOTE_ACTION, payload);
  }
}

export class NotesRemoveNoteAction extends Action {
  constructor(payload) {
    super(NOTES_REMOVE_NOTE_ACTION, payload);
  }
}
