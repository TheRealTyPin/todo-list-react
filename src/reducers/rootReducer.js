import { combineReducers } from './util'
import todoListsReducer from './todoListsReducer'
import selectedListReducer from './selectedListReducer'

const rootReducer = combineReducers({
	todoLists: todoListsReducer,
	selectedList: selectedListReducer,
})

export default rootReducer
