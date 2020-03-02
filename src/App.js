import React from 'react'
import './App.css'

import ListsOverview from './components/ListsOverview'
import TodoList from './components/TodoList'

function App() {
	return (
		<div className="App">
			<h1 className="App-header">Stuff I need to do</h1>
			<ListsOverview />
			<TodoList />
		</div>
	)
}

export default App
