import React, { Component } from 'react';
import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default App;
