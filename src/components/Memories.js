import React from 'react'
import MemoryList from './MemoryList'
import MemoryMaker from './MemoryMaker'
import PopulateMemories from './PopulateMemories'
import List from './List'
import compose from '../utilities/compose'

const Memories = React.createClass({
  render: function() {
    return (
      <div className="memories">
        <List>
          <MemoryMaker addMemory={compose(this.props.addMemory, (memory) => memory.value)}/>
          <PopulateMemories onClick={this.props.getRepos}>
            Get Repos
          </PopulateMemories>
        </List>
        <MemoryList data={this.props.memories} removeMemory={this.props.removeMemory}/>
      </div>
    )
  }
});

module.exports = Memories;
