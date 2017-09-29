import React from 'react';
import { withRouter } from 'react-router';
import CommentForm from './product_discussion_comment_form';
import i from 'react-fontawesome';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyFormShown: false
    };

    this.redirectToUser = this.redirectToUser.bind(this);
    this.toggleUpvote = this.toggleUpvote.bind(this);
    this.toggleReplyForm = this.toggleReplyForm.bind(this);
  }

  redirectToUser(userId) {
    return (e) => {
      this.props.history.push(`/users/${userId}`);
    };
  }

  toggleUpvote(e) {
    e.stopPropagation();
    let comment = this.props.comment;
    if (comment.currentUserUpvoted) {
      this.props.destroyUpvote("Comment", this.props.comment.id);
    } else {
      this.props.createUpvote("Comment", this.props.comment.id);
    }
  }

  toggleReplyForm() {
    this.setState({
      replyFormShown: !this.state.replyFormShown
    });
  }

  render() {
    let comment = this.props.comment;
    let countUpvotes = comment.countUpvotes;
    let imageUrl = comment.user.imageUrl;
    let user = comment.user;

    let currentUser = this.props.currentUser;
    let commentForm = undefined;
    let commentActions = undefined;
    let productId = this.props.productId;
    let createComment = this.props.createComment;
    let parentCommentId = this.props.parentCommentId;

    let upvotedClass = (comment.currentUserUpvoted) ? "orange-link-button" : "";

    if (currentUser) {
      commentForm = <CommentForm 
                      user={currentUser}
                      classProp={"reply-form"}
                      commentId={comment.id} 
                      productId={productId}
                      createComment={createComment}
                      parentCommentId={parentCommentId}
                      toggleReplyForm={this.toggleReplyForm}/>;

      commentActions = (
          <div className="comment-actions">
          <div className="comment-upvote-button">
            <button onClick={this.toggleUpvote} className={`link-button upvotes  ${upvotedClass}`}>
              <i className="fa fa-thumbs-up" aria-hidden="true"/> 
              <a>Upvote</a>
              <p>{`(${countUpvotes})`}</p>
            </button>
          </div>
          <div className="comment-reply-button">
            <button onClick={this.toggleReplyForm} className={`link-button`}>
              <i className="fa fa-reply" aria-hidden="true"/> 
              <a>Reply</a>
            </button>
          </div>
          </div>
      );
    } else {
      commentActions = (
        <div className="comment-actions">
          <div className="comment-upvote-button">
            <button onClick={this.openLogin} className="link-button upvotes">
              <i className="fa fa-thumbs-up" aria-hidden="true"/> 
              <a>Upvote</a>
              <p>{`(${countUpvotes})`}</p>
            </button>
          </div>
        </div>
      );
    }

    let replyForm = undefined;
    if (this.state.replyFormShown) {
      replyForm = (
        <div className="reply-form" id={`reply-form-${comment.id}`}>
          {commentForm}
        </div>
      );
    }



    return (
      <div className={this.props.className}>
          <div className="user-spotlight">
            <div className="user-profile-img-container" onClick={this.redirectToUser(user.id)}>
             <img className="user-profile-img" src={imageUrl}/>
            </div>
            <div className="user-spotlight-content">
              <div className="user-spotlight-username" onClick={this.redirectToUser(user.id)}>{user.username}</div>
              <div className="user-spotlight-headline">{user.headline}</div>
            </div>
          </div>

          <div className="comment-body">
            {comment.body}
          </div>

          {commentActions}

          {replyForm}
      </div>
    );
  }
}

export default withRouter(CommentItem);