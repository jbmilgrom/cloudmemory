import React from 'react'
import Memory from './Memory'

const MemoryList = React.createClass({

  render: function() {
    let memoryNodes = this.props.data.map((memory) => {
      return <Memory key={memory.id} name={memory.name} onClick={this.props.onMemoryClick.bind(null, memory.id)}/>
    });
    return (
      <div className="memory-list">
        {memoryNodes}
      </div>
    )
  }
})

module.exports = MemoryList;
