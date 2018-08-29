import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { Dashboard, Notes, Todolist, Pomodoro } from '$pages';
import { NavbarItem, Navbar } from '$components';
import { globalToggleNavigationAction } from '$store';

import './Pages.scss';

const mapStateToProps = state => {
  return {
    isNavigationActive: state.global.isNavigationActive,
    router: state.router
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigationActive: (active) => dispatch(globalToggleNavigationAction({ isNavigationActive: active }))
  };
};

// function PagesComponent({ isNavigationActive, setNavigationActive }) {
//   return (
//     <main className={getMainClass(isNavigationActive)}>
//       <div className="navigation-wrapper">
//         <div className="navigation-wrapper-inner">
//           <Navbar>
//             <NavbarItem url="/" title="Dashboard"/>
//             <NavbarItem url="/todo-list" title="Todolist"/>
//             <NavbarItem url="/notes" title="Notes"/>
//             <NavbarItem url="/pomodoro" title="Pomodoro Technique"/>
//           </Navbar>
//         </div>
//       </div>
//       <div className="application-wrapper">
//         <Switch>
//           <Route path="/" exact component={Dashboard}/>
//           <Route path="/todo-list" component={Todolist}/>
//           <Route path="/notes" component={Notes}/>
//           <Route path="/pomodoro" component={Pomodoro}/>
//         </Switch>
//       </div>
//     </main>
//   );
// }

class PagesComponent extends React.Component {

  navigationRef = React.createRef();

  getMainClass = (isNavActive) => {
    return `application${isNavActive ? ' application_nav-active' : ''}`;
  };

  onMainClick = (event) => {
    const navElem = this.navigationRef.current;
    if (this.props.isNavigationActive && event.target !==  navElem && !navElem.contains(event.target)) {
      this.props.setNavigationActive(false);
    }
  };

  render() {
    return (
      <main onClick={this.onMainClick} className={this.getMainClass(this.props.isNavigationActive)}>
        <div ref={this.navigationRef} className="navigation-wrapper">
          <div className="navigation-wrapper-inner">
            <Navbar>
              <NavbarItem url={`${process.env.PUBLIC_URL}/`} title="Dashboard"/>
              <NavbarItem url={`${process.env.PUBLIC_URL}/todo-list`} title="Todolist"/>
              <NavbarItem url={`${process.env.PUBLIC_URL}/notes`} title="Notes"/>
              <NavbarItem url={`${process.env.PUBLIC_URL}/pomodoro`} title="Pomodoro Technique"/>
            </Navbar>
          </div>
        </div>
        <div className="application-wrapper">
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/todo-list" component={Todolist}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/pomodoro" component={Pomodoro}/>
          </Switch>
        </div>
      </main>
    );
  }
}

const Pages = connect(mapStateToProps, mapDispatchToProps)(PagesComponent);

export { Pages };