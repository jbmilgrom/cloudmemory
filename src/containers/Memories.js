import React from 'react'
import { bindActionCreators } from 'redux'
import MemoryList from '../components/MemoryList'
import MemoryMaker from '../components/MemoryMaker'
import * as actions from '../actions'
import compose from '../utilities/compose'

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
  render: function() {
    const { store } = this.context;
    const memories = store.getState();
    const boundActionCreators = bindActionCreators(actions, store.dispatch);
    return (
      <div className="memories">
        <MemoryMaker addMemory={compose(boundActionCreators.addMemory, (memory) => memory.value)}/>
        <MemoryList data={memories} removeMemory={boundActionCreators.removeMemory}/>
      </div>
    )
  }
})

Memories.contextTypes = {
  store: React.PropTypes.object
};

module.exports = Memories;
