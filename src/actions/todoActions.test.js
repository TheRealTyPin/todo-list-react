import { addTodo, addTodoWithId, addTodoFactory, checkTodo } from './todoActions'

describe('listActions', () => {
	it('has addTodoWithId action', () => {
		const action = addTodoWithId('todo name', {id: 'list id', name: 'list name'}, 'generated uuid')
		expect(action).toEqual({
			type: 'ADD_TODO',
			name: 'todo name',
			id: 'generated uuid',
			toList: {
				id: 'list id',
				name: 'list name',
			},
		})
	})

	it('has addTodoFactory', () => {
		const mockUuid = jest.fn().mockReturnValue('new uuid')
		const action = addTodoFactory(mockUuid)('todo name here', {id: 'list id', name: 'list name'})
		expect(action).toEqual({
			type: 'ADD_TODO',
			name: 'todo name here',
			id: 'new uuid',
			toList: {
				id: 'list id',
				name: 'list name',
			},
		})
		expect(mockUuid).toHaveBeenCalledWith()
	})

	it('has addTodo action', () => {
		const action = addTodo('todo name here', {id: '1234', name: 'list name'})
		expect(action).toEqual({
			type: 'ADD_TODO',
			name: 'todo name here',
			toList: {
				id: '1234',
				name: 'list name',
			},
			id: expect.toBeAUuid(),
		})
	})

	it('has checkTodo action', () => {
		const action = checkTodo('todo id', 'todo name here', true)
		expect(action).toEqual({
			type: 'CHECK_TODO',
			id: 'todo id',
			name: 'todo name here',
			done: true,
		})
	})
})
