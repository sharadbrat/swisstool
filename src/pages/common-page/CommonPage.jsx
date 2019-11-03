import React from 'react';
import { connect } from 'react-redux';

import { PageHeader } from '../../components';
import { globalToggleNavigationAction } from '../../store';

import './CommonPage.scss';

const mapDispatchToProps = dispatch => {
  return {
    toggleNavigation: () => dispatch(globalToggleNavigationAction())
  }
};

function CommonPageComponent({ children, controls, toggleNavigation }) {
  return (
    <section className="common-page">
      <PageHeader backButtonClick={toggleNavigation}>
        {controls}
      </PageHeader>
      <main className="common-page__main">
        {children}
      </main>
    </section>
  );
}

const CommonPage = connect(null, mapDispatchToProps)(CommonPageComponent);

export { CommonPage };
