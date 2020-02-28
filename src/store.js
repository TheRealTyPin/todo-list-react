import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

export const buildStoreFactory = ({
	createStore,
	applyMiddleware,
	thunk,
	composeWithDevTools,
}) => ({
	rootReducer,
	preloadedState,
}) => createStore(
	rootReducer,
	preloadedState,
	composeWithDevTools({})(applyMiddleware(thunk)),
)


export default buildStoreFactory({
	createStore,
	applyMiddleware,
	thunk,
	composeWithDevTools,
})
