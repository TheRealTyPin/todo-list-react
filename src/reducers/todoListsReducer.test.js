import todoListsReducer from './todoListsReducer'
import { addList } from '../actions/listActions'

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

	it('handles addList action', () => {
		const initialState = [{
			other: 'stuff',
		}]
		const action = addList('my new list')
		const state = todoListsReducer({todoLists: initialState}, action)
		expect(state).toEqual(expect.arrayContaining(initialState))
		expect(state).toEqual(expect.arrayContaining([{
			name: 'my new list',
			id: action.id,
			todos: [],
		}]))
	})
})
