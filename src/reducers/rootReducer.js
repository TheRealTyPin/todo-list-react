import { combineReducers } from './util'
import todoListsReducer from './todoListsReducer'

const rootReducer = combineReducers({
	todoLists: todoListsReducer,
})

export default rootReducer
