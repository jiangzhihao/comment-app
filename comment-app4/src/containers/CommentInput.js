import React,{ Component } from 'react';
import CommentInput from '../components/CommentInput'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { initComments, deleteComment,addComment} from '../reducers/comments'


class CommentInputContainer extends Component{
	  constructor () {
	    super()
	    this.state = { username: '' }
	  }
	 componentWillMount () {
	    this._loadUsername()
	  }

	 _loadUsername () {
	    const username = localStorage.getItem('username')
	    if (username) {
	      this.setState({ username })
	    }
	  }

	 _saveUsername (username) {
	    localStorage.setItem('username', username)
	  }



	handleSubmit(comment){
		
		if (!comment) return
	    if (!comment.username) return alert('请输入用户名')
	    if (!comment.content) return alert('请输入评论内容')
	    const { comments } = this.props
	    const newComments = [...comments, comment]
	    localStorage.setItem('comments', JSON.stringify(newComments))
		
		this.props.onSubmit(comment)
	}
	render(){
		return (
		 <CommentInput
		 	username={this.state.username}
       	    onUserNameInputBlur={this._saveUsername.bind(this)}
	        onSubmit={this.handleSubmit.bind(this)} />
		)
	}

}

const mapStateToProps=(state)=>{
	return {
		comments:state.comments
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		onSubmit:(comment)=>{
			dispatch(addComment(comment))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInputContainer)
