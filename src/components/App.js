import React, { Component } from 'react';
import TodoList from '../containers/TodoList'

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList parentId={0}/>
      </div>
    )
  }
}

export default App;
