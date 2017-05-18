import React from 'react';
import { clearCompleted } from '../actions/clearCompleted.js';
import { connect } from 'react-redux';

class WpDoneFooter extends React.Component {
  render() {
    return (
    <div id="footer">
    	<a onClick={ (e) => {
    		let completedItems = this.props.state.todoList.filter( t => t.completed );
    		this.props.dispatch( clearCompleted( completedItems ) );
    	}}>
			Clear Completed
		</a>
    </div>
);
  }
}

const mapStateToProps = (state) => ({
		state: state
});

export default connect( mapStateToProps )( WpDoneFooter );
