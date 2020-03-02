import * as R from 'ramda'
import actionType from '../actions/type'

const initialState = []

const addList = (state, id, name) => [
	...state,
	{
		id,
		name,
		todos: [],
	},
]

const deleteList = (state, id) => state.filter(todo => todo.id !== id)

const addTodo = (state, listId, id, name) => {
	const index = R.findIndex(({id}) => id === listId, state)
	if(index === -1) return state
	return R.adjust(
		index,
		todoList => ({
			...todoList,
			todos: [...todoList.todos, {id, name, done: false}],
		}),
		state,
	)
}

const todoListsReducer = (rootState = {}, action = {}) => {
	const { todoLists: state = initialState } = rootState
	const { type, id, name, toList } = action
	switch(type){
	case actionType.addList:
		return addList(state, id, name)
	case actionType.deleteList:
		return deleteList(state, id)
	case actionType.addTodo:
		return addTodo(state, toList.id, id, name)
	default:
		return state
	}
}

export default todoListsReducer
