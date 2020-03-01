import { uuid } from 'uuidv4'
import actionType from './type'

export const addListWithId = (name, id) => ({
	type: actionType.addList,
	name,
	id,
})

export const addListFactory = uuid => name => addListWithId(name, uuid())

export const addList = addListFactory(uuid)

export const selectList = (id, name) => ({
	type: actionType.selectList,
	id,
	name,
})
