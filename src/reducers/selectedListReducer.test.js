import selectedListReducer from './selectedListReducer'
import { selectList } from '../actions/listActions'

describe('selectedListReducer', () => {
	it('returns the same state if action does not affect it', () => {
		const initialState = selectedListReducer()
		const unusedAction = { type: 'SHOULD_NOT_BE_USED' }
		expect(selectedListReducer({ points: initialState }, unusedAction)).toBe(initialState)
	})

	it('starts with no selectedList', () => {
		const initialState = selectedListReducer()
		expect(initialState).toEqual({
			id: undefined,
			name: undefined,
		})
	})

	it('handles selectList action', () => {
		const initialState = {
			id: undefined,
			name: undefined,
		}
		const action = selectList('1234', 'name just for readability')
		const state = selectedListReducer({selectedList: initialState}, action)
		expect(state).toEqual({
			id: '1234',
			name: 'name just for readability',
		})
	})
})
