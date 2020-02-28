import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
	it('snapshot matches', () => {
		const wrapper = shallow(<App />)
		expect(wrapper).toMatchSnapshot()
	})

	it('renders header', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find('.App-header')).toHaveText('Stuff I need to do')
	})
})
