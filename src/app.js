import React from 'react'
import ReactDOM from 'react-dom'
import * as Redux from 'redux' // no default export
import Memories from './containers/Memories'
import Provider from './containers/Provider'

const memoriesList = [{
  name: 'hey',
  id: 1
}, {
  name: 'bob',
  id: 2
}, {
  name: 'sarita',
  id: 3
}]

const store = Redux.createStore((state = {memories: []}, action) => {
  switch (action.type) {
    case 'ADD_MEMORIES':
      return Object.assign({}, state, {
        memories: [...state.memories, ...action.memories]
      });
    case 'ADD_MEMORY':
      const { memories } = state;
      const id = memories[memories.length - 1].id + 1;
      return Object.assign({}, state, {
        memories: [...memories, Object.assign({}, action.memory, {id: id})]
      });
    case 'REMOVE_MEMORY':
      return Object.assign({}, state, {
        memories: state.memories.filter(memory => memory.id !== action.id)
      });
    default:
      return state
  }
});

store.dispatch({type: 'ADD_MEMORIES', memories: memoriesList});

ReactDOM.render(
  <Provider store={store}>
    <Memories />
  </Provider>,
  document.getElementById('content')
)
