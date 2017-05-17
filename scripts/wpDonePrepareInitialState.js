const wpDonePrepareInitialState = ( wordpressPosts ) => {
	console.log( wordpressPosts );
	let todoList = wordpressPosts.map( (post) => {
		return {
			id: post['id'],
			text: post['text'],
			completed: post['completed'],
		}
	});

	return { todoList: todoList};
}

export default wpDonePrepareInitialState;
