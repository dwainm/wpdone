import React from 'react';
export default class WpDoneTodo extends React.Component {
  render() {
     var title = this.props.title;
     var id    = this.props.id;
    return (
     <div className="todo-item">
        {id} - {title}
    </div>
    );
}
}
