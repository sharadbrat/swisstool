import React from 'react';

import { CommonPage } from '$pages';

export function Notes() {
  const controls = getNotesControls();

  return (
    <CommonPage controls={controls}>
      <h1>Notes!</h1>
    </CommonPage>
  );
}

function getNotesControls() {
  return (
    <span>Some controls</span>
  );
}
