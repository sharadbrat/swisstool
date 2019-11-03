import React from 'react';
import { connect } from 'react-redux';

import { CommonPage } from '../../pages';
import { notesAddNoteAction } from '../../store';
import { Note, QuestionButton, Construction } from '../../components';

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

  function getControls() {
    return (
      <div className="notes__header">
        <div className="notes__heading">Notes</div>
        <QuestionButton title="What is this page for?">
          <section className="notes__explanation">
            <p className="notes__explanation-item">Here you can add notes with special information in order to keep things in mind.</p>
            <p className="notes__explanation-item">Notes support Markdown syntax (doesn't support images and links):</p>
            <ul className="notes__explanation-list">
              <li className="notes__explanation-list-item">To create heading use "#" symbols before heading text (you can use up to 6 symbols, the more symbols are used, the smaller font size is used for heading)</li>
              <li className="notes__explanation-list-item">To create unordered list use "*" symbol before list-item text</li>
              <li className="notes__explanation-list-item">To create ordered list use "1." syntax before list-item text</li>
            </ul>
            <a className="notes__explanation-link" rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Markdown">Read more about Markdown syntax</a>
          </section>
        </QuestionButton>
      </div>
    )
  }

  const notesComponents = notes.map(note =>
    <Note key={note.id} note={note}/>
  );

  return (
    <CommonPage controls={getControls()}>
      {/*<NotesLayout>*/}
        {/*{notesComponents}*/}
      {/*</NotesLayout>*/}
      <Construction/>
    </CommonPage>
  );
}

const Notes = connect(mapStateToProps, mapDispatchToProps)(NotesComponent);

export { Notes };