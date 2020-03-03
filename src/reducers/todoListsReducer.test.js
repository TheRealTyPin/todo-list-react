import todoListsReducer from './todoListsReducer'
import { addList, deleteList } from '../actions/listActions'
import { addTodo, checkTodo } from '../actions/todoActions'

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

	it('handles deleteList action', () => {
		const initialState = [{
			other: 'stuff',
		}, {
			name: 'my list',
			id: '42',
			todos: [],
		}]
		const action = deleteList('42', 'my list')
		const state = todoListsReducer({todoLists: initialState}, action)
		expect(state).toEqual([{
			other: 'stuff',
		}])
	})

	it('handles addTodo action', () => {
		const initialState = [{
			name: 'my list',
			id: '42',
			todos: [],
		}]
		const action = addTodo('new todo', {id: '42', name: 'my list'})
		const state = todoListsReducer({todoLists: initialState}, action)
		expect(state).toEqual([{
			name: 'my list',
			id: '42',
			todos: [{
				id: action.id,
				name: 'new todo',
				done: false,
			}],
		}])
	})

	it('dismisses addTodo action if no list with id', () => {
		const initialState = [{
			name: 'my list',
			id: '42',
			todos: [],
		}]
		const action = addTodo('new todo', {id: 'wrong id', name: 'my list'})
		const state = todoListsReducer({todoLists: initialState}, action)
		expect(state).toBe(initialState)
	})

	it('handles checkTodo action', () => {
		const initialState = [{
			name: 'my list',
			id: '123345',
			todos: [{
				id: '42',
				name: 'check me',
				done: false,
			}, {
				id: '14',
				name: 'leave me',
				done: false,
			}],
		}]
		const action = checkTodo('42', 'check me', true)
		const state = todoListsReducer({todoLists: initialState}, action)
		expect(state).toEqual([{
			name: 'my list',
			id: '123345',
			todos: [{
				id: '42',
				name: 'check me',
				done: true,
			}, {
				id: '14',
				name: 'leave me',
				done: false,
			}],
		}])
	})
})
