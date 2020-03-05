// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

import { Provider } from 'react-redux'
import store from './redux/store'

// renders app to the DOM

// wraps app with Provider API provided by React Redux
const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	rootElement
	)