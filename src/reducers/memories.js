import { ADD_MEMORIES, ADD_MEMORY, REMOVE_MEMORY } from '../constants/ActionTypes'

export default (state = [], action) => {
  console.log('reducer action: ', action);
  switch (action.type) {
    case ADD_MEMORIES:
      return [...state, ...action.memories];
    case ADD_MEMORY:
      const nextId = state.reduce((max, memory) => Math.max(max, memory.id), -1) + 1;
      return [...state, Object.assign({}, action.memory, {id: nextId})];
    case REMOVE_MEMORY:
      return state.filter(memory => memory.id !== action.id);
    default:
      return state;
  }
};
