export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		tempId: 'temp_' + Math.random(),
		text: text
	  }
}
