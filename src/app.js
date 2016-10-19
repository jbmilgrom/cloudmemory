import React from 'react'
import ReactDOM from 'react-dom'
import * as Redux from 'redux' // no default export
import Memories from './containers/Memories'
import Provider from './containers/Provider'
import memoriesReducer from './reducers/memories'

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

const store = Redux.createStore(memoriesReducer);

store.dispatch({type: 'ADD_MEMORIES', memories: memoriesList});

ReactDOM.render(
  <Provider store={store}>
    <Memories />
  </Provider>,
  document.getElementById('content')
)
