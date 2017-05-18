import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateTodoState } from '../actions/UpdateTodoState.js';
import { updateTodoTitle } from '../actions/UpdateTodoTitle.js';

class WpDoneTodo extends React.Component {
	updateState( e ) {
		let {dispatch} = this.props;
		dispatch(updateTodoState(this.props.id, e.target.checked ));
	}

	render() {
    let text    = this.props.text
    let id      = this.props.id;
    let checked = this.props.completed ;
	let classes = 'todo-item '+( checked ? 'completed':'not');
	let boundedUpdateState = this.updateState.bind( this);
	let styles = checked ? {textDecoration: 'line-through'} : {};
	let input;
	let textDiv;
	let dispatch = this.props.dispatch;
    return (
     <div className={classes} style={styles} key={id} id={id}>
		<input  type="checkbox" 
				checked={checked}
				onChange={boundedUpdateState}
		/>
		<div  ref={ node=> { textDiv = node } } onClick={(el) => {
		// this should be a new action that triggers a new
		// prop called isEditing, but I need to get to other things
		// now, feel free to add :)
			input.style.display = "inline";
			el.target.style.display = "none";
		}}>
			{text}
		</div>
		<form  onSubmit= {
			e => {
				e.preventDefault();
				dispatch( updateTodoTitle( id, input.value ) );
				input.style.display = "none";
				textDiv.style.display = "inline";
			}
		}>
			<input ref={ node=> { input = node} } style={{display: "none"}} type="text" defaultValue={text} />
		</form>
    </div>
    );
}
}

/**
* This function maps the state to a
* prop called `state`.
*
* In larger apps it is often good
* to be more selective and only
* map the part of the state tree
* that is necessary.
*/
const mapStateToProps = (state) => ({
		state: state
});

export default connect( mapStateToProps )( WpDoneTodo );
