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

const todoListsReducer = (rootState = {}, action = {}) => {
	const { todoLists: state = initialState } = rootState
	const { type, id, name } = action
	switch(type){
	case actionType.addList:
		return addList(state, id, name)
	default:
		return state
	}
}

export default todoListsReducer
