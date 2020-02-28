import todoListsReducer from './todoListsReducer'

describe('todoListsReducer', () => {
	it('returns the same state if action does not affect it', () => {
		const initialState = todoListsReducer()
		const unusedAction = { type: 'SHOULD_NOT_BE_USED' }
		expect(todoListsReducer({ points: initialState }, unusedAction)).toBe(initialState)
	})

	it('starts with empty todoLists', () => {
		const initialState = todoListsReducer()
		expect(initialState).toEqual([])
	})
})
