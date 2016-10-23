import React from 'react'

const PopulateMemories = React.createClass({
  render: function() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>
  }
})

module.exports = PopulateMemories
