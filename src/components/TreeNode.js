import React from 'react'

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
    var children
    // if (this.props.todos.childNodes != null){
    //   children =
    //       this.props.todos.childNodes.map(function(child, index) {
    //         return <li key={index}><TreeNode node={child} /></li>
    //       })
    // }

    return (
      <div>
        {this.props.todos}
        <ul>
          {children}
        </ul>
      </div>
    )
  }
}
