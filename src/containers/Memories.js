import React from 'react'
import MemoryList from '../components/MemoryList'
import MemoryMaker from '../components/MemoryMaker'
import * as actions from '../actions'

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
    store.dispatch(actions.addMemory(memory.value));
  },
  removeMemory: function(id) {
    const { store } = this.context;
    store.dispatch(actions.removeMemory(id));
  },
  render: function() {
    const { store } = this.context;
    const memories = store.getState();
    return (
      <div className="memories">
        <MemoryMaker onSubmit={this.makeMemory}/>
        <MemoryList data={memories} onMemoryClick={this.removeMemory}/>
      </div>
    )
  }
})

Memories.contextTypes = {
  store: React.PropTypes.object
};

module.exports = Memories;
