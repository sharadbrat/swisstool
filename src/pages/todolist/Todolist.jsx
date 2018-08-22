import React from 'react';

import { Construction } from '$components';
import { CommonPage } from '$pages';

export function Todolist() {
  const controls = getTodolistControls();

  return (
    <CommonPage controls={controls}>
      <Construction/>
    </CommonPage>
  );
}

function getTodolistControls() {
  return (
    <span>Some controls</span>
  );
}
