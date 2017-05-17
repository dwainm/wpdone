import React from 'react';
import { addTodo } from '../actions/addTodo';
import { connect } from 'react-redux'

let WpDoneAddTodo = ( {dispatch} ) => {
	let input
	return (
		<div><form onSubmit={e => {
			e.preventDefault()
			if (!input.value.trim()) {
			 	return
			}
			dispatch(addTodo(input.value))
			input.value = ''
		}}>
			<input ref={node => { input = node }} />
			<button type="submit"> Add Todo </button>
		</form></div>
	)
}

WpDoneAddTodo = connect()(WpDoneAddTodo);
export default WpDoneAddTodo;
