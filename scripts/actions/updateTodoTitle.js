export const updateTodoTitle = (id, newTitle ) => {
	return {
		type: 'UPDATE_TODO_TITLE',
		id: id,
		newTitle: newTitle
	}
}
