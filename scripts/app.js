/*
    this is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import wpDoneReducer from './reducers'
import  wpDoneMiddleware from './wpDoneMiddleware.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import wpDonePrepareInitialState from './wpDonePrepareInitialState.js';

const initialState = wpDonePrepareInitialState ( localizedInitialState );
let store = createStore( wpDoneReducer, initialState, applyMiddleware( wpDoneMiddleware  ) );
window.store = store;
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
