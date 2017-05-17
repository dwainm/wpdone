export const updateTodoId = (currentId, newId ) => {
	return {
		type: 'UPDATE_TODO_ID',
		newId: newId,
		currentId: currentId
	}
}
