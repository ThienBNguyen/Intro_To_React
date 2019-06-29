import React from 'react';
// import Greeting from './Greeting';
// import Header from './Header';
import ReactDOM from 'react-dom';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <Header username="thien" />
        <Greeting />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>welcome, {this.props.username}!</p>
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = 'morning';
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'afternoon';
    } else {
      timeOfDay = 'night';
    }
    return <h1>Good {timeOfDay} to you, sir or madam</h1>;
  }
}

export default Intro;
