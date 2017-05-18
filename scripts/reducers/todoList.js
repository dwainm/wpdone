const todo = (todo = {}, action) => {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.tempId, 
	        text: action.text,
	        completed: false
	      }
	    case 'UPDATE_TODO_STATE':
	      if (todo.id !== action.id) {
	        return todo
	      }

	      return Object.assign({}, todo, {
	        completed:action.newState
	      })
		case 'UPDATE_TODO_ID':
	      if (todo.id !== action.currentId) {
	        return todo
	      }

	      return Object.assign({}, todo, {
	        id: action.newId
	      })
		case 'UPDATE_TODO_TITLE':
	      if (todo.id !== action.id) {
	        return todo
	      }

	      return Object.assign({}, todo, {
	        text: action.newTitle
	      })
		case 'DELETE_TODO':
	      // used in a filter, returning true means the item will
	      // still be part of our list of todos.
	      return todo.id !== action.id
	    default:
	      return todo
	  }
}

const todoList = (state = [], action) => {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return [
	        ...state,
	            todo(undefined, action)
	      ]
	    case 'UPDATE_TODO_STATE':
		case 'UPDATE_TODO_ID':
		case 'UPDATE_TODO_TITLE':
			return state.map( t => todo( t, action ) )
		case 'DELETE_TODO':
			return state.filter( t => todo( t, action ) )
		case 'CLEAR_COMPLETED':
			return state.filter( todo => ! todo.completed )
	    default:
	      return state
	  }
	}

export default todoList
