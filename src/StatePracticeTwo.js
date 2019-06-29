import React from 'react';
class StatePracticeTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: true
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isloggedIn === true) {
      wordDisplay = 'in';
    } else {
      wordDisplay = 'out';
    }
    return (
      <div>
        <h1>You are currently logged (in/out)? {wordDisplay}</h1>
      </div>
    );
  }
}

export default StatePracticeTwo;
