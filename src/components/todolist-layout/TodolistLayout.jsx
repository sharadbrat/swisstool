import React from 'react';

import { TODOLIST_LAYOUT_MODE } from '$utils';

import './TodolistLayout.scss';

function TodolistLayout({ children, onFilterChange, onItemAdd, mode }) {
  return (
    <section className="todolist-layout">
      <div className="todolist-layout__actions">
        <button className="todolist-layout__filter">{mode === TODOLIST_LAYOUT_MODE.CURRENT ? 'Current' : 'Done'}</button>
        <button className="todolist-layout__add" onClick={onItemAdd}/>
      </div>
      <div className="todolist-layout__content">
        {children}
      </div>
    </section>
  );
}

export { TodolistLayout };
