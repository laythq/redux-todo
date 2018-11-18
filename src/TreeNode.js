import React from 'react'

export default class TreeNode extends React.Component {
  render() {
    const childNodes = this.props.node.childNodes.map(function(child, index) {
      return <li key={index}><TreeNode node={index} /></li>
    }
    )
    return (
      <div>
        <ul>
          {childNodes}
        </ul>

      </div>
    )
  }
}
