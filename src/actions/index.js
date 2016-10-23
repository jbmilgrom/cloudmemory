import * as types from '../constants/ActionTypes'

export const addMemories = memories => ({type: types.ADD_MEMORIES, memories: memories})
export const addMemory = name => ({type: types.ADD_MEMORY, memory: {name: name}})
export const removeMemory = id => ({type: types.REMOVE_MEMORY, id: id})

const URL = 'https://api.github.com/users/jbmilgrom';

// actionCreator that returns a function (handled by thunk middleware)
export const getRepos = user => dispatch => {
  dispatch({type: types.FETCHING_REPOS});

  return fetch(URL).then(resp => {
    let json = resp.json();
    console.log('resp.json(): ', json);
    return dispatch({type: types.REPOS_FETCH_SUCCESS, repos: json});
  });
}
