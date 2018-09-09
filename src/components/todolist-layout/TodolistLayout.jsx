import React from 'react';

import { TODOLIST_ITEM_STATUS } from '$utils';

import './TodolistLayout.scss';

function TodolistLayout({ children, onFilterChange, onItemAdd, mode, length, actionsEnabled }) {
  return (
    <section className="todolist-layout">
      <div className="todolist-layout__actions" hidden={!actionsEnabled}>
        <button className="todolist-layout__filter" onClick={onFilterChange}>Filter</button>
        <h1 className="todolist-layout__heading">{mode === TODOLIST_ITEM_STATUS.CURRENT ? 'Current' : 'Done'} ({length})</h1>
        <button className="todolist-layout__add" onClick={onItemAdd} disabled={mode === TODOLIST_ITEM_STATUS.DONE}/>
      </div>
      <div className="todolist-layout__content">
        {children}
      </div>
    </section>
  );
}

export { TodolistLayout };
