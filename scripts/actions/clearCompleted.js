export const clearCompleted = (completedItems) => {
	return {
		type: 'CLEAR_COMPLETED',
		items: completedItems
	  }
}
