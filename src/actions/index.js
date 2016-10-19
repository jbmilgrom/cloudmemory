import * as types from '../constants/ActionTypes'

export const addMemories = memories => ({type: types.ADD_MEMORIES, memories: memories})
export const addMemory = name => ({type: types.ADD_MEMORY, memory: {name: name}})
export const removeMemory = id => ({type: types.REMOVE_MEMORY, id: id})
