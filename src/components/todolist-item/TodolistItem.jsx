import React from 'react';

import { TODOLIST_ITEM_MODE } from '../../utils';

import './TodolistItem.scss';

class TodolistItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: TODOLIST_ITEM_MODE.READ
    };
  }

  componentDidMount() {
    this.inputRef = React.createRef();
  }

  doneEdit = () => {
    const title = this.inputRef.current.value;
    this.props.onTitleEdit(title);
    this.cancelEdit(); // TODO: try without this
  };

  cancelEdit = () => {
    this.setState({
      mode: TODOLIST_ITEM_MODE.READ
    });
  };

  remove = () => {
    this.props.onRemove();
  };

  edit = () => {
    this.setState({
      mode: TODOLIST_ITEM_MODE.EDIT
    });
  };

  doneRead = () => {
    this.props.onItemDone()
  };

  getReadActions = (editable) => (
    <div className="todolist-item__actions">
      <button hidden={!editable} className="todolist-item__action-button todolist-item__action-button_read-done" onClick={this.doneRead}/>
      <button hidden={!editable} className="todolist-item__action-button todolist-item__action-button_read-edit" onClick={this.edit}/>
    </div>
  );

  getEditActions = () => (
    <div className="todolist-item__actions">
      <button className="todolist-item__action-button todolist-item__action-button_edit-done" onClick={this.doneEdit}/>
      <button className="todolist-item__action-button todolist-item__action-button_edit-cancel" onClick={this.cancelEdit}/>
      <button className="todolist-item__action-button todolist-item__action-button_edit-delete" onClick={this.remove}/>
    </div>
  );

  getActions = (mode) => {
    if (mode === TODOLIST_ITEM_MODE.EDIT && this.props.editable) {
      return this.getEditActions();
    } else {
      return this.getReadActions(this.props.editable);
    }
  };

  getHeading = (mode, title) => {
    if (mode === TODOLIST_ITEM_MODE.EDIT) {
      return <input ref={this.inputRef} className="todolist-item__title todolist-item__title_edit" type="text" defaultValue={title} autoFocus/>;
    } else {
      return <h1 className="todolist-item__title todolist-item__title_read">{title}</h1>;
    }
  };

  render() {
    return (
      <article className="todolist-item">
        {this.getHeading(this.state.mode, this.props.title)}
        {this.getActions(this.state.mode)}
      </article>
    );
  }
}

export { TodolistItem };
