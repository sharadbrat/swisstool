import React from 'react';

import { TODOLIST_ITEM_STATUS } from '$utils';

import './TodolistLayout.scss';

function TodolistLayout({ children, onFilterChange, onItemAdd, mode }) {
  return (
    <section className="todolist-layout">
      <div className="todolist-layout__actions">
        <button className="todolist-layout__filter"
                onClick={onFilterChange}>{mode === TODOLIST_ITEM_STATUS.CURRENT ? 'Current' : 'Done'}</button>
        <button className="todolist-layout__add" onClick={onItemAdd}/>
      </div>
      <div className="todolist-layout__content">
        {children}
      </div>
    </section>
  );
}

export { TodolistLayout };
