import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './TodoList.css'

import AddInput from './AddInput'
import { deleteList } from '../actions/listActions'
import { addTodo } from '../actions/todoActions'

export const TodoListView = ({selectedList, dispatch}) => {
	const { id, name, todos } = selectedList
	const remainingTodos = todos.filter(({done}) => !done).length
	const dispatchDeleteList = () => dispatch(deleteList(id, name))
	const dispatchAddTodo = (name) => dispatch(addTodo(name, selectedList))
	return <section className="todo-list">
		<header>
			<h2>{name}</h2>
			<p>{`${remainingTodos} ${remainingTodos===1 ? 'task' : 'tasks'} remaining`}</p>
		</header>
		<main>
			<AddInput lable="new task name" onAdd={dispatchAddTodo} />
		</main>
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
