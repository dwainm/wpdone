import { updateTodoId } from './actions/updateTodoId.js';
import request from './wpDoneRestClient.js';
const wpDoneMiddleware = store => next => action => {

next( action );
// handling adding new todos
	// firing off new todo but
	// remembering initial ID so we can updated
	// it.
	if ( 'ADD_TODO' === action.type ) {
		let todo =  {
			title: action.text,
			status: 'publish',
			content: JSON.stringify({completed: false})
		};
		let tempId = action.tempId;
		request(
			wpDoneRestApi.root,
			'POST',
			todo,
			( data ) => store.dispatch( updateTodoId( tempId, data.id ) ),
			( error ) => console.log( error )
		);
	}
	// handling changing completedness
	if ( 'UPDATE_TODO_STATE' === action.type ) {
		let todo =  {
			content: JSON.stringify({completed: action.newState})
		};
		request(
			wpDoneRestApi.root + '/' + action.id,
			'POST',
			todo,
			()=>{},// no call back needed now
			( error ) => console.log( error )
		);
	}
	// handling updating existing todos title
	if ( 'UPDATE_TODO_TITLE' === action.type ) {
		let todo =  {
			title: action.newTitle
		};

		request(
			wpDoneRestApi.root + '/' + action.id,
			'POST',
			todo,
			( data ) => data,// do nothing
			( error ) => console.log( error )
		);
	}
	// Handling clearing all completed items
	if ( 'CLEAR_COMPLETED' === action.type ) {
		action.items.map(
			item => {
				request(
					wpDoneRestApi.root + '/' + item.id,
					'DELETE',
					{},
					( data ) => dconsole.log( data ),// do nothing
					( error ) => console.log( error )
				);
			}
		);
	}
}
export default wpDoneMiddleware;
