import React from 'react';

import { Construction } from '$components';
import { CommonPage } from '$pages';

export function Dashboard() {
  const controls = getDashboardControls();

  return (
    <CommonPage controls={controls}>
      <Construction/>
    </CommonPage>
  );
}

function getDashboardControls() {
  return (
    <span>Some controls</span>
  );
}
