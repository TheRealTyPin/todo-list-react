// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import { isUuid } from 'uuidv4'

configure({ adapter: new Adapter() })


expect.extend({
	toBeAUuid: (received) => {
		if(isUuid(received)){
			return {
				message: () => `expected ${received} not to be a UUID`,
				pass: true,
			}
		}else{
			return {
				message: () => `expected ${received} to be a UUID`,
				pass: false,
			}
		}
	},
})

