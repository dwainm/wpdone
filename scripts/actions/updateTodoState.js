export const updateTodoState = (id, newState ) => {
	return {
		type: 'UPDATE_TODO_STATE',
		id: id,
		newState: newState
	}
}
