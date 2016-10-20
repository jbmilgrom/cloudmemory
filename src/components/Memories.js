import React from 'react'
import MemoryList from './MemoryList'
import MemoryMaker from './MemoryMaker'
import compose from '../utilities/compose'

const Memories = React.createClass({
  render: function() {
    return (
      <div className="memories">
        <MemoryMaker addMemory={compose(this.props.addMemory, (memory) => memory.value)}/>
        <MemoryList data={this.props.memories} removeMemory={this.props.removeMemory}/>
      </div>
    )
  }
});

module.exports = Memories;
