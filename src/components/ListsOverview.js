import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda'
import './ListsOverview.css'

import AddInput from './AddInput'
import { addList, selectList } from '../actions/listActions'

export const ListsOverviewView = ({todoLists, selectedListId, dispatch}) => {
	const dispatchAddList = name => dispatch(addList(name))
	const dispatchSelectList = (id, name) => dispatch(selectList(id, name))
	const renderListItem = ({name, id}) => <li
		className={id === selectedListId ? 'active' : ''}
		key={id}
		onClick={() => dispatchSelectList(id, name)}
	>{name}</li>
	return <div className="lists-overview">
		<h2>My lists</h2>
		<ul>
			{todoLists.map(renderListItem)}
		</ul>
		<AddInput lable="new list name" onAdd={dispatchAddList} />
	</div>
}

export const getTodoLists = R.prop('todoLists')

export const getSelectedListId = ({selectedList}) => selectedList.id

const ListsOverview = () => {
	const todoLists = useSelector(getTodoLists)
	const selectedListId = useSelector(getSelectedListId)
	const dispatch = useDispatch()
	return <ListsOverviewView todoLists={todoLists} selectedListId={selectedListId} dispatch={dispatch} />
}

export default ListsOverview
