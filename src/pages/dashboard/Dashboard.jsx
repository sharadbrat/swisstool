import React from 'react';
import { push } from "connected-react-router";
import { connect } from 'react-redux';

import { TodolistLayout, TodolistItem, PomodoroTimer, QuestionButton } from '$components';
import { CommonPage } from '$pages';
import { TODOLIST_ITEM_STATUS } from '$utils';

import './Dashboard.scss';

const mapDispatchToProps = dispatch => {
  return {
    navigateTodolist: () => {
      dispatch(push('/todo-list'));
    },
    navigatePomodoro: () => {
      dispatch(push('/pomodoro'));
    }
  };
};

const mapStateToProps = state => {
  return {
    todolistItems: state.todolist.todoItems,
    isPomodoroActive: state.pomodoro.isTimerActive,
    pomodoroTime: state.pomodoro.time
  };
};

export function DashboardComponent({ navigateTodolist, todolistItems, pomodoroTime, isPomodoroActive, navigatePomodoro }) {
  function getDashboardControls() {
    return (
      <section className="dashboard__controls">
        <h1 className="dashboard__title">Swisstool Dashboard</h1>
        <QuestionButton title="What is Swisstool?">
          <section className="dashboard__explanation">
            <p className="dashboard__explanation-item">Swisstool is an open-source project, developed by me, <a className="dashboard__explanation-link" rel="noopener noreferrer" target="_blank" href="https://github.com/sharadbrat">Georgii Sharadze</a>. Its main goal is to train my developer skills in React, Redux and PWA technologies.</p>
            <p className="dashboard__explanation-item">This application consists of several tools for time and task management like todo list and pomodoro timer.</p>
            <p className="dashboard__explanation-item">Feel free to try out all the functional abilities of this application, use it for your everyday life and contribute to it by adding comments and pull-request at the Github project page!</p>
            <p className="dashboard__explanation-item"><a className="dashboard__explanation-link" rel="noopener noreferrer" target="_blank" href="https://github.com/sharadbrat/swisstool">Link to Github project</a></p>
          </section>
        </QuestionButton>
      </section>
    );
  }

  function getTodolistLayout({ onNavigate, items }) {
    const todoItems = items.filter(el => el.status === TODOLIST_ITEM_STATUS.CURRENT).map(el => (
      <TodolistItem key={el.id}
                    title={el.title}
                    editable={false}
      />
    )).slice(0, 3);

    let content;
    if (todoItems && todoItems.length) {
      content = (
        <React.Fragment>
          {todoItems}
        </React.Fragment>
      );
    } else {
      content = (
        <React.Fragment>
          <p className="dashboard__todolist-empty-message">No todo-items for now, go create one!</p>
        </React.Fragment>
      );
    }

    let moreText;
    if (todoItems && todoItems.length) {
      moreText = 'More...';
    } else {
      moreText = 'Create';
    }

    return (
      <React.Fragment>
        <h1 className="dashboard__todolist-heading">Active todos</h1>
        <TodolistLayout
          mode={TODOLIST_ITEM_STATUS.CURRENT}
          actionsEnabled={false}
          length={todoItems.length}>
          {content}
        </TodolistLayout>
        <button onClick={onNavigate} className="dashboard__todolist-more">{moreText}</button>
      </React.Fragment>
    );
  }

  function getPomodoroLayout({ time, isActive, navigate }) {
    let button;
    if (isActive) {
      button = <button className="dashboard__pomodoro-button dashboard__pomodoro-button_hidden" onClick={navigate}>Start</button>
    } else {
      button = <button className="dashboard__pomodoro-button" onClick={navigate}>Start</button>
    }

    return (
      <React.Fragment>
        {button}
        <PomodoroTimer time={time} isActive={isActive}/>
      </React.Fragment>
    );
  }

  return (
    <CommonPage controls={getDashboardControls()}>
      <div className="dashboard">
        <section className="dashboard__pomodoro">
          <h1 className="dashboard__pomodoro-title">Pomodoro Timer</h1>
          {getPomodoroLayout({ time: pomodoroTime, isActive: isPomodoroActive, navigate: navigatePomodoro })}
        </section>
        <section className="dashboard__todolist">
          {getTodolistLayout({ onNavigate: navigateTodolist, items: todolistItems })}
        </section>
      </div>
    </CommonPage>
  );
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export { Dashboard };
