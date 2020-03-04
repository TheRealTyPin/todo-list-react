import * as R from 'ramda'
import actionType from '../actions/type'
import { defaultIfEqual } from './util'

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

const keepRefUpdate = fn => x => R.pipe(fn, defaultIfEqual(x))(x)

const checkTodo = (state, id, done) => keepRefUpdate(R.map(
	keepRefUpdate((todolist) => ({
		...todolist,
		todos: R.map(todo => todo.id === id ? {...todo, done} : todo)(todolist.todos),
	})),
))(state)

const clearCompletedTodos = (state, fromListId) => {
	const index = R.findIndex(({id}) => id === fromListId, state)
	if(index === -1) return state
	return R.adjust(
		index,
		todoList => ({
			...todoList,
			todos: todoList.todos.filter(({done}) => !done),
		}),
		state,
	)
}

const todoListsReducer = (rootState = {}, action = {}) => {
	const { todoLists: state = initialState } = rootState
	const { type, id, name, toList, done, fromList } = action
	switch(type){
	case actionType.addList:
		return addList(state, id, name)
	case actionType.deleteList:
		return deleteList(state, id)
	case actionType.addTodo:
		return addTodo(state, toList.id, id, name)
	case actionType.checkTodo:
		return checkTodo(state, id, done)
	case actionType.clearCompletedTodos:
		return clearCompletedTodos(state, fromList.id)
	default:
		return state
	}
}

export default todoListsReducer
