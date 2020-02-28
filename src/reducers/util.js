import * as R from 'ramda'

export const defaultIfEqual = defaultValue => value =>
	R.equals(value, defaultValue) ? defaultValue : value

export const combineReducers = (reducers) => (state, action) => {
	return R.pipe(
		R.map(reducer => reducer(state, action)),
		defaultIfEqual(state),
	)(reducers)
}
