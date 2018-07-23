import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { Dashboard, Notes, Todolist } from '$pages';
import { NavbarItem, Navbar } from '$components';

import './Pages.scss';

const mapStateToProps = state => {
  return {
    isNavigationActive: state.global.isNavigationActive,
    router: state.router
  };
};

function getMainClass(isNavActive) {
  return `application${isNavActive ? ' application_nav-active' : ''}`;
}

function PagesComponent({ isNavigationActive }) {
  return (
    <main className={getMainClass(isNavigationActive)}>
      <div className="navigation-wrapper">
        <Navbar>
          <NavbarItem url="/" title="Dashboard"/>
          <NavbarItem url="/todo-list" title="Todolist"/>
          <NavbarItem url="/notes" title="Notes"/>
        </Navbar>
      </div>
      <div className="application-wrapper">
        <Switch>
          <Route path="/" exact render={Dashboard}/>
          <Route path="/todo-list" render={Todolist}/>
          <Route path="/notes" render={Notes}/>
        </Switch>
      </div>
    </main>
  );
}

const Pages = connect(mapStateToProps, null)(PagesComponent);

export { Pages };