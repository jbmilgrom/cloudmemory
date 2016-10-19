import React from 'react'
import MemoryList from './MemoryList'
import MemoryMaker from './MemoryMaker'

const Memories = React.createClass({
  componentDidMount: function() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  makeMemory: function(memory) {
    const { store } = this.context;
    store.dispatch({type: 'ADD_MEMORY', memory: {name: memory.value}});
  },
  removeMemory: function(id) {
    const { store } = this.context;
    store.dispatch({type: 'REMOVE_MEMORY', id: id});
  },
  render: function() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div className="memories">
        <MemoryMaker onSubmit={this.makeMemory}/>
        <MemoryList data={state.memories} onMemoryClick={this.removeMemory}/>
      </div>
    )
  }
})

Memories.contextTypes = {
  store: React.PropTypes.object
};

module.exports = Memories;
