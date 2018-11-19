import React from 'react'
import AddTodo from '../containers/AddTodo'
import AddChild from '../containers/AddChild'

export default class TreeNode extends React.Component {
  constructor() {
    super();
    this.submitForm = (title) => event => {
      event.preventDefault();
      this.props.onSubmit(title)
    }
    this.handleChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value})
    }
    this.state = {
      title: ''
    }
  }

  render() {
    var children =
      this.props.todo.filter(
        todo => todo.parentId == this.props.parentId).map(
          todo => <TreeNode title={todo.title} todo={this.props.todo} parentId={todo.id}/>
      )

    return (
      <div>
        <li>{this.props.title}</li>
        <AddChild parentId={this.props.parentId}/>
        <ul>{children}</ul>
      </div>
    )
  }
}
