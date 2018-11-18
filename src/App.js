import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeNode from './TreeNode'

class App extends React.Component {
  render() {
    var todoList = {
      title: 'one',
      childNodes: [
        {
          title: 'one',
          childNodes: [
          {
            title: 'one',
            childNodes: []
          }
        ]},
        {
          title: 'two',
          childNodes: []
        }
      ]
    }
    return (
      <div>
        <TreeNode node={todoList}/>
      </div>
    )
  }
}

export default App;
