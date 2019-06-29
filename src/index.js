import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Myinfo from './Myinfo';
import '../src/style.css';
import Reactclock from './Reactclock';
import Contact from './ContactCard';
import Joke from './Practice';
import App from './ProductRender';
import MainTodo from './MainTodo';
import Intro from './Intro';
import State from './State';
import HandlingEvent from './HandlingEvent';
import ChangeState from './ChangeState';
import ConditionalRender from './ConditionalRender';
import Conditional from './Conditional';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
// ReactDOM.render(
//   <p>i am learning react and it is fun and challenging.</p>,
//   document.getElementById('root2')
// );
// ReactDOM.render(
//   <ul>
//     <li>html</li>
//     <li>css</li>
//     <li>js</li>
//     <li>sass</li>
//     <li>bootstrap</li>
//     <li>jquery</li>
//   </ul>,
//   document.getElementById('root3')
// );
ReactDOM.render(<Reactclock />, document.getElementById('root'));
// ReactDOM.render(<Myinfo />, document.getElementById('root2'));
// ReactDOM.render(<Joke />, document.getElementById('root2'));
// ReactDOM.render(<App />, document.getElementById("root2"))
ReactDOM.render(<MainTodo />, document.getElementById('root2'));

// ReactDOM.render(<Intro />, document.getElementById('root3'));
// ReactDOM.render(<State />, document.getElementById('root4'));
// ReactDOM.render(<HandlingEvent />, document.getElementById('root3'));
ReactDOM.render(<ChangeState />, document.getElementById('root3'));
ReactDOM.render(<Conditional />, document.getElementById('root4'));
