import React from 'react'

const Memory = React.createClass({
  render: function() {
    return <div onClick={this.props.onClick}>{this.props.name}</div>
  }
})

module.exports = Memory
