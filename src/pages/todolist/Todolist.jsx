import React from 'react';
import { connect } from 'react-redux';

import { TodolistLayout, TodolistItem } from '../../components';
import { CommonPage } from '../../pages';
import { todolistAddTodoAction, todolistModifyTodoAction, todolistFilterChangeAction } from '../../store';
import { TODOLIST_ITEM_STATUS } from '../../utils';

import './Todolist.scss';

const mapStateToProps = state => ({
  items: state.todolist.todoItems,
  mode: state.todolist.mode
});

const mapDispatchToProps = dispatch => ({
  onItemTitleEdit: (id, title) => dispatch(todolistModifyTodoAction({id, title})),
  onItemRemove: (id) => dispatch(todolistModifyTodoAction({id, status: TODOLIST_ITEM_STATUS.REMOVED})),
  onItemDone: (id) => dispatch(todolistModifyTodoAction({id, status: TODOLIST_ITEM_STATUS.DONE})),
  onItemAdd: () => dispatch(todolistAddTodoAction({title: 'New todo item'})),
  onFilterChange: () => dispatch(todolistFilterChangeAction())
});

export function TodolistComponent({ items, onItemTitleEdit, onItemRemove, onItemDone, onFilterChange, onItemAdd, mode}) {
  const controls = getTodolistControls();

  const todoItems = items.filter(el => el.status === mode).map(el => (
    <TodolistItem key={el.id}
                  title={el.title}
                  onTitleEdit={(title) => onItemTitleEdit(el.id, title)}
                  onRemove={() => onItemRemove(el.id)}
                  onItemDone={() => onItemDone(el.id)}
                  editable={true}
    />
  )).sort((a, b) => a.date > b.date ? 1 : -1);

  let content;
  if (todoItems && todoItems.length) {
    content = todoItems;
  } else {
    content = <h1 className="todolist__empty-message">No todo-items for now, go create one!</h1>;
  }

  return (
    <CommonPage controls={controls}>
      <section className="todolist">
        <TodolistLayout onFilterChange={() => onFilterChange()}
                        onItemAdd={() => onItemAdd()}
                        mode={mode}
                        actionsEnabled={true}
                        length={todoItems.length}>
          {content}
        </TodolistLayout>
      </section>
    </CommonPage>
  );
}

function getTodolistControls() {
  return (
    <h1 className="todolist__heading">Todo List</h1>
  );
}

const Todolist = connect(mapStateToProps, mapDispatchToProps)(TodolistComponent);

export { Todolist };
