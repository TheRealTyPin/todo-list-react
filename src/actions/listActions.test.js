import { addList, addListWithId, addListFactory, selectList } from './listActions'

describe('listActions', () => {
	it('has addListWithId action', () => {
		const action = addListWithId('list name here', 'generated uuid')
		expect(action).toEqual({
			type: 'ADD_LIST',
			name: 'list name here',
			id: 'generated uuid',
		})
	})

	it('has addListFactory', () => {
		const mockUuid = jest.fn().mockReturnValue('new uuid')
		const action = addListFactory(mockUuid)('list name here')
		expect(action).toEqual({
			type: 'ADD_LIST',
			name: 'list name here',
			id: 'new uuid',
		})
		expect(mockUuid).toHaveBeenCalledWith()
	})

	//test not neccesarry but wanted to play with custom matchers (toBeAUuid())
	it('has addList action', () => {
		const action = addList('list name here')
		expect(action).toEqual({
			type: 'ADD_LIST',
			name: 'list name here',
			id: expect.toBeAUuid(),
		})
	})

	it('has selectList action', () => {
		const action = selectList('uuid_5432', 'my list')
		expect(action).toEqual({
			type: 'SELECT_LIST',
			name: 'my list',
			id: 'uuid_5432',
		})
	})
})
