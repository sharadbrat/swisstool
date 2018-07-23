import React from 'react';

import { CommonPage } from '$pages';

export function Todolist() {
  const controls = getTodolistControls();

  return (
    <CommonPage controls={controls}>
      <h1>Todolist!</h1>
    </CommonPage>
  );
}

function getTodolistControls() {
  return (
    <span>Some controls</span>
  );
}
