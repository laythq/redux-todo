import React from 'react'

export default class AddChild extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: ''
    };
    this.submitForm = (title, level) => event => {
      event.preventDefault()
      this.props.onSubmit(title, level)
    }
    this.handleChange = (event) => {
      this.setState ({ title: event.target.value})
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={
          this.submitForm(this.props.parentId, this.state.title)
        }>
          <input
            type="text"
            onChange={this.handleChange}
          />
          <input
            type="submit"
          />
        </form>
      </div>
    )
  }
}
