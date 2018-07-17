import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard, Notes, Todolist } from '$pages';
import { Navbar, NavbarItem } from '$components';

import './Pages.scss';

export class Pages extends Component {

  render() {
    return (
      <main>
        <Navbar>
          <NavbarItem url="/" title="Dashboard"/>
          <NavbarItem url="/notes" title="Notes"/>
          <NavbarItem url="/todo-list" title="Todo List"/>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/todo-list" component={Todolist}/>
          <Route path="/notes" component={Notes}/>
        </Switch>
      </main>
    );
  }

}
