import * as R from 'ramda'
import { uuid } from 'uuidv4'
import actionType from './type'

export const addTodoWithId = (name, toList, id) => ({
	type: actionType.addTodo,
	name,
	id,
	toList: R.pick(['id', 'name'], toList),
})

export const addTodoFactory = uuid => (name, toList) => addTodoWithId(name, toList, uuid())

export const addTodo = addTodoFactory(uuid)

export const checkTodo = (id, name, done) => ({
	type: actionType.checkTodo,
	id,
	name,
	done,
})
