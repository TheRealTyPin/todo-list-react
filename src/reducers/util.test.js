import { defaultIfEqual, combineReducers } from './util'

describe('reducer util', () => {
	it('defaultIfEqual retruns defaultValue if piped value is equal', () => {
		const defaultValue = {a: 5}
		const fn = defaultIfEqual(defaultValue)
		expect(fn({a: 5})).toBe(defaultValue)
	})

	it('defaultIfEqual retruns value if piped value is not equal', () => {
		const defaultValue = {a: 5}
		const fn = defaultIfEqual(defaultValue)
		expect(fn({a: 3})).toEqual({a: 3})
	})

	it('combineReducers calles the child reducers with the whole state', () => {
		const reducerA = jest.fn().mockReturnValue('new a')
		const reducerB = jest.fn().mockReturnValue('new b')
		const state = {
			a: 'old a',
			b: 'old b',
		}
		const action = { type: 'TEST-ACTION' }
		const rootReducer = combineReducers({
			a: reducerA,
			b: reducerB,
		})
		expect(rootReducer(state, action)).toEqual({
			a: 'new a',
			b: 'new b',
		})
		expect(reducerA).toHaveBeenCalledWith(state, action)
		expect(reducerB).toHaveBeenCalledWith(state, action)
	})

	it('combineReducers returns same state if nothing changes', () => {
		const reducerA = jest.fn(x => x.a)
		const reducerB = jest.fn(x => x.b)
		const state = {
			a: 'old a',
			b: 'old b',
		}
		const action = { type: 'TEST-ACTION' }
		const rootReducer = combineReducers({
			a: reducerA,
			b: reducerB,
		})
		expect(rootReducer(state, action)).toBe(state)
	})
})
