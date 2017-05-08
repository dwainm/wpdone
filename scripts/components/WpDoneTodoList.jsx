import React from 'react';
import WpDoneTodo from './WpDoneTodo.jsx';
export default class WpDoneTodoList extends React.Component {
  render() {
   var items = [{id:1,title:'sample'},{id:2,title:'sample'}];
   var listElements = [];
    items.forEach( function(item, index ){
        listElements.push( <WpDoneTodo id='1' title='sample' /> );
  });
      
      
    return (
     <div className="todo-list">
        this.props.todoList.forEach(
            function(item, index){
            }
        );
    </div>
    );
}
}
