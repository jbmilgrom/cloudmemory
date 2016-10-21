import React from 'react'

const PopulateMemories = React.createClass({
  render: function() {
    return <button onClick={this.props.populate}>Populate!</button>
  }
})

module.exports = PopulateMemories
