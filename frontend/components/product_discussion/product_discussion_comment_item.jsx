import React from 'react';
import { withRouter } from 'react-router';
import CommentForm from './product_discussion_comment_form';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyFormShown: false
    };

    this.redirectToUser = this.redirectToUser.bind(this);
    this.upvote = this.upvote.bind(this);
    this.toggleReplyForm = this.toggleReplyForm.bind(this);
  }

  redirectToUser(userId) {
    return (e) => {
      this.props.history.push(`/users/${userId}`);
    };
  }

  upvote() {
    console.log('upvote');
  }

  toggleReplyForm() {
    this.setState({
      replyFormShown: !this.state.replyFormShown
    });
  }

  render() {
    let comment = this.props.comment;
    let imageUrl = comment.user.imageUrl;
    let user = comment.user;

    let currentUser = this.props.currentUser;
    let commentForm = undefined;
    let productId = this.props.productId;
    let createComment = this.props.createComment;
    let parentCommentId = this.props.parentCommentId;

    if (currentUser) {
      commentForm = <CommentForm 
                      user={currentUser}
                      classProp={"reply-form"}
                      commentId={comment.id} 
                      productId={productId}
                      createComment={createComment}
                      parentCommentId={parentCommentId}
                      toggleReplyForm={this.toggleReplyForm}/>;
    }

    let replyForm = undefined;
    if (this.state.replyFormShown) {
      replyForm = (
        <div className="reply-form" id={`reply-form-${comment.id}`}>
          {commentForm}
        </div>
      )
    }

    return (
      <div className={this.props.className}>
          <div className="user-spotlight">
            <div className="user-profile-img-container" onClick={this.redirectToUser(user.id)}>
             <img className="user-profile-img" src={imageUrl}/>
            </div>
            <div className="user-spolight-content">
              <div>{user.username}</div>
              <div>{user.headline}</div>
            </div>
          </div>

          <div className="comment-body">
            {comment.body}
          </div>

          <div className="comment-actions">
            <div className="comment-upvote-button">
              <button onClick={this.upvote} className="link-button">Upvote</button>
            </div>
            <div className="comment-reply-button">
              <button onClick={this.toggleReplyForm} className="link-button">Reply</button>
            </div>
          </div>

          {replyForm}
      </div>
    );
  }
}

export default withRouter(CommentItem);