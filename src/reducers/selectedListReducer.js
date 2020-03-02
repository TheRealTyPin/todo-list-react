import actionType from '../actions/type'

const initialState = {
	id: undefined,
	name: undefined,
}

const selectedListReducer = (rootState = {}, action = {}) => {
	const { selectedList: state = initialState } = rootState
	const { type, id, name } = action
	switch(type){
	case actionType.selectList:
		return {
			id,
			name,
		}
	case actionType.deleteList:
		return initialState
	default:
		return state
	}
}

export default selectedListReducer
