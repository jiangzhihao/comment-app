import React,{ Component } from 'react';
import Comment from '../components/Comment'

export default class CommentInput extends Component{
	constructor(props){
		super(props)
		this.state={
			username:props.username,
			content:''
		}
	}
	 componentDidMount () {
    	this.textarea.focus()
 	 }
   handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

   handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
	handleSubmit(){
		this.props.onSubmit({
			username:this.state.username,
			content:this.state.content,
		    createdTime: +new Date()
		})
		this.setState({ content: '' })
	}
	handleUsernameBlur (event) {
    if (this.props.onUserNameInputBlur) {
    	
      this.props.onUserNameInputBlur(event.target.value)
    }
  }
	render(){
		return (
			<div className='comment-input'>
	        <div className='comment-field'>
	          <span className='comment-field-name'>用户名：</span>
	          <div className='comment-field-input'>
	            <input 
	            	onBlur={this.handleUsernameBlur.bind(this)}
	            	onChange={this.handleUsernameChange.bind(this)} 
	            	value={this.state.username} />
	          </div>
	        </div>
	        <div className='comment-field'>
	          <span className='comment-field-name'>评论内容：</span>
	          <div className='comment-field-input'>
	            <textarea 
	                ref={(textarea) => this.textarea = textarea}
	            	onChange={this.handleContentChange.bind(this)} 
	            	value={this.state.content} />
	          </div>
	        </div>
	        <div className='comment-field-button'>
	          <button onClick={this.handleSubmit.bind(this)}>
	            发布
	          </button>
	        </div>
	      </div>
    )
	}
}