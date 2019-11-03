import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { Dashboard, Notes, Todolist, Pomodoro } from '../pages';
import { NavbarItem, Navbar } from '../components';
import { globalToggleNavigationAction } from '../store';
import { ProgressiveWebAppService } from '../service';

import './Pages.scss';

const mapStateToProps = state => {
  return {
    isNavigationActive: state.global.isNavigationActive,
    router: state.router,
    isInstallButtonActive: state.global.isInstallButtonShown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigationActive: (active) => dispatch(globalToggleNavigationAction({ isNavigationActive: active }))
  };
};

class PagesComponent extends React.Component {

  navigationRef = React.createRef();

  getMainClass = (isNavActive) => {
    return `application${isNavActive ? ' application_nav-active' : ''}`;
  };

  onMainClick = (event) => {
    const navElem = this.navigationRef.current;
    if (this.props.isNavigationActive && event.target !==  navElem && !navElem.contains(event.target)) {
      this.closeNavigation();
    }
  };

  closeNavigation = () => {
    this.props.setNavigationActive(false);
  };

  onInstall = () => {
    ProgressiveWebAppService.showDefferedPrompt();
  };

  render() {
    return (
      <main onClick={this.onMainClick} className={this.getMainClass(this.props.isNavigationActive)}>
        <div ref={this.navigationRef} className="navigation-wrapper">
          <button className="navigation-wrapper__close" onClick={this.closeNavigation}/>
          <div className="navigation-wrapper-inner">
            <Navbar>
              <NavbarItem url={`${process.env.PUBLIC_URL}/`} title="Dashboard"/>
              <NavbarItem url={`${process.env.PUBLIC_URL}/todo-list`} title="Todolist"/>
              <NavbarItem url={`${process.env.PUBLIC_URL}/notes`} title="Notes"/>
              <NavbarItem url={`${process.env.PUBLIC_URL}/pomodoro`} title="Pomodoro Technique"/>
            </Navbar>
            <button className="navigation-wrapper__install" onClick={this.onInstall} hidden={!this.props.isInstallButtonActive}>Add to home</button>
          </div>
        </div>
        <div className="application-wrapper">
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Dashboard}/>
            <Route path={`${process.env.PUBLIC_URL}/todo-list`} component={Todolist}/>
            <Route path={`${process.env.PUBLIC_URL}/notes`} component={Notes}/>
            <Route path={`${process.env.PUBLIC_URL}/pomodoro`} component={Pomodoro}/>
          </Switch>
        </div>
      </main>
    );
  }
}

const Pages = connect(mapStateToProps, mapDispatchToProps)(PagesComponent);

export { Pages };