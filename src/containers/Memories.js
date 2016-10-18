import React from 'react'
import MemoryList from './MemoryList'
import MemoryMaker from './MemoryMaker'

const Memories = React.createClass({
  getInitialState: function() {
    return {memories: this.context.data}
  },
  makeMemory: function(memory) {
    const memories = this.state.memories;
    const id = memories[memories.length - 1].id + 1;
    this.setState({memories: memories.concat([{name: memory.value, id: id}])})
  },
  removeMemory: function(id) {
    const memories = this.state.memories;
    const memory = this.state.memories.filter((memory) => memory.id === id)[0]
    memories.splice(memories.indexOf(memory), 1)
    this.setState({memories: memories})
  },
  render: function() {
    return (
      <div className="memories">
        <MemoryMaker onSubmit={this.makeMemory}/>
        <MemoryList data={this.state.memories} onMemoryClick={this.removeMemory}/>
      </div>
    )
  }
})

Memories.contextTypes = {
  data: React.PropTypes.array
};

module.exports = Memories;
