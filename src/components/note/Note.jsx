import React from 'react';

import { Card } from '../../components';

import './Note.scss';

function Note({ note }) {

  const header = (
    <div className="note__header">
      <input type="text" className="note__title" defaultValue={note.title}/>
    </div>
  );

  return (
    <Card className="note" header={header}>
      <textarea className="note__text" defaultValue={note.content}/>
    </Card>
  );
}

export { Note };
