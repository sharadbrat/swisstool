import React from 'react';

import { Dialog } from '$components';

import './QuestionButton.scss';

class QuestionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  close = () => {
    this.setState({
      active: false
    })
  };

  open = () => {
    this.setState({
      active: true
    })
  };

  render() {
    return (
      <div className="question-button__wrapper">
        <button onClick={() => this.open()} className="question-button">?</button>
        <Dialog active={this.state.active} close={() => this.close()} title={this.props.title}>{this.props.children}</Dialog>
      </div>
    );
  }
}

export { QuestionButton };
