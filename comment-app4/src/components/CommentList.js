import React,{ Component } from 'react';
import Comment from '../components/Comment'

export default class CommentList extends Component{
	
	handleDelete(index){
		this.props.onDeleteComment(index)
	}
	render(){
		console.log(this.props.comments)
		return (
			
			<div>
			{this.props.comments.map((comment,i)=>
			<Comment 
				comment={comment}
				key={i}
				index={i}
				onDeleteComment={this.handleDelete.bind(this)} />
				)
			}
			</div>
			)
	}
}