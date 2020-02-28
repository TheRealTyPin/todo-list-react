const initialState = []

const todoListsReducer = (rootState = {}) => {
	const { todoLists: state = initialState } = rootState
	return state
}

export default todoListsReducer
