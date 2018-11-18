import React from 'react'

export default class TreeNode extends React.Component {
  render() {
    var childNodes
    if (this.props.node.childNodes != null){
      childNodes = this.props.node.childNodes.map(function(child, index) {
        return <li key={index}><TreeNode node={child} /></li>
      }
      )
    }
    return (
      <div>
        {this.props.node.title}
        <ul>
          {childNodes}
        </ul>
      </div>
    )
  }
}
