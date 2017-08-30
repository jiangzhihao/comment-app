import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import commentsReducer from './reducers/comments'
import { createStore } from 'redux'
import CommentApp from './containers/CommentApp'
import { Provider } from 'react-redux'



const store=createStore(commentsReducer)

ReactDOM.render(
	<Provider store={store}>
		<CommentApp />
	</Provider>,
	 document.getElementById('root')
	);

