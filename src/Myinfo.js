import React from 'react';
// import Footer from './Footer';
// import List from './List';
// import Nav from './Nav';
import CheckBox from './Checkbox';
import Todoitem from './Todoitem';
import Contact from './ContactCard';
import todosData from './todosData'
import { thisExpression } from '@babel/types';

function Myinfo() {
  return (
    <div>
      {/* <Nav />
      <h1>Thien Nguyen</h1>
      <p>i am learning react and it is fun and challenging.</p>
      <p>what have i learn? except for react and NodeJS</p>
      <List /> */}
      {/* //create todoitems
       */}
      {/* const todoItems = todosData.map(item => <Todoitem key={item.id} item={item}/>) */}
      <div className="todo-list">

        <Todoitem />
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </div>
      {/* <div div className="contacts">
        <Contact
          //create object
          contact={{
            name: 'thien',
            imgUrl:
              'https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80',
            phone: '5122934887',
            email: 'thn_301@yahoo.com'
          }}
          // name="thien"
          // imgUrl="https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80"
          // phone="5122222222"
          // email="thien@yahoo.com"
        />
        <Contact
          contact={{
            name: 'thien',
            imgUrl:
              'https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80',
            phone: '5122934887',
            email: 'thn_301@yahoo.com'
          }}
          // name="thai"
          // imgUrl="https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80"
          // phone="5122222222"
          // email="thien@yahoo.com"
        />
        <Contact
          contact={{
            name: 'thien',
            imgUrl:
              'https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80',
            phone: '5122934887',
            email: 'thn_301@yahoo.com'
          }}
          // name="thinh"
          // imgUrl="https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80"
          // phone="5122222222"
          // email="thien@yahoo.com"
        />
      </div> */}

      {/* <Footer /> */}
    </div>
  );
}
export default Myinfo;
