import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import WpDoneTodo from './WpDoneTodo.jsx';

class WpDoneTodoList extends React.Component {
	render () {
		let {state} = this.props;
		return( 
     		<div className="todo-list">
			{
				state.todoList.map(
					(item) => <WpDoneTodo 
							id={item.id} 
							text={item.text} 
							completed={item.completed}
							/>
				) 
			}
    		</div>
		)
	}
}

/**
 	*  * This function maps the state to a
 	*   * prop called `state`.
 	*    *
 	*     * In larger apps it is often good
 	*      * to be more selective and only
 	*       * map the part of the state tree
 	*        * that is necessary.
 	*         */
	const mapStateToProps = (state) => ({
		    state: state
	});

export default connect( mapStateToProps )( WpDoneTodoList );
