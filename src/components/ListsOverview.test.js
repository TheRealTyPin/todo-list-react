import React from 'react'
import { shallow } from 'enzyme'

import { addListWithId, selectList } from '../actions/listActions'

import { ListsOverviewView } from './ListsOverview'

describe('ListsOverview', () => {
	it('snapshot matches', () => {
		const todoLists = [
			{name: 'test name', id: 'some id'},
		]
		const wrapper = shallow(<ListsOverviewView todoLists={todoLists} />)
		expect(wrapper).toMatchSnapshot()
	})

	it('dispatches a addList action', () => {
		const dispatch = jest.fn()
		const wrapper = shallow(<ListsOverviewView todoLists={[]} dispatch={dispatch} />)
		wrapper.find('AddInput').prop('onAdd')('my new cool list')
		expect(dispatch).toHaveBeenCalledWith(addListWithId('my new cool list', expect.toBeAUuid()))
	})

	it('dispatches a selectList action', () => {
		const dispatch = jest.fn()
		const lists = [{id: 'test id', name: 'test list'}]
		const wrapper = shallow(<ListsOverviewView todoLists={lists} dispatch={dispatch} />)
		wrapper.find('li').simulate('click')
		expect(dispatch).toHaveBeenCalledWith(selectList('test id', 'test list'))
	})

	it('selectedList list is active', () => {
		const dispatch = jest.fn()
		const lists = [
			{id: 'test id', name: 'test list'},
			{id: '42', name: 'Active list'},
		]
		const wrapper = shallow(<ListsOverviewView todoLists={lists} selectedListId="42" dispatch={dispatch} />)
		expect(wrapper.find('ul').childAt(0)).not.toHaveClassName('active')
		expect(wrapper.find('ul').childAt(1)).toHaveClassName('active')
	})
})
