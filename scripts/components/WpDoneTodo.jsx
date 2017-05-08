import React from 'react';
export default class WpDoneTodo extends React.Component {
  render() {
     var title = this.prop.title;
     var id    = this.prop.id;
    return (
     <div className="todo-item">
        {id} - {title}
    </div>
    );
}
}
