import { FETCHING_REPOS, REPOS_FETCH_SUCCESS } from '../constants/ActionTypes'

export default (
  state = {isFetching: false, repos: []},
  action
) => {
  console.log('repos reducer: ', action);
  switch (action.type) {
    case FETCHING_REPOS:
      console.log('FETCHING_REPOS in reducer');
      return Object.assign({}, state, {isFetching: true});
    case REPOS_FETCH_SUCCESS:
      console.log('REPOS_FETCH_SUCCESS in reducer');
      return Object.assign({}, state, {repos: action.repos});
    default:
      return state;
  }
};
