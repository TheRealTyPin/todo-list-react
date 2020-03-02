import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './TodoList.css'

import { deleteList } from '../actions/listActions'

export const TodoListView = ({selectedList, dispatch}) => {
	const { id, name, todos } = selectedList
	const remainingTodos = todos.filter(({done}) => !done).length
	const dispatchDeleteList = () => dispatch(deleteList(id, name))
	return <section className="todo-list">
		<header>
			<h2>{name}</h2>
			<p>{`${remainingTodos} ${remainingTodos===1 ? 'task' : 'tasks'} remaining`}</p>
		</header>
		<footer>
			<button>Clear completed tasks</button>
			<button onClick={dispatchDeleteList}>Delete list</button>
		</footer>
	</section>
}

const TodoList = () => {
	const selectedList = useSelector(({todoLists, selectedList}) => todoLists.find(({id}) => id === selectedList.id))
	const dispatch = useDispatch()
	if(!selectedList) return null
	return <TodoListView selectedList={selectedList} dispatch={dispatch} />
}

export default TodoList
