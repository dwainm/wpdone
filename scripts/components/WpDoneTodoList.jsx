import React from 'react';
import WpDoneTodo from './WpDoneTodo.jsx';
export default class WpDoneTodoList extends React.Component {
  render() {
   var items = [{id:1,title:'finish x'},{id:2,title:'do y'}];
	const listElements = items.map((item) =>
	  	<WpDoneTodo id={item.id} title={item.title} />
	);
return (
     <div className="todo-list">
		{listElements}
    </div>
    );
}
}
