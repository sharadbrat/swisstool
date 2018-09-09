import React from 'react';

import './NotesLayout.scss';

function NotesLayout({ children, onNoteAdd, onNote, mode }) {
  return (
    <section className="notes-layout">
      <div className="notes-layout__header">

      </div>
      <div className="notes-layout__content">
        {children}
      </div>
    </section>
  );
}

export { NotesLayout };
