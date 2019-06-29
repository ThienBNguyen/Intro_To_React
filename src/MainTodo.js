import React from 'react';
import todosData from './todosData';
import TodoItem from './Todoitem';
import { typeParameterDeclaration } from '@babel/types';
class MainTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: updatedTodos
      };
    });
  }
  render() {
    const todoItems = this.state.todo.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default MainTodo;
