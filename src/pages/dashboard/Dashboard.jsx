import React from 'react';

import { CommonPage } from '$pages';

export function Dashboard() {
  const controls = getDashboardControls();

  return (
    <CommonPage controls={controls}>
      <h1>Dashboard!</h1>
    </CommonPage>
  );
}

function getDashboardControls() {
  return (
    <span>Some controls</span>
  );
}
