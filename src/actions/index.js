import * as types from '../constants/ActionTypes'

export const addMemories = memories => ({type: types.ADD_MEMORIES, memories: memories})
export const addMemory = text => ({type: types.ADD_MEMORY, memory: {name: text}})
export const removeMemory = id => ({type: types.REMOVE_MEMORY, id: id})
