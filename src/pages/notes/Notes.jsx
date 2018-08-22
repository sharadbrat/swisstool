import React from 'react';
import { connect } from 'react-redux';

import { CommonPage } from '$pages';
import { notesAddNoteAction } from '$store';
import { Note, Construction } from '$components';

import './Notes.scss';

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(notesAddNoteAction(note))
  };
};

function NotesComponent({ notes, addNote }) {
  const controls = getNotesControls();

  const notesComponents = notes.map(note =>
    <Note title={note.title} content={note.content}/>
  );

  return (
    <CommonPage controls={controls}>
      {/*<div className="notes">*/}
        {/*{notesComponents}*/}
      {/*</div>*/}
      <Construction/>
    </CommonPage>
  );
}

function getNotesControls() {
  return (
    <div className="notes-controls">Notes</div>
  );
}

const Notes = connect(mapStateToProps, mapDispatchToProps)(NotesComponent);

export { Notes };