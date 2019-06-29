import React from 'react';
import StatePractice from './StatePractice';
import StatePracticeTwo from './StatePracticeTwo';
class State extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: 'yes'
    };
  }
  render() {
    return (
      <div>
        <h1>is state important to know? {this.state.answer}</h1>
        <StatePractice />
        <StatePracticeTwo />
      </div>
    );
  }
}

export default State;
