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

const ListsOverview = () => {
	const todoLists = useSelector(R.prop('todoLists'))
	const selectedListId = useSelector(({selectedList}) => selectedList.id)
	const dispatch = useDispatch()
	return <ListsOverviewView todoLists={todoLists} selectedListId={selectedListId} dispatch={dispatch} />
}

export default ListsOverview
