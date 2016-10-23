import React from 'react'
import Memory from './Memory'

const MemoryList = React.createClass({

  render: function() {
    let memoryNodes = this.props.data.map((memory) => {
      return <Memory
        key={memory.id}
        name={memory.name}
        onClick={() => this.props.removeMemory(memory.id)} />
    });
    return (
      <ul className="memory-list">
        {memoryNodes}
      </ul>
    )
  }
})

module.exports = MemoryList;
